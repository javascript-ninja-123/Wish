import React, {Component} from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledSegment = styled(Segment)`
    height:100vh !important;
`

export const WithLocation = BaseComponent => {
 class WithHeaderComponent extends Component{
     state = {
        latitude:"",
        longitude:"",
        error:false
     }
     success = (position) => {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        this.setState({latitude,longitude})
     }
     error = () =>{
         this.setState({error:true})
     }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
     render(){
        if(this.state.latitude === '' && this.state.longitude === ''){
            return (
                <StyledSegment>
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
              </StyledSegment>
            )
        }
        return (
            <BaseComponent {...this.props} lat={this.state.latitude} long={this.state.longitude}/>
        )
     }
 }

 return WithHeaderComponent;
}


