import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import signUp from "../../public/assets/signUp.png"

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen md:p-4">
        <div className="flex items-center justify-center w-full p-4 md:p-0 md:pl-4 overflow-hidden md:rounded-md shadow-2xl md:max-w-4xl bg-background font-poppins h-screen md:h-auto">
            <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row-reverse">
                <div className="hidden md:block">
                    <Image
                    alt="signUp.jfif"
                    src={signUp}
                    className="w-full"
                    />
                </div>
                <div className="w-full">
                    <div>
                        <h1 className="my-6 text-2xl font-light text-center text-softWhite">Sign Up</h1>
                    </div>
                    <form>
                        <div className="py-4">
                            <input type="text" placeholder="Username" required className="w-full p-2" />
                        </div>
                        <div className="py-4">
                            <input type="number" placeholder="Phone Number" required className="w-full p-2"/>
                        </div>
                        <div className="py-4">
                            <input type="password" placeholder="Password" required className="w-full p-2"/>
                        </div>
                        <div className="py-2 text-softWhite">
                            <input type="submit" value="Sign Up" className="w-full p-2 duration-300 cursor-pointer text-softWhite bg-softBlue hover:bg-softGray hover:text-background" />
                        </div>
                    </form>
                    <p className="text-sm text-softWhite">Already have an account? <Link className="duration-300 text-softBlue hover:text-softWhite" href={"/auth/login"}>Sign In here</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register