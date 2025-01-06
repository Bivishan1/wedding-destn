import React from 'react'

const Login = () => {
  return (
    <div className="wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <form action="">
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required/>
          <button type="submit">Login</button>
        </form>
        <p style= {{textAlign: 'center', marginTop: '10px'}}>
                Don&apost have an account?
                <a href="signup.html" style={{ color: 'blue', textDecoration: 'none' }}> Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Login