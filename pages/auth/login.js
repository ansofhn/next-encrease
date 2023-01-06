import Link from "next/link";
import React from "react";
import LoginRegisterLayout from "../../layouts/LoginRegisterLayout";
import macPhoto from "../../public/assets/macPhoto.png";

const Login = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="my-10 text-2xl font-semibold text-center text-background">
          Sign In
        </h1>
      </div>
      <form>
        <div className="py-4">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full p-2 text-sm bg-softWhite focus:outline-none"
          />
        </div>
        <div className="py-4">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 text-sm bg-softWhite focus:outline-none"
          />
        </div>
        <div className="py-2 text-softWhite">
          <input
            type="submit"
            value="Submit"
            className="w-full p-2 font-medium duration-300 cursor-pointer bg-background hover:bg-softWhite/60 hover:text-background"
          />
        </div>
      </form>
      <p className="text-sm text-background">
        Don't have an account?{" "}
        <Link
          className="duration-300 text-softBlue hover:text-background hover:underline hover:decoration-background"
          href={"/auth/register"}
        >
          Sign Up here
        </Link>
      </p>
    </div>
  );
};

export default Login;

Login.getLayout = (page) => (
  <LoginRegisterLayout
    title="Encrease - Login"
    image={macPhoto}
    altImage="macPhoto.jfif"
    children={page}
    bgColor="bg-softGray"
  />
);
