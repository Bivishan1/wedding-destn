export interface LoginFormValues {
    fname: string; // First Name
    lname: string; // Last Name
    password: string; // Password
  }
  
  export interface LoginProps {
    onSubmit: (values: LoginFormValues) => void; // Callback when the form is submitted
    signUpHandler?: () => void; // Optional handler for the "Sign Up" button
  }