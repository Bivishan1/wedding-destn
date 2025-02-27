// 'use client';
// import { LoginC } from "./page";
// import { LoginFormValues, LoginProps } from "@/components/types/loginform.types";
// import React from 'react'

// const page = () => {
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
    
//         // Extract form values
//         const formData = new FormData(e.currentTarget);
//         const values: LoginFormValues = {
//           fname: formData.get('fname') as string,
//           lname: formData.get('lname') as string,
//           password: formData.get('password') as string,
//         };
    
//         onSubmit(values); // Call the onSubmit handler
//       }
//   return (
//     <div>
//         <LoginC/>
//     </div>
//   )
// }

// export default page