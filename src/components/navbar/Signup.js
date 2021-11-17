import React from "react"
const SignUp = () => {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="submit" value="SignUp"/>
          </div>
        </form>
      </div>
    )
  }

  export default SignUp