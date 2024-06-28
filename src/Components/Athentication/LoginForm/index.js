import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: ""
  };

  onChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  renderUserNameField = () => {
    const { userName } = this.state;
    return (
      <>
        <label htmlFor="username" className="input-label">Username</label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          placeholder="Username"
          value={userName}
          onChange={this.onChangeUserName}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label htmlFor="password" className="input-label">Password</label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  onSubmitFailure = (data) => {
    // console.log(data.error_msg);
    this.setState({
      showSubmitError: true,
      errorMsg: data.error_msg
    })
  }

  onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 1 })
    // console.log(this.props);
    const { history } = this.props;
    history.replace("/AthenticationHome");
  }

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    }
    else {
      this.onSubmitFailure(data)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
      return <Redirect to="AthenticationHome" />
    }
    const { showSubmitError, errorMsg } = this.state;
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h2>Login</h2>
          <div className="input-container">{this.renderUserNameField()}</div>
          <br />
          <div className="input-container">{this.renderPasswordField()}</div>
          <br />
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;