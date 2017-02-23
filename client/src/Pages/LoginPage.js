import { LoginForm } from 'react-stormpath';
import React, {Component} from 'react';

class LoginPage extends Component{
    render(){
        return <LoginForm redirectTo='/main' />

    }
}

export default LoginPage;