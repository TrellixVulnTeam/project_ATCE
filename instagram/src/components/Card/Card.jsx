import React from 'react'
import styled from 'styled-components'



const CardWrapper = styled.div`
width: 616px;
height: 842px;
border: 1px solid #dbdbdb;
margin-top: 120px;
`

const CardHeader = styled.div`
display: flex;
box-sizing: border-box;
width: 100%;
height: 60px;
border-bottom: 1px solid #dbdbdb;
padding: 10px 20px;
`

const UserDate = styled.div`
margin-right: auto;
align-items: center;
`
const CardUserLogo = styled.div`
height: 32px;
width: 32px;
border-radius: 50%;
background-color: lightgrey;
margin-right: 20px;
`
const UserName = styled.div`
font-weight: 600;
font-size: 14px;
`
const Position = styled.div`
font-size: 12px;
`
const Burger = styled.div`
font-weight: 900;
font-size: 40px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
&> div{
    width: 5px;
    height: 5px;
    background-color:#000;
    border-radius: 50%;
    margin-left: 4px;
}
`
const CardContent = styled.div`
width:100%;
height: 614px;
background-color: lightblue;
`

const CardCom = styled.div`
width:100%;
height: 40px;
padding: 10px;
& > span{
    cursor: pointer;
    &:first-child{
        margin-right: 20px;
    }
}
`
const CardFooter = styled.div`
width:100%;
height:56px;
border-top: 1px solid #dbdbdb;
display: flex;
justify-content: space-around;
align-items:center;
& > input{
    border:none;     
    }
`
const CardShare = styled.div`
color: #b3dffc;
font-size: 12px;
cursor:pointer
`


const Card = () => {
    return (
        <CardWrapper>
            <CardHeader>
                <CardUserLogo>
                </CardUserLogo>
                <UserDate>
                    <UserName>Name</UserName>
                    <Position>Position</Position>
                </UserDate>
                <Burger>
                    <div></div>
                    <div></div>
                    <div></div>
                </Burger>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardCom>
                <span className="material-icons">send</span>
                <span className="material-icons">favorite</span>
            </CardCom>
            <CardFooter>
                <input type="text" placeholder="Добавьте комментарий" />
                <CardShare>Опубликовать</CardShare>
            </CardFooter>
        </CardWrapper>
    )
}

export default Card
