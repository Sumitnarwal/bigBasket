
import { Box } from "@chakra-ui/react";
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
  InputGroup,
} from "@chakra-ui/react";
// import { GoogleAuth } from "../GoogleAuth/googleAuth";
export const Login = (props) => {
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
    console.log('userID:', userID)
    setUserName(userID.name)
    console.log("userName")
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

  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  const login = () => {
    axios.post('https://bigbaskets.herokuapp.com/login', user).then(res => {
      console.log(res.data.user)
      alert(res.data.message)
      props.setLoginUser(res.data.user)
    })
    navigate('/')
  }
  return (
    <Box
      //   border={"1px solid black"}
      margin="auto"
      mb={"20px"}
      mt={"20px"}
      //   boxShadow="xs"
      p="6"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      rounded="md"
      bg="white"
      width="42%"
      padding={"20px"}
      height={520}
      align="center"
    >
      <h1 id="LoginTopLo">Login</h1>
      <FormControl>
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
        <p>Or </p>
        <Button colorScheme="gray" width="100%" onClick={() => navigate('/register')}>
          Register
        </Button>
      </FormControl>
      <br />
      <div id="signInDiv"></div>
    </Box>
  );
};
