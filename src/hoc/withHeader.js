import React, {Component} from 'react';
import {Header} from '../components/header/header';


export const WithHeader = BaseComponent => {
 class WithHeaderComponent extends Component{
     render(){
        return (
            <div>
                <Header/>
                <BaseComponent {...this.props}/>
            </div>
        )
     }
 }

 return WithHeaderComponent;
}


