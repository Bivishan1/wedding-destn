export interface SignUpFormValues {
    fname: string; // First Name
    lname: string; // Last Name
    email: string; // Email Address
    password: string; // Password
  }
  
  export interface SignUpProps {
    onSubmit: (values: SignUpFormValues) => void; // Function to handle form submission
  }
  