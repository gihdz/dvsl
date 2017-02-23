import React from 'react'
import Service from '../Services/Service'
import {browserHistory} from 'react-router'

class NewUserForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        let firstName = this.firstNameInput.value;
        let lastName = this.lastNameInput.value;
        Service.createUser(firstName, lastName).then(rs => {
            if(rs.err) return;
            browserHistory.push('/main');
            this.props.sm("User created! " + JSON.stringify(rs.data));
        }) ;
    }
    componentDidMount(){
        this.firstNameInput.focus();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name='first_name' type='text'ref={input => this.firstNameInput = input} />
                    <input name='last_name' type='text' ref={input => this.lastNameInput = input} />
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default NewUserForm;