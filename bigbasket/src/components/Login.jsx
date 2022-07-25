// import React, { useEffect, useState } from 'react'

// import {
//     AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Button, AlertDialogCloseButton, Input, border, Box, Stack,
// } from '@chakra-ui/react'
// import { Navigate, useNavigate } from 'react-router'
// import { Link } from 'react-router-dom'

// export const Login = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const cancelRef = React.useRef()
//     const navigate = useNavigate()
//     const [value, setValue] = useState(true)
//     const handleCross=()=>{
//         navigate(-1)
//     }
//     const handleChange = () => {
//         navigate(-1)
//         setValue(!value)
//        handleCross()

//     }
//    
//     return (
//         <Box >
//         
//             <Button border={"none"} bgColor={"white"} mt={"-5px"} fontSize={"22px"} onClick={onOpen}>{value?"Login/Sign Up":"Sumit"}</Button>
//             <AlertDialog

//                 motionPreset='slideInBottom'
//                 leastDestructiveRef={cancelRef}
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 isCentered
//             >
//                 <AlertDialogOverlay />

//                 <AlertDialogContent height={"500px"}
//                 >
//                     <AlertDialogHeader margin={"auto"} color="green" fontSize={"25px"}>LOGIN/SIGN UP</AlertDialogHeader>
//                     <AlertDialogCloseButton onClick={handleCross} border={"none"} />
//                     <AlertDialogBody >
//                         <Input mt={"2rem"} borderRadius={"opx"} borderBottom={"1px solid black"} border="none" placeholder={{ value } ? " Enter Email address" : "Enter Mobile No"} />
//                         <Stack>
//                             <Button bgColor={"white"} mt={"150px"} ref={cancelRef} onClick={() => setValue(!value)}>
//                                 Login using Mobile Number
//                             </Button>
//                             {
//                                 // <Button border={"none"} onClick={onClose}  bgColor={"#bfe08e"} color={"white"} colorScheme='red' ml={3}>

//                                 // Continue

//                                 // </Button>
//                             }
//                             <Button onClick={handleChange}>Register</Button>
//                         </Stack>
//                     </AlertDialogBody>
//                     <Box fontSize={"14px"} padding={"10px"}>By continuing, I accept TCP-bigbasket’s Terms and Conditions and Privacy Policy.</Box>

//                 </AlertDialogContent>
//             </AlertDialog>
//         </Box>
//     )
// }

///////////////////////////////////////////////////////////////////////////////////

import { Box, useDisclosure, AlertDialog, AlertDialogOverlay } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import {
    FormControl,
    FormLabel,

    FormHelperText,
    Input,
    InputRightElement,
    Button,
    AlertDialogContent,
    InputGroup,
} from "@chakra-ui/react";
import { useRef } from "react";
// import { GoogleAuth } from "../GoogleAuth/googleAuth";
export const Login = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [userName, setUserName] = useState('SignIn')
    const handleClick = () => setShow(!show);
    function handleCallbackResponse(response) {
        //console.log('Encoded JWT Id token:'+responce.credential);
        var userID = jwt_decode(response.credential);
        ///////////////////
        alert(`${userID.name} ! You are successfully signed in`)
        setUserName(userID.name)
        dispatch(isAuth(true));
        //////////////////////////////
        props.setgoogleAuthUser(userID)
        navigate('/')
    }
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: '1018777173719-po881ts69fnll531n7v5ksti1g22v10t.apps.googleusercontent.com',
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline' }
        )

    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const login = () => {
        axios.post('http://localhost:5000/login', user).then(res => {
            console.log(res)
            alert(res.data.message)
         //   props.setLoginUser(res.data.user)
            navigate('/')
        })

    }
    return (
        <Box

            boxShadow="xs"
             // p=""
            rounded="md"
            bg="white"
         width="45%"
         height={8}
        //align="center"
        pr={3}
        >
            <Button border={"none"} bgColor={"white"} position={"inherit"} fontSize={"18px"} onClick={onOpen}>{userName}</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent height={"500px"}
                p="20px"
                >
                <h1 id="LoginTop">Login</h1>
                <FormControl
                >
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input id="email" type="email" name="email" onChange={handleChange} />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <br />
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            name="password"
                            onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <br />
                    <Button colorScheme="gray" width="100%" onClick={login}>
                        Login
                    </Button>
                    <br />
                    <p id="LoginTop">Or </p>
                    <Button colorScheme="gray" width="100%" >
                        Register
                    </Button>
                </FormControl>
                <br />
                <div id="signInDiv"></div>
                </AlertDialogContent>
            </AlertDialog>
        </Box>
    );
};
