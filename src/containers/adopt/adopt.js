import React, {Component} from 'react'
import {WithHeader} from '../../hoc/withHeader'
import {WithPageContainer} from '../../hoc/withPageContainer'
import styled from 'styled-components';
import {compose} from 'redux'
import _ from 'lodash'
import faker from 'faker'
import 'react-credit-cards/es/styles-compiled.css';
import { withRouter } from "react-router";
import WithAutentication from '../../hoc/withAuthentication'
import { GoogleMap, Marker,withScriptjs,withGoogleMap } from "react-google-maps"
import {WithLocation} from '../../hoc/withLocation'
import { Search, Grid, Header, Segment,Button } from 'semantic-ui-react'


const SearchContainer = styled.div`
    margin-bottom:3rem;
    width:100%;
    .ui.fluid.search, .ui.icon.input{
        width:100% !important;
    }
`

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
  }))
  

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat:props.lat, lng: props.long  }}
  >
    {props.isMarkerShown && <Marker position={{ lat:props.lat, lng: props.long }} />}
  </GoogleMap>
))

class Adopt extends Component{
    componentDidMount(){
        this.resetComponent()
    }

    state = {
        result:[],
        isLoading:true,
        value:''
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  
    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })
  
      setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent()
  
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = result => re.test(result.title)
  
        this.setState({
          isLoading: false,
          results: _.filter(source, isMatch),
        })
      }, 300)
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.history.push('/profile')
    }
    render(){
        const {  value, results,isLoading } = this.state
        return(
            <div>
             <SearchContainer>
             <Search
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
                fluid
                    />       
            <Button fluid onClick={this.onClick}>Search</Button>   
            </SearchContainer>   
                <MyMapComponent
                long={this.props.long}
                lat={this.props.lat}
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}


export default compose(
    WithLocation,
    WithAutentication,
    withRouter,
    WithHeader,
    WithPageContainer
)(Adopt);