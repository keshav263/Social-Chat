import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderComp from '../components/Header';
import { TextField,Button } from '@material-ui/core';
import firebase from "../firebase/firebase"




const SignInPage=(props) =>{
    const recaptcha=useRef(null)
    const [phoneNumber,setPhoneNumber]=useState("")
    const [error,setError]=useState(false)

    const signInButtonHandler=()=>{
        if(phoneNumber.length!==10){
            setError(true)
            return;
        }
       const editedPhoneNumber="+91".concat(phoneNumber)
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(editedPhoneNumber, appVerifier)
    .then((confirmationResult) => {
        console.log(confirmationResult)
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      window.recaptchaVerifier.render().then(function(widgetId) {
        // eslint-disable-next-line no-undef
        grecaptcha.reset(widgetId);
       
    })
      
    });
    }
   useEffect(()=>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptcha.current, {
    'size': 'invisible',
    'callback': function (response) {
      console.log(response)
    }, 
    });
   },[]) 


    
    return (
       
        <Container>
            <HeaderComp/>
            <SubContainer>
                <Title>Login to continue</Title>
                <Animation>
                 <lottie-player
                    src="https://assets5.lottiefiles.com/private_files/lf30_oi23m99t.json"
                    mode="normal"
                    background="#fff"
                    speed="1"
                    loop
                    autoplay></lottie-player>
          </Animation>
                <TextField required={true} error={error}  type="Number" label="Phone Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}  variant="outlined" style={{width:"100%"}} helperText={error?"Must be 10-digit number":"We will be sending a one time password."}  />

                <Captcha ref={recaptcha}></Captcha>
                <Button variant="contained" onClick={signInButtonHandler} style={{margin:"1rem auto",width:"100%",background:"#000",color:"#fff"}}  >Continue</Button>
            </SubContainer>
           
        </Container>
       
    );
}

const Container=styled.div`
    background-color:#EEECE7;
    display:flex;
    width:100vw;
    height:100vh;
`

const SubContainer=styled.div`
    background-color:#fff;
    padding:2rem;
    align-self:center;
    margin:auto;
    height:45vh;
    width:45vh;
    border-radius:2rem;

`;

const Title=styled.h3`
     font-family:'Quicksand',sans-serif;
`;
const Animation=styled.div`
    height:10rem;
    width:10rem;
    margin:auto;
`;
const Captcha=styled.div`
    margin:1rem auto;
`;





export default SignInPage;