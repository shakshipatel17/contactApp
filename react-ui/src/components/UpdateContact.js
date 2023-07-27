import React,{useState} from 'react';
import { Link,useLocation, useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:9090";



class UpdateContact extends React.Component {
    state ={
            name:"",
            email:"",
            address:"",
        }


    update = (e)=>{
            e.preventDefault();
            if(this.state.name === "" && this.state.email === "" && this.state.address === ""){
                alert("All the fields are mandatory")
                return;
            }
            axios.post(API_URL + "/updateContactById", this.state);
            this.props.navigate('/');
        }

    state = this.props.location.state;


    render(){
        console.log(this.props);
            return(
                <div className="ui main">
                    <h2> Update Contact </h2>
                    <form className="ui form" onSubmit = {this.update}>
                        <div className= "field">
                            <label>Id</label>
                            <input type="text" name ="id" placeholder="Id" value ={this.state.id} onChange={(e) => this.setState({id: e.target.value})}/>
                        </div>
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
                        <button className="ui button blue">Update</button>
                        <Link to="/" className="ui button blue">Contact List</Link>
                    </form>
                </div>

            );
    }
}

export default () => (
  <UpdateContact params={useParams()} location={useLocation()} navigate = {useNavigate()} />
);