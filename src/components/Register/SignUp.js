import React, { Component } from 'react';
// import{ButtonContainer} from './Button'

const emailRegex =RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid =({formErrors, ...rest})=> {
    let valid =true;

    //validate form erros being empty
    Object.values(formErrors).forEach(val=>{
        val.length >0 && (valid= false)
    });

    //validate the form was filled out
    Object.values(rest).forEach(val =>{
    val === null && (valid=false);
    });

    return valid;
}
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            formErrors:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            }
        };
    }

    handleSubmit = e =>{
        e.preventDefault();

        if(formValid(this.state)) {
            console.log(`
            --Submitting--
            First Name:${this.state.firstName}
            Last Name:${this.state.lastName}
            Email:${this.state.email}
            Password:${this.state.password}
            
            `)
        }
        else{
            console.error("Form Invalid")
        }
    }

    handleChange =e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state;

        switch(name){
            case "firstName":
                formErrors.firstName =
                value.length <3
                ? "minmum 3 characters required"
                : ""
                break;
            case "lastName":
                formErrors.lastName =
                value.length <3 &&
                value.length >0 
                ? "minmum 3 characters required"
                : ""
                break;

            case "email":
                formErrors.email =
                emailRegex.test(value) &&
                value.length >0 
                ? ""
                : "invalid email address"
                break;

            case "password":
                formErrors.password =
                value.length <6 &&
                value.length >0 
                ? "minmum 6 characters required"
                : ""
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]:value}, () =>console.log(this.state)
        )
    }
    render() {
        const {formErrors} =this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        className={formErrors.firstName.length >0 ? "error" : null}
                         placeholder="First Name" 
                         noValidate
                         onChange={this.handleChange} 
                         />
                         {formErrors.firstName.length > 0 && (
                             <span className="errorMessage">{formErrors.firstName}</span>
                         )}
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                        type="text" 
                        className={formErrors.lastName.length >0 ? "error" : null}
                         placeholder="Last Name" 
                         noValidate
                         onChange={this.handleChange} 
                         />
                         {formErrors.lastName.length > 0 && (
                             <span className="errorMessage">{formErrors.lastName}</span>
                         )}
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" 
                        className={formErrors.email.length >0 ? "error" : null}
                         placeholder="Email" 
                         noValidate
                         onChange={this.handleChange} 
                         />
                         {formErrors.email.length > 0 && (
                             <span className="errorMessage">{formErrors.email}</span>
                         )}
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="text" 
                        className={formErrors.firstName.length >0 ? "error" : null}
                         placeholder="Password" 
                         noValidate
                         onChange={this.handleChange} 
                         />
                         {formErrors.password.length > 0 && (
                             <span className="errorMessage">{formErrors.password}</span>
                         )}
                    </div>
                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
