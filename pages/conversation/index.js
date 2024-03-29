import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { io } from "socket.io-client";
import { appConfig } from "../../config/app";
import jwtDecode from "jwt-decode";
import { authentication } from "../../utils/authentication";
import { InfoContact } from "../../components/InfoContact";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import moment from "moment";


const SuperAgent = require("superagent");

const conversation = () => {

    const [conversation, setConversation] = useState([]);
    const [room, setRoom] = useState(null);
    const [roomActive, setRoomActive] = useState(null);
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [value, setValue] = useState('');
    const [user, setUser] = useState(null);
    const messagesReff = useRef();

    useEffect(()=>{
        const token = authentication.isVerified()

        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }

        setSocket(
            io("http://49.0.2.250:3002", {
                    withCredentials: true,
                    extraHeaders: {
                        "authorization": token
                    }
            }))
    }, [])
    useEffect(() => {

        socket?.on("rooms", (data) => {
            setConversation(data)
        });

        socket?.on('new_messages', (data) => {
            setMessages((prev) => [...prev, data]);
        });
    }, [socket]);


    const handleClick = async (event) => {

        if (room) {
            socket.emit('leaveConversation', room)
        }
        setRoom(event)
        setRoomActive(event)
        socket.emit('joinConversation', event)


        await SuperAgent.get(`${appConfig.apiUrl}/message/${event}`)
        .then((res) => {
            setMessages(res.body.data)
        })


    }


    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const data = {
                conversationId: roomActive,
                senderId: user?.id,
                messages: messagesReff.current.value
            };

            socket?.emit('createMessage', data);

        } catch (e) {
            console.log(e.message);
        }
    };


    return (
        <div>
            <div className="container py-24">
                <div className="h-screen py-6">
                    <div className="flex h-full border border-gray-600 rounded shadow-lg">
                        {/* Left */}
                        <div className="flex flex-col border basis-1/3">
                            {/* Header */}
                            <div className="flex flex-row items-center justify-between px-3 py-2 bg-slate-300">
                                <div>
                                    <div className="p-1 bg-gray-200 rounded-full">
                                        <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
                                            <Image
                                            src={"https://source.unsplash.com/random/40x40?people"}
                                            width={40}
                                            height={40}
                                            alt="Profile Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1>{user?.fullName}</h1>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="px-2 py-2 bg-slate-200">
                                <input type="text" className="w-full px-2 py-2 text-sm" placeholder="Search or start new chat"/>
                            </div>

                            {/* Contacts */}
                            <div className="flex-1 overflow-auto">
                                <Menu as={"div"}>
                                    {conversation?.map((data, key) => {
                                        return (
                                            <Menu.Button
                                            className={"px-3 w-full py-1 cursor-pointer"}
                                            key={key}
                                            onClick={() => {
                                                handleClick(data.id)
                                            }}
                                        >
                                            <InfoContact data={data} currentUser={user.id} />
                                        </Menu.Button>
                                        )

                                    })}
                                </Menu>

                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col border basis-2/3">
                            {/* Header */}
                            <div className="flex flex-row items-center justify-between px-3 py-2 bg-slate-300">
                                <div className="flex item-center">
                                    <div>
                                        <div className="p-1 bg-gray-200 rounded-full">
                                            <div className="overflow-hidden bg-gray-200 rounded-full w-9 h-9">
                                                <Image
                                                src={"https://source.unsplash.com/random/40x40?people"}
                                                width={40}
                                                height={40}
                                                alt="Profile Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-slate-900">
                                            {/* Rahmat Hidayat */}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Messgaes */}
                            <div className="flex-1 overflow-auto">
                                <div className="px-3 py-2">

                                    {messages.length === 0 ? (
                                        <div>No Messages</div>
                                    ) : (
                                        messages.map((msg, idx) => {
                                            return (
                                                // Myself
                                                <div className={`flex mb-2 ${msg.senderId === user.id ? 'justify-end' : ''}`}
                                                    key={idx}
                                                >
                                                    <div className={`rounded py-2 px-3 ${msg.senderId === user.id ? 'bg-blue-400' : 'bg-slate-400'}`}>
                                                        <p className="mt-1 text-sm">
                                                            {msg.messages}
                                                        </p>
                                                        <p className="mt-1 text-xs text-right text-grey-dark">
                                                            {moment(msg?.createdAt).format('LT')}
                                                        </p>
                                                    </div>
                                                </div>

                                            )

                                        })
                                    )}


                                </div>
                            </div>

                            {/* Input */}
                            <div className="flex items-center px-4 py-4 bg-slate-200">
                                <div className="flex-1 mx-4">
                                    <form
                                        onSubmit={onSubmitForm}
                                    >
                                        <div className="relative mx-auto">
                                            <input
                                                ref={messagesReff}
                                                type="text"
                                                required
                                                className="w-full px-2 py-2 text-sm text-current rounded focus:outline-none"
                                                placeholder="Type a message"
                                            />
                                            <button type="submit" className=""><FaPaperPlane className="absolute top-2.5 right-2.5"/></button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default conversation;

conversation.getLayout = (page) => (
    <LandingPageLayout title="Encrease - Chatting" children={page} />
);