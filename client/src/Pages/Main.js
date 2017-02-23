import React, {Component} from 'react'
import { LogoutLink, Authenticated} from 'react-stormpath'
import Service from '../Services/Service'
import {browserHistory} from 'react-router'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        }
    }
    handleDelete(id){
        Service.deleteUser(id).then(u => {
            this.getUsers();
            this.props.sm(`User deleted: ${JSON.stringify(u)}`);
        });
    }
    render(){
        let users = this.state.users.map(user => <li key={`us-${user.id}`}>{`${user.firstName} ${user.lastName}`} | <button onClick={this.handleDelete.bind(this,user.id)}>delete</button> </li>);
        return(
            <div>
                {/*<Authenticated>*/}
          <ul>{users}</ul>
              
  {/*<LogoutLink>Logout</LogoutLink>*/}
  {/*</Authenticated>*/}
</div>

        )
    }
    componentDidMount(){
        this.getUsers();
    }
    componentWillReceiveProps(p){
        this.getUsers();
    }
    getUsers(){
        Service.getUsers().then(rh => {
            if(rh.err){
                this.props.sm(rh.err);
                return;
            }
            this.setState({users: rh.data});

        });

    }
}

export default Main;