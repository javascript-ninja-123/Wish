import React, {Component} from 'react';
import styled from 'styled-components';


const PageContainer = styled.div`
  padding:1rem 3rem;
`


export const WithPageContainer = BaseComponent => {
    class WithPageContainerClass extends Component{
        render(){
            return(
                <PageContainer>
                   <BaseComponent {...this.props}/> 
                </PageContainer>
            )
        }
    }

    return WithPageContainerClass
}

