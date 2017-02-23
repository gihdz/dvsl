import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginLink,  NotAuthenticated, Authenticated} from 'react-stormpath'
import {Link} from 'react-router'
class App extends Component {
  setSystemMessage(text){
    this.setText(text);
  }
  componentDidUpdate(){
     this.setText('');
  }
  setText(text){
    this.systemMessage.innerHTML = text;
  }
 
  render() {
    // console.log("APP RENDER");
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div ref={div => this.systemMessage = div}></div>
        {/*<Authenticated>
          <Link to="/main">Main</Link> | 
          <Link to="/user/new">NewUser</Link>
        </Authenticated>
       
           <NotAuthenticated>
            <LoginLink>Login</LoginLink> | 
            <Link to="/register">Register</Link>
            
            </NotAuthenticated>            */}
             <Link to="/main">Main</Link> | 
          <Link to="/user/new">NewUser</Link>
          {React.cloneElement(this.props.children, {sm: this.setSystemMessage.bind(this)})}
          {/*{this.props.children}   */}
        
      </div>
    );
  }
}

export default App;
