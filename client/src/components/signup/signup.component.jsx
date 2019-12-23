import React from "react";
import "./signup.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { firestore } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state.email);
  };

  render() {
    return (
      <div className="sign-up">
        <h2>Create a new account</h2>
        <span>Please provide your credentials below</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            handleChange={this.handleChange}
            value={this.state.name}
            label="name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="button">
            <Button  type="submit">
              Create User
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
