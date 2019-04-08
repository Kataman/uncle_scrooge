import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    this.onChangeLog = this.onChangeLog.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeLog(event) { // вносимые изменения
    this.setState({login: event.target.value});
  }

  onChangePass(event) {
    this.setState({password: event.target.value});
  }
  
  handleSubmit(event) { // отправка данных на сервер и получение токенов
    event.preventDefault();
    const user = { 
      login: this.state.login, 
      password: this.state.password
    };
    this.props.submit(user);
    this.props.history.push('/account');
  }
  
  render() {
    return (
      <Form>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your login</Form.Label>
            <Form.Control 
              onChange={this.onChangeLog} 
              name="login" 
              type="text"
              placeholder="Login"
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter your password</Form.Label>
            <Form.Control 
              onChange={this.onChangePass} 
              name="password" 
              type="password"
              placeholder="Password"
            />
          </Form.Group>     
       
        <Button
          onClick={this.handleSubmit}>
          Submit
        </Button>
        
      </Form>
    );
  }
}

export default withRouter(LoginForm);