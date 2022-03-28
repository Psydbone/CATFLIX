import React from 'react';
import '../style.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  accedi = () => {
    const emailEsatta = 'pippo@gmail.com';
    const passwordEsatta = '123';
    if (
      this.state.email === emailEsatta &&
      this.state.password === passwordEsatta
    ) {
      console.log('loggato');
      localStorage.setItem('isLogged',true);
      this.props.loginCallback();
      this.setState({ email: '', password: '' });
    } else {
      console.log('non loggato');
    }
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <>
        <div className="widget">
          <h1>Accedi</h1>
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.updateEmail}
          />
          <br />
          <br />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.updatePassword}
          />
          <br />
          <br />
          <button className="button" onClick={this.accedi}>
            Accedi
          </button>
          <br />
          <p className="loginNotes">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
      </>
    );
  }
}
