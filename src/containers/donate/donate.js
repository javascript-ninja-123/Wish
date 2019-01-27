import React, {PureComponent} from 'react'
import {WithHeader} from '../../hoc/withHeader'
import {WithPageContainer} from '../../hoc/withPageContainer'
import styled from 'styled-components';
import {compose} from 'redux'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from "react-router";

class Donate extends PureComponent{
    state = {
        number:'',
        name:'',
        expiry:'',
        cvc:'',
        focused:'',
        amount:""
    }
    focusedRef = React.createRef()

    onChange = ({target}) => this.setState({[target.name]:target.value})
    onClick = () => {
        console.log(this.state)
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                   <Cards
                        number={this.state.number}
                        name={this.state.name}
                        expiry={this.state.expiry}
                        cvc={this.state.cvc}
                        focused={this.state.focused}
                    />
                      <Form>
                        <Form.Field>
                        <label>Number</label>
                        <input placeholder='number' name="number" onChange={this.onChange} value={this.state.number}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Name</label>
                        <input placeholder='name' name="name" onChange={this.onChange} value={this.state.name}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Expiry</label>
                        <input placeholder='expiry' name="expiry" onChange={this.onChange} value={this.state.expiry}/>
                        </Form.Field>
                        <Form.Field>
                        <label>CVC</label>
                        <input placeholder='cvc' name="cvc" onChange={this.onChange} value={this.state.cvc} ref={this.focusedRef}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Amount</label>
                        <input placeholder='amount' name="amount" onChange={this.onChange} value={this.state.amount}/>
                        </Form.Field>
                        <Button type='submit' onClick={this.onClick}>Donate</Button>
                    </Form>
            </div>
        )
    }
}

export default compose(
    withRouter,
    WithHeader,
    WithPageContainer
)(Donate);