import { Box, Button, Dialog, TextField, styled, Typography } from "@mui/material";
import { useState } from "react";
import { authenticateSignup } from "../../service/api";
import { DataContext } from "../context/DataProvider";


const Component = styled(Box)`
    height: 60vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    &>div, &>button, &>p{
        margin-top:20px;
    }
    font-family: 'Source Serif Pro', serif;
`
const LoginButton = styled(Button)`
    border: 1px solid black;
    color: black;
    background-color: #A7D129;
    font-weight:bold
    font-family: 'Source Serif Pro', serif;
`
const Text = styled(Typography)`
    font-size: 12px;
    color: grey;
`
const CreateAccount = styled(Typography)`
    font-size: 15px;
    text-align: center;
    foint-weight: 600;
    cursor:pointer;
    color: blue;
`

const accountInitialValues ={
    login:{
        view: 'login'
    },
    signup:{
        view: 'signup'
    }
}

const signupInitialValues={
    firstnme: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}


const LoginDialogue = ({ open, setOpen }) => {

    const [account, toggleAccount]= useState(accountInitialValues.login);
    const [signup, setSignup]= useState(signupInitialValues);
    const [setAccount]= useState(DataContext);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignUp=()=>{
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange=(e)=>{
       setSignup({...signup,[e.target.name]: e.target.value})
    }

    const signupUser= async ()=>{
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose()
        setAccount(signup.firstnme);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            {
                account.view === 'login' ?
                    <Component>
                        <h1>LOG IN</h1>
                        <TextField variant="outlined" label="Enter Email/Mobile number" />
                        <TextField variant="outlined" label="Enter Password" />
                        <Text>By continuing you agree to Folklore's Terms of use and Privacy Policy.</Text>
                        <LoginButton>LogIn</LoginButton>
                        <CreateAccount onClick={toggleSignUp}>New to Folklore. Create an account.</CreateAccount>
                    </Component>
                :
                    <Component>
                        <h1>SIGN UP</h1>
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="firstname" label="Enter First Name" />
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="lastname"  label="Enter Last Name" />
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="username"  label="Enter Username" />
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="email" label="Enter Email" />
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
                        <TextField variant="outlined" onChange={(e)=> onInputChange(e)} name="phone" label="Enter Mobile number" />
                        <Text>By continuing you agree to Folklore's Terms of use and Privacy Policy.</Text>
                        <LoginButton onClick={signupUser}>SignUp</LoginButton>
                    </Component>
            }
        </Dialog>
    )
}
export default LoginDialogue;