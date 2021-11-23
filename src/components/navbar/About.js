import React, {Component} from "react"

class About extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        submitted: false
      }
    }
  
    handleOnChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    handleOnSubmit = event => {
      event.preventDefault();
      this.setState({
        name: '',
        email: '',
        message: '',
        submitted: true
      })
    }


    render(){
    return (
      <div className="about">
        {!this.state.submitted ? <form onSubmit={this.handleOnSubmit}> 
          <p>
            Here at Fwitter we strive to make your thoughts present on the interweb!
          </p>
          <h3>Contact Us!</h3>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <div className="email">
          <input
            type="text"
            placeholder="Your Email"
            value={this.state.email}
            name="email"
            onChange={this.handleOnChange}
          />
          </div>
          <div className="comment">
          <textarea
            type="textarea"
            placeholder="What can we help you with?"
            value={this.state.message}
            name="message"
            onChange={this.handleOnChange}
          />
          </div>
          <div>
          <input type="submit" />
          </div>
        </form> : <div>Submitted!</div>}
      </div>
    )
    }
  }
export default About

// Create contact me functionality