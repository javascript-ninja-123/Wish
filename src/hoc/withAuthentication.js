import React, {Component} from 'react';
import {Header} from '../components/header/header';
import Firebase from '../utils/firebase'
import {  Redirect } from 'react-router'

export const WithAutentication = BaseComponent => {
 class WithHeaderComponent extends Component{
     componentDidMount(){
        Firebase.auth.onAuthStateChanged(user => {
            if(!user){
                <Redirect to="/login"/>
            }
            else if(user){
                console.log('userhere')
            }
        })
     }
     render(){
        return (
            <BaseComponent {...this.props}/>
        )
     }
 }

 return WithHeaderComponent;
}

export default WithAutentication;