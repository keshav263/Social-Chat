import React from 'react'
import styled from "styled-components"

const MaintenancePage=(props)=> {
    return (
       <Container>
           <Animation>
           <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_FPu6SH.json"  
                mode="normal"
                background="#fff"
                speed="1"
                loop
                autoplay>

           </lottie-player>
           </Animation>
           <Content>
           <Title>This page is under construction,may be you see it soon.</Title>
           <Subtitle >We apologize for the inconvenience,we're doing our best to get things back to working order for you</Subtitle> 
            </Content>
       </Container>
    )
}

const Container=styled.div`
    display:grid;
    align-items:center;
    justify-content:center;
    width:100vw;
    position:relative;
    height:100vh;
`;

const Animation=styled.div`
    width:100vw;
    height:50vh;  
`;

const Content=styled.div`
    position:absolute;
    text-align:center;
    width:100%;
    transform:translateY(5rem);
`

const Title=styled.h3`
  
    font-family:'Quicksand',sans-serif;
    
   
`;
const Subtitle=styled(Title)`

    font-family:'Quicksand',sans-serif;
    font-weight:200;
    font-size:1rem;
`;

export default MaintenancePage
