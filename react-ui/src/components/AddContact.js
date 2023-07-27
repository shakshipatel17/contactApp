import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:9090";

class AddContact extends React.Component {

    state ={
        name:"",
        email:"",
        address:"",
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === "" && this.state.address === ""){
            alert("All the fields are mandatory")
            return;
        }
        axios.post(API_URL + "/addContact", this.state);
        this.setState({name:"",email:"",address:""})
        this.props.navigate("/")
    }
    render(){
        return(
            <div className="ui main">
                <h2> Add Contact </h2>
                <form className="ui form" onSubmit = {this.add}>
                    <div className= "field">
                        <label>Name</label>
                        <input type="text" name ="name" placeholder="Name" value ={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className= "field">
                        <label>Email</label>
                        <input type="text" name ="email" placeholder="Email" value ={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className= "field">
                        <label>Address</label>
                        <input type="text" name ="address" placeholder="Please fill full address" value ={this.state.address} onChange={(e) => this.setState({address: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                    <Link to="/" className="ui button blue">Contact List</Link>
                </form>
            </div>

        );
    }
}
export default  () => (
                 <AddContact navigate = {useNavigate()} />
               );