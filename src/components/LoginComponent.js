import React from 'react';
import {connect} from 'react-redux';
import {submitLogin} from '../actions';
import {Form, Button} from 'react-bootstrap';

class LoginComponent extends  React.Component{


    submit = (e) => {
        e.preventDefault();
        console.log("submit callback in login Componenet")
       let username = this.state.username
       let  pwd = this.state.password
        this.props.submitLogin(
            {
                username,
                pwd
            }
        );
    }

    constructor(props){
        super(props);
        this.state = {username: "", password: ""}
    }

    render(){

        return (
            <Form>
                <Form.Group>
                    <Form.Label>Email </Form.Label>
                <Form.Control onChange={e => this.setState({"username": e.target.value})}
                    type="email"
                    placeholder="Username"
                />
                </Form.Group>
                <Form.Group controlId="formBasicPwd">
                <Form.Control onChange={ e => this.setState({"password": e.target.value})}
                    type="password"
                    placeholder="Password"
                />
                </Form.Group>

                    <button onClick={this.submit}>Submit</button>

            </Form>

        );
    }
}

const mapDispatchToProps  = {

    submitLogin : submitLogin

}

export default connect(null,mapDispatchToProps)(LoginComponent);

