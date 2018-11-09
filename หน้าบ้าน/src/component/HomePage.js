import React, { Component } from 'react';
import axios from 'axios'
import 'bulma/css/bulma.css'
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {email: '',password:''}
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.responseFacebook = this.responseFacebook.bind(this)
        this.handleClickRegis = this.handleClickRegis.bind(this)
       this.responseFacebook = this.responseFacebook.bind(this)
    }
    responseFacebook(response){
        console.log(response)
        this.setState({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
    }

      handleClickRegis(event){
        this.props.history.push('/register')
      }
    
      handleChangeEmail(event){
        this.setState({email: event.target.value})
      }
    
      handleChangePass(event){
        this.setState({password: event.target.value})
      }
    
      responseFacebook(response){
        console.log(response)
    
        var data1= {
            email: response.email,
            id: response.id
        }
        console.log(data1.id)
        
        axios.post("http://localhost:3001/Loginf",data1).then((res) =>{
            console.log(res.data.message)
            var email = res.data.message
            this.props.history.push(`/home/`,email)
        }).catch(err => {
          alert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
          console.log(err);
      })
    
    }
      
      handleClick(event){
        var data ={
          email: this.state.email,
          password: this.state.password
        }
        //axios install
        //call api post
        if (this.state.email != '' && this.state.password != ''){
          axios.post("http://localhost:3001/login", data).then((res) =>{
              console.log(res.data.message)
              var email = res.data.message
              this.props.history.push(`/home/${res.data.message}`,email)
          }).catch(err => {
            alert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
            console.log(err);
          })
        }else{
            alert("กรุณากรอกข้อมูล")
        }
      }
    
    render(){
        return (
            <div className="Container ">
            <div className="section" >
              
              <div className='columns is-mobile '>
                <div className='column'></div>
      
                <div className='column'>
                
                <div className="notification ">
                <h1 className="title is-1">Login</h1>
                <div className="notification ">
                </div>
                <input
                  className= "input is-info" 
                  type='text'
                  placeholder="E-mail"
                  onChange={this.handleChangeEmail}>
                </input>
                <br />
                <br />
                
                <input 
                  className= "input is-info" 
                  type='password'
                  placeholder="Password"
                  onChange={this.handleChangePass}>
                </input>
                <br />
                <br />

      
                <button type="button" class="button is-fullwidth is-primary is-large" onClick={this.handleClick}>Login</button>
               
                
                <br />
                <FacebookLogin 
                          appId='1566900763410267'
                          fields = "email,id"
                          callback={this.responseFacebook}
                          render={(renderProps) => (
                              <button className="button is-fullwidth is-info is-large metro" onClick={renderProps.onClick}>Facebook</button>
                          )}
                      />
                      <br />
                <button type="button" class="button is-fullwidth is-warning is-large metro" onClick={this.handleClickRegis}>Register</button>
                
                </div>
                
                </div>
      
                <div className='column'></div>
                </div>
      
            </div>
            </div>
            );
    }
}
export default HomePage;
