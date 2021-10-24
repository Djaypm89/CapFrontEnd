import React, { Component, Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import App from '../App';
// import { BrowserRouter } from 'react-router-dom';
// import {Route, BrowserRouter} from 'react-router-dom';



class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
        // this.props.login(data.token);
        // return <Redirect to="/app" />;
        // window.location = '/App/';
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    fetch('http://127.0.0.1:8000/auth/username/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);

        // < Redirect to='/login/' />
        // window.location = '/login/';
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div>
        <h3>Login</h3>

        <label>
          Username:
          <input type="text" name="username"
           value={this.state.credentials.username}
           onChange={this.inputChanged}/>
        </label>
        <br/>
        <label>
          Password :
          <input type="text" name="password"
           value={this.state.credentials.password}
           onChange={this.inputChanged} />
        </label>
        <br/>
        
        <button onClick={this.login}>Login</button>
            {/* <Router>
                <Switch>
                  <Route exact path="/app" component={App} />
                </Switch>
            </Router>
                   */}
        <button onClick={this.register}>Register</button>
        
      </div>
    );
  }
}

export default Login;