import React, { Component } from 'react'

export default class  extends Component {
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
    render() {
        const {formErrors} =this.state;
        return (
            <div className="wrapper">
               <div className="form-wrapper">
               <h1>Sign In</h1>
                   <form>
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
                   className={formErrors.password.length >0 ? "error" : null}
                    placeholder="Password" 
                    noValidate
                    onChange={this.handleChange} 
                    />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
               </div>
               <div className="createAccount">
                   <button type="submit">Login</button>
                   <small>Don't Have an Account yet?</small>
               </div>
           </form>
               </div>
            </div>
        )
    }
}
