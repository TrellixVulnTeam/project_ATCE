import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'


const MainWrapper = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

const Main = () => {
    return (
        <MainWrapper>
            <Card></Card>
        </MainWrapper>
    )
}

export default Main
