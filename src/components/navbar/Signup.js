import React, { Component } from "react"
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

    render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" onChange={this.handleOnChange}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    )}
  }

  export default Signup