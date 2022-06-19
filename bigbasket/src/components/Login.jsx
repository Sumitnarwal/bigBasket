import React, { useState } from 'react'

import {
    AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Button, AlertDialogCloseButton, Input, border, Box, Stack,
} from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate()
    const [value, setValue] = useState(true)
    const handleCross=()=>{
        navigate(-1)
    }
    const handleChange = () => {
        navigate(-1)
        setValue(!value)
       handleCross()
        
    }
    return (
        <Box >

            <Button border={"none"} bgColor={"white"} mt={"-5px"} fontSize={"22px"} onClick={onOpen}>{value?"Login/Sign Up":"Sumit"}</Button>
            <AlertDialog

                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent height={"500px"}
                >
                    <AlertDialogHeader margin={"auto"} color="green" fontSize={"25px"}>LOGIN/SIGN UP</AlertDialogHeader>
                    <AlertDialogCloseButton onClick={handleCross} border={"none"} />
                    <AlertDialogBody >
                        <Input mt={"2rem"} borderRadius={"opx"} borderBottom={"1px solid black"} border="none" placeholder={{ value } ? " Enter Email address" : "Enter Mobile No"} />
                        <Stack>
                            <Button bgColor={"white"} mt={"150px"} ref={cancelRef} onClick={() => setValue(!value)}>
                                Login using Mobile Number
                            </Button>
                            {
                                // <Button border={"none"} onClick={onClose}  bgColor={"#bfe08e"} color={"white"} colorScheme='red' ml={3}>

                                // Continue

                                // </Button>
                            }
                            <Button onClick={handleChange}>Register</Button>
                        </Stack>
                    </AlertDialogBody>
                    <Box fontSize={"14px"} padding={"10px"}>By continuing, I accept TCP-bigbasket’s Terms and Conditions and Privacy Policy.</Box>

                </AlertDialogContent>
            </AlertDialog>
        </Box>
    )
}