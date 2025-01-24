'use client';
import { LoginFormValues, LoginProps } from "@/components/types/loginform.types";
import { Button } from "../../src/MTailwind";
import { useRouter } from 'next/navigation';

const Login: React.FC<LoginProps> = ({ onSubmit, signUpHandler }) => {

  const router = useRouter();

 signUpHandler = () => {
    router.push('/signup'); // Navigate to the SignUp page
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract form values
    const formData = new FormData(e.currentTarget);
    const values: LoginFormValues = {
      fname: formData.get('fname') as string,
      lname: formData.get('lname') as string,
      password: formData.get('password') as string,
    };

    onSubmit(values); // Call the onSubmit handler
  }

  return (
    <div className="bg-red-50">
      <div className="wrapper1 min-h-screen w-full bg-figma bg-custom bg-no-repeat flex items-center justify-center z-0">
        <div className="wrapper2 min-h-screen w-full md:w-1/3 bg-figma1 bg-custom-half bg-center bg-no-repeat p-8 flex items-center justify-center z-10">
          <div className="wrapper-content">
            <h1 className="text-center mb-8">Login</h1>
            <form action='' onSubmit={handleSubmit} className="w-full md:flex flex-col gap-4 font-sans">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="fname" className="">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    required
                    className="w-full p-1 border border-gray-300 rounded mt-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    required
                    className="w-full p-1 border border-gray-300 rounded mt-2"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full p-1 border border-gray-300 rounded mt-2"
                />
              </div>

              {/* Centered Login Button */}
              <button
                type="submit"
                className="mt-4 p-3 bg-red-700 font-semibold text-2xl text-white rounded text-center hover:bg-red-600 "
              >
                Login
              </button>
            </form>
            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Don&apos;t have an account?
              {/* <a href="signup.html" style={{ color: 'blue', textDecoration: 'none' }}> Sign Up</a> */}
              <Button className="ml-3 bg-red-900" onClick={signUpHandler}>Sign UP</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
