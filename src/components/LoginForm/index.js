// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component{
    state={username:'', password:'', errorMsg:''}

    changeUserName=event=>{
      this.setState({username:event.target.value})
    }

    changePassword=event=>{
      this.setState({password:event.target.value})
    }

    navigateToHomeRoute=()=>{
      const {history} = this.props
      history.push("/")
    }

    submitForm=async event=>{
      event.preventDefault()
      const {username,password}=this.state
      const userDetails={username,password}
      const url="https://apis.ccbp.in/login"
      const options={
        method:"POST",
        body:JSON.stringify(userDetails)
      }

      const response= await fetch(url,options)
      if (response.ok===true){
        this.navigateToHomeRoute()
      }
      else if (response.status === 401) {
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

    render(){
      const {username,password,errorMsg}=this.state

        return (
        <div className="login-container">
          <img className="login-image" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login"/>
          <div className="form-container">
            <img className="website-logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
            <form onSubmit={this.submitForm}>
              <label htmlFor="nameInput">USERNAME</label>
              <input type="text" value={username} id="nameInput" placeholder="Username" onChange={this.changeUserName}/>
              <label htmlFor="passwordInput">PASSWORD</label>
              <input type="text" value={password} id="passwordInput" placeholder="Password" onChange={this.changePassword}/>
              <button className="submit-button" type="submit">Login</button>
              <p className="error-msg">* {errorMsg}</p>
            </form>
          </div>
        </div>
        )
    }
}

export default LoginForm
