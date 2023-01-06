import Link from "next/link";
import React from "react";
import LoginRegisterLayout from "../../layouts/LoginRegisterLayout";
import signUp from "../../public/assets/signUp.png";

const Register = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="my-6 text-2xl font-semibold text-center text-softWhite">
          Sign Up
        </h1>
      </div>
      <form>
        <div className="py-4">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full p-2 text-sm"
          />
        </div>
        <div className="py-4">
          <input
            type="number"
            placeholder="Phone Number"
            required
            className="w-full p-2 text-sm"
          />
        </div>
        <div className="py-4">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 text-sm"
          />
        </div>
        <div className="py-2 text-softWhite">
          <input
            type="submit"
            value="Sign Up"
            className="w-full p-2 font-medium duration-300 cursor-pointer text-softWhite bg-softBlue hover:bg-softGray hover:text-background"
          />
        </div>
      </form>
      <p className="text-sm text-softWhite">
        Already have an account?{" "}
        <Link
          className="duration-300 text-softBlue hover:text-softWhite"
          href={"/auth/login"}
        >
          Sign In here
        </Link>
      </p>
    </div>
  );
};

export default Register;

Register.getLayout = (page) => (
  <LoginRegisterLayout
    title="Encrease - Register"
    image={signUp}
    altImage="signUp.jfif"
    children={page}
    bgColor="bg-background"
  />
);
