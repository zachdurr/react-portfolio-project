import React, { Component } from "react"
import { connect } from "react-redux";
import { addUser } from "../actions/userAction";

class Login extends Component {
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

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: ''
    })
  }

    render() {
    return (
      <div>
        {!this.props.logged_in ? 
        (<form onSubmit={this.handleOnSubmit}>
        
          <div>
            <input type="text" name="username" placeholder="Username" onChange={this.handleOnChange}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>)
     : <div>Welcome, {this.props.username}</div>}
      </div>
    )}
  }

  const mapStateToProps = (state) => {
    return {
      logged_in: state.logged_in,
      username: state.username
    }
  }

  export default connect(mapStateToProps, {addUser})(Login)