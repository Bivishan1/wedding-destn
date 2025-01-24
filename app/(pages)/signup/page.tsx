"use client";
import React from "react";
import { SignUpFormValues, SignUpProps } from "@/components/types/signup.types";

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract form values
    const formData = new FormData(e.currentTarget);
    const values: SignUpFormValues = {
      fname: formData.get("fname") as string,
      lname: formData.get("lname") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Pass the values to the onSubmit handler
    onSubmit(values);
  };

  return (
    <div>
      <div className="bg-red-50">
      <div className="wrapper1 min-h-screen w-full bg-figma bg-custom bg-no-repeat flex items-center justify-center z-0">
  <div className="wrapper2 min-h-screen w-full md:w-1/3 max-w-lg bg-figma1 bg-custom-half bg-center bg-no-repeat p-8 flex flex-col items-center justify-center z-10">
    <div className="wrapper-content w-full max-w-sm flex flex-col">
      <h1 className="text-center mb-6 text-lg font-bold">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="w-full flex flex-col gap-4 font-sans flex-grow"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="fname" className="block mb-1 text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lname" className="block mb-1 text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="password" className="block mb-1 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-3 bg-green-700 font-semibold text-white rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default SignUp;
