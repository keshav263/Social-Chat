import React from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import Pic from "../assets/main-page.png"
import logo from "../assets/social-chat-icon.png"
const MainPage=(props)=> {
    return (
        <Container>
            <Header>
                <List href="/"><Icon src={logo} alt="Social-Chat-Icon"></Icon>  </List>
                <List href="/" >About</List>
                <List href="/" >Company</List>
                <List href="/" >Services</List>
            </Header>
        <MainWrapper>
            <TextContainer>
                <Title>
                    Stay <HighlightedTitle as="span"> COOL!</HighlightedTitle> With Social Chat
                </Title>
                <SubTitle>
                    Anyone willing to get acquainted and communicate can get started for free and use it without limits
                </SubTitle>
                <Button variant="contained" color="primary"   style={{width:"10rem",borderRadius:"0.6rem",margin:0,backgroundColor:"#000",padding:"0.5rem"}} >
                    Get Started
                </Button>
            </TextContainer>
            <PicContainer>

            <Image src={Pic} />
            </PicContainer>
            
        </MainWrapper>
        </Container>
    );
}

const Container=styled.div`

`;

const Header=styled.div`
    position:absolute;
    display:flex;
    align-items:center;
`;

const Icon=styled.img`
    height:3rem;
    width:3rem;
    margin-right:0.5rem;
`

const List=styled.a`
    text-decoration:none;
    padding:1rem;
    color:#848484;
    margin:1rem;
    &:hover{
        color:#000;
    }
    
`;

const MainWrapper=styled.div`
    display:flex;
    flex-direction:row;
   
    height:100vh;
    width:100vw;
`;

const TextContainer=styled.div`
    display:flex;
    padding:0rem 2rem 0rem 4rem;
    flex-direction:column;
    justify-content:center;
    width:50vw;
    height:100vh;
`;

const Title=styled.h1`
    font-family:'Quicksand',sans-serif;
    margin:0;
    font-size:5rem; 
    `;

const HighlightedTitle=styled(Title)`
    font-family:'Titan One';
    color:#FF4F25;
`;

const SubTitle=styled.h3`
    font-size:0.8rem;
    color:#ACABAA;
    width:80%;
    font-weight:400;
    margin:2rem 0;
  
`;

const PicContainer=styled.div`
    background-color:#EFECE8;
    width:50vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`;


const Image=styled.img`
    background-size:cover;
   
    background-repeat:no-repeat;
  
   
`;
export default MainPage;