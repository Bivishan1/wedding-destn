"use client";
import React from "react";
import { SignUpFormValues } from "@/components/types/signup.types";
import { GoogleIcon, WhatsAppIcon } from "../../../public/icons";
import { Button } from "../../src/MTailwind";
import Link from "next/link";

export default function SignUp() {
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
    console.log("submitted", values);
  };

  return (
    <div>
      <div className="bg-red-50 min-h-screen">
        <div className="wrapper1 h-screen w-full bg-figma bg-custom bg-no-repeat flex items-center justify-center py-8">
          <div
            className="wrapper2 w-full sm:w-[70%] max-w-lg bg-figma1 bg-contain bg-center bg-no-repeat 
            pb-16 sm:pb-28 md:px-20 sm:px-8 flex flex-col items-center justify-center rounded-lg"
          >
            <h1 className="text-center mb-6 text-lg font-bold mt-16 h-3 sm:h-12">
              Sign Up
            </h1>
            <div className="wrapper-content max-w-[73%] sm:w-full sm:max-w-sm flex flex-col p-2">
              <form
                onSubmit={handleSignUp}
                className="w-full flex flex-col gap-2 sm:gap-4 font-sans flex-grow"
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="fname"
                      className="block mb-1 text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      required
                      className="w-full p-0 sm:p-1 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lname"
                      className="block mb-1 text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      required
                      className="w-full p-0 sm:p-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-0 sm:p-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="w-full p-0 sm:p-1 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 mx-auto w-1/2 bg-red-700 font-semibold text-white rounded hover:bg-red-600"
                >
                  Submit
                </button>
              </form>
              <p className="w-full flex sm:items-center sm:justify-center mr-3 my-3 text-[13px] sm:text-[15px]">
                Already have an account?
                <Link href="/login" className="ml-3">
                  <Button
                    className=" bg-red-900 font-light text-xs p-1 rounded-sm sm:rounded-md sm:text-sm sm:p-2"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Login
                  </Button>
                </Link>
              </p>
              <button
                type="submit"
                className="w-[70%] mt-1 lg:w-full sm:w-[76%] mx-auto sm:mx-auto text-[10px] sm:text-sm py-1 bg-red-700 font-normal sm:font-semibold text-white rounded hover:bg-red-500"
              >
                <GoogleIcon className="mr-2 sm:mr-4 text-white" />
                Continue with Google
              </button>
              <button
                type="submit"
                className="w-[70%] mt-1 lg:w-full sm:w-[76%] mx-auto sm:mx-auto text-[10px] sm:text-sm py-1 bg-red-700 font-normal sm:font-semibold text-white rounded hover:bg-red-500"
              >
                <WhatsAppIcon className="mr-2 sm:mr-4 text-white" />
                Continue with Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
