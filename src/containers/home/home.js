import React, {Component} from 'react';
import {WithHeader} from '../../hoc/withHeader'

class Home extends Component{
    render(){
        return(
            <div>
                This is home
            </div>
        )
    }
}

export default WithHeader(Home);