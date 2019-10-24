import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
    this.onChangeLog = this.onChangeLog.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  onChangeLog(event) { // вносимые изменения
    this.setState({login: event.target.value});
  }

  onChangePass(event) {
    this.setState({password: event.target.value});
  }
  
  handleSubmit(event) { // отправка данных на сервер и получение токенов
    event.preventDefault();
    const newUser = { 
      login: this.state.login, 
      password: this.state.password
    };
    this.props.submit(newUser);
  }

  toLogin(event) {
    event.preventDefault();
    this.props.history.push('/login');
  }
  
  render() {
    return (
      <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Enter e-mail or name
          </Form.Label>
          <Form.Control 
            onChange={this.onChangeLog} 
            name="login" 
            type="text"
            placeholder="Login"
            autoComplete="off"
          /> 
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            Create a password
          </Form.Label>
          <Form.Control 
              onChange={this.onChangePass} 
              name="password" 
              type="password"
              placeholder="Password"
            />
          </Form.Group>     
       
        <Button onClick={this.handleSubmit}>
          Submit
        </Button>

        <Button 
          onClick={this.toLogin}
          variant="secondary" size="sm">
          If you are already registered,
          click here.
        </Button>
        
      </Form>
    );
  }
}

export default RegForm;