// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// class Register extends Component {
//    constructor(props){
//             super(props);
//             this.state={emailre:'',passwordre:'',conpass:''}
//             this.handleChEmail = this.handleChEmail.bind(this)
//             this.handleChPass = this.handleChPass.bind(this)
//             this.handleChPassc = this.handleChPassc.bind(this)
//             this.handClick = this.handClick.bind(this)
            
//           } 
//           handleChEmail(even){
//             this.setState({emailre:even.target.value})
//           }
         
//           handleChPass(even){
//            this.setState({passwordre:even.target.value})
//            this.setState({conpass:even.target.value})
//          }
//          handleChPassc(even){
            
//             this.setState({conpass:even.target.value})
//           }
         
//          handClick(){
//             var data ={
//               email:this.state.emailre,
//               password:this.state.passwordre,
//               conpass:this.state.conpass,
              
//             }
//             console.log(data.email+"   "+data.password+"   "+data.conpass)
            
//             if(data.password==data.conpass){    
//                 console.log("ture")
//                 // axios.post("http://localhost:3001/user",data).then((res)=>{
//                 //     console.log(res)
//                 //         })
//                 axios.post("http://localhost:3001/regis",data).then((res)=>{
//                     console.log(res)

//                  })
                 
//             //      axios.post("http://localhost:3001/test",data).then((res)=>{
//             //  console.log(res)
//             //      })
               
//             }
            
//           }
          
//           render() {
        
//         return ( 
//             <div className='App'>
//             <input class="input is-large" type="text" placeholder="Email" onChange={this.handleChEmail}></input>
//            <br></br> <br></br>
//            <input class="input is-large" type="password" placeholder="PassWord"  onChange={this.handleChPass}></input>
//            <br></br> <br></br>
//            <input class="input is-large" type="password" placeholder="Confirm PassWord"   onChange={this.handleChPassc}></input>
//            <br></br> <br></br>

//             <button type="button" class="button is-fullwidth is-primary is-large" onClick={this.handClick}>Register</button><br></br>
//             </div>
//         );
//     }
// }

// export default Register;
import React, { Component } from "react";
import 'bulma/css/bulma.css'
import axios from 'axios'

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {email: '',password:''}
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleChangePass2 = this.handleChangePass2.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }
      handleChangeEmail(event){
        this.setState({email: event.target.value})
      }
    
      handleChangePass(event){
        this.setState({password: event.target.value})
      }

      handleChangePass2(event){
        this.setState({password2: event.target.value})
      }

      handleClick(event){
        var data ={
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        }
        
        //axios install
        //call api post
        if (this.state.email != '' && this.state.password != '' && this.state.password2 != ''){
        axios.post("http://localhost:3001/register", data).then((res) =>{
            alert("สมัครสมาชิกสำเร็จ")
            this.props.history.push(`/`)
        }).catch(err => {
            alert("อีเมลนี้ถูกใช้งานแล้วหรือพาสเวิดไม่ตรงกัน")
            console.log(err);
        })
        }else{
          alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
      }

    render() {
        return (
            <div className="Container ">
            <div className="section" >
              
              <div className='columns is-mobile '>
                <div className='column'></div>
      
                <div className='column'>
                
                <div className="notification ">
                <h1 className="title is-1">Register</h1>
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

                <input 
                  className= "input is-info" 
                  type='password'
                  placeholder="Password Confirm"
                  onChange={this.handleChangePass2}>
                </input>
                <br />
                <br />
      
                <button className= 'button is-success is-medium is-fullwidth' onClick={this.handleClick}>Register</button>
                <br />
                
                </div>
                
                </div>
      
                <div className='column'></div>
                </div>
      
            </div>
            </div>
          );
    }
}

export default Register;