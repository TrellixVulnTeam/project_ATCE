import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
position: fixed;
z-index:2;
background-color: #fff;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 54px;
border-bottom:1px solid #dbdbdb;
& input{
    background: #fafafa;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 3px 10px 3px 26px;
    color: #262626;
}
`
const HeaderLogo = styled.div`
font-size:20px;
font-weight:700; 
`
const HeaderWrapper = styled.div`

display: flex;  
/* padding-left: 24px; */
`
const HeaderItem = styled.div`
cursor: pointer;
transition: all .3s ease-in-out;
&:hover {
    opacity: .7;
    transition: all .3s ease-in-out;
}
margin-left: 24px;
&:last-child{
    background-color: #000;
    border-radius: 50%;
    width:22px;
    height:22px;
}

`


const Header = () => {


    return (
        <HeaderStyle>
            <HeaderLogo>
                Instagram
            </HeaderLogo>
            <input type="text placeholder='Search" />
            <HeaderWrapper>
                <HeaderItem>
                    <span className="material-icons">home</span>
                </HeaderItem>
                <HeaderItem>
                    <span className="material-icons">send</span>
                </HeaderItem>
                <HeaderItem> <span className="material-icons">explore</span></HeaderItem>
                <HeaderItem>
                    <span className="material-icons">favorite</span>
                </HeaderItem>
                <HeaderItem></HeaderItem>
            </HeaderWrapper>
        </HeaderStyle>
    )
}

export default Header
