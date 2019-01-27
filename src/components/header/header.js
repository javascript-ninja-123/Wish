import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width:100vw;
    padding:2rem 1rem;
    background-color:#004EB6;
    margin-bottom:1rem;
    color:white;
    display: grid;
    grid-template-columns: 200px 1fr;
    justify-items: center;
    align-items: center;
    ul{
        justify-self:end;
        list-style: none;
        margin:0;
        padding:0;
        display:flex;
        justify-content:space-around;
        align-items:center;
        li{
            padding: 0 1rem;
            a{
                color:white;
                text-transform:uppercase;
            }
        }
    }

    @media (max-width: 650px) {
        display:flex;
        flex-direction:column;
        & > div{
            margin-bottom:2rem;
        }
        ul{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            align-items: center;
            text-align: center;
            li{
                a{
                    font-size:80%;
                }
            }
        }
      }
`,
activeStyle = {
    fontWeight: "bold",
    color: "#FF5B60"
}

export const Header = () => {
   return(
    <HeaderContainer>
        <div>
            logo will be placed here
        </div>
        <ul> 
          <li><NavLink to='/adopt' activeStyle={activeStyle}>adopt a wish</NavLink></li>  
          <li><NavLink to='/login' activeStyle={activeStyle}>login</NavLink></li>  
          <li><NavLink to='/donate' activeStyle={activeStyle}>Donate</NavLink></li>  
        </ul>
    </HeaderContainer>
   )
}

