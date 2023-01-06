import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import macPhoto from "../../public/assets/macPhoto.png"

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen md:p-4">
        <div className="flex items-center justify-center w-full p-4 md:p-0 md:pl-4 overflow-hidden md:rounded-md shadow-2xl md:max-w-4xl bg-softGray font-poppins h-screen md:h-auto">
            <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row-reverse">
                <div className="hidden md:block">
                    <Image
                    alt="macPhoto.jfif"
                    src={macPhoto}
                    className="w-full"
                    />
                </div>
                <div className="w-full">
                    <div>
                        <h1 className="my-10 text-2xl font-light text-center text-background">Sign In</h1>
                    </div>
                    <form>
                        <div className="py-4">
                            <input type="text" placeholder="Username" required className="w-full p-2" />
                        </div>
                        <div className="py-4">
                            <input type="password" placeholder="Password" required className="w-full p-2"/>
                        </div>
                        <div className="py-2 text-softWhite">
                            <input type="submit" value="Submit" className="w-full p-2 duration-300 cursor-pointer bg-background hover:bg-softWhite hover:text-black" />
                        </div>
                    </form>
                    <p className="text-sm text-background">Don't have an account? <Link className="duration-300 text-softBlue hover:text-softWhite" href={"/auth/register"}>Sign Up here</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login