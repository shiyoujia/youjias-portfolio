import React from 'react';
import '../styles/Register.css';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onSubmitSignIn = () => {    
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.history.push(`/react`);
        }
      })
  }

  render() {
    return (
        <main className='submit-page'>
          <div className='submit-form'>
            <fieldset className="sign-up">
              <legend className='title-register'>Register</legend>
              <div className='name-field'>
                <label htmlFor="name">Name</label>
                <input 
                  className='name-input'
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
                </div>
                <div className='email-field'>
                  <label htmlFor="email-address">Email</label>
                  <input
                    className='email-input'
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
              <div className='password-field'>
                <label htmlFor="password">Password</label>
                <input
                  className='password-input'
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                className='submit-btn-register'
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
    );
  }
}

export default Register;