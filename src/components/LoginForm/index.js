// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  navigateToHomeRoute = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.navigateToHomeRoute()
    } else if (response.status === 401) {
      this.setState({errorMsg: data.error_msg, showErrorMsg: true})
    } else if (password === '') {
      this.setState({
        errorMsg: 'Enter Valid Password',
        showErrorMsg: true,
      })
    } else if (response.status === 404) {
      this.setState({
        errorMsg: 'Username is not found',
        showErrorMsg: true,
      })
    } else {
      this.setState({
        errorMsg: "Username and Password didn't match",
        showErrorMsg: true,
      })
    }
  }

  render() {
    const {username, password, errorMsg, showErrorMsg} = this.state

    return (
      <div className="login-container">
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="main">
          <div className="logo-container">
            <img
              className="nxt-trendz-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>

          <form onSubmit={this.submitForm} className="form-container">
            <label htmlFor="nameInput">USERNAME</label>
            <input
              type="text"
              value={username}
              id="nameInput"
              placeholder="Username"
              onChange={this.changeUserName}
            />
            <label htmlFor="passwordInput">PASSWORD</label>
            <input
              type="password"
              value={password}
              id="passwordInput"
              placeholder="Password"
              onChange={this.changePassword}
            />
            <button className="submit-button" type="submit">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">* {errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
