import React, { Component } from "react";
import SignUp from "../Components/SignUp";
import cred from "../assets/credentials.json"

class LoginPage extends Component {
  handleSubmit = (userName, password) => {
    if (password === this.returnPassword(userName))
      console.log("Login successful")
    else console.log("Invalid ")
  }

  returnPassword = user => {
    let pass = cred.filter(i => user === i.userName);
    return pass[0].password;
  }
  render() {
    return (
      <SignUp onSubmit={this.handleSubmit} />
    )
  }
}
export default LoginPage;