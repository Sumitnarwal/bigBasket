import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router";
//import { Topnavbar } from "../Navbar/Topnavbar";
//cart remove 77
export const Payment = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  
  return (
    <Box width={"100%"}>
     
      <Box width={"95%"} margin="auto">
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Box
            width={"70%"}
            margin="auto"
            fontSize={"14px"}
            fontWeight="300"
            mt="1rem"
            bg="#f6f6f6"
          >
            <Text
              textAlign={"left"}
              padding="1rem"
              fontSize={"25px"}
              fontWeight={"400"}
            >
              Payment Method
            </Text>

            <Flex
              padding={"1rem"}
              textAlign="left"
              border={"1px solid #e8e8e8"}
            >
              <Box width={"30%"} fontSize={"20px"} borderRight={"1px solid #e8e8e8"} bg="white">
               
                <Text  borderBottom={"1px solid #e8e8e8"} p="1rem">Cash/Card on Delivery</Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                Wallet
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Net Banking{" "}
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  UPI
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                Credit/Debit Card
              </Text>
              </Box>
              <Box bg="white" width="80%" pt="1rem">
                <FormControl isInvalid={isError} width="60%" margin={"auto"}>
                  <FormLabel
                    fontSize={"18px"}
                    fontWeight={400}
                    htmlFor="number"
                  >
                    Card Number
                  </FormLabel>
                  <Input
                    
                    id="number"
                    type="number"
                    fontSize={"15px"}
                    fontWeight={300}
                    variant={"outline"}
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    _focus={{ boxShadow: "#e8e8e8" }}
                    focusBorderColor="#e8e8e8"
                    colorScheme="white"
                    errorBorderColor="#e8e8e8"
                    borderRadius="0"
                    borderWidth="0.025px"
                    placeholder="Enter Card Number"
                  />
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage></FormErrorMessage>
                  )}
                  <Flex width="100%" justifyContent={"space-between"}>
                    <Box width="49%">
                      <FormLabel
                        fontSize={"18px"}
                        fontWeight={400}
                        htmlFor="card"
                      >
                        Expire Year
                      </FormLabel>
                      <Input
                        type="number"
                        fontSize={"15px"}
                        fontWeight={300}
                     
                        variant={"outline"}
                        _hover={{ bg: "white" }}
                        _expanded={{ bg: "white" }}
                        _focus={{ boxShadow: "#e8e8e8" }}
                        focusBorderColor="#e8e8e8"
                        colorScheme="white"
                        errorBorderColor="#e8e8e8"
                        borderRadius="0"
                        borderWidth="0.025px"
                      />
                    
                    </Box>
                    <Box width="49%">
                      <Box>
                        <FormLabel
                          fontSize={"18px"}
                          fontWeight={400}
                          htmlFor="cvv"
                        >
                          cvv
                        </FormLabel>
                        <Input
                          type="number"
                          fontSize={"15px"}
                          fontWeight={300}
                          variant={"outline"}
                          _hover={{ bg: "white" }}
                          _expanded={{ bg: "white" }}
                          _focus={{ boxShadow: "#e8e8e8" }}
                          focusBorderColor="#e8e8e8"
                          colorScheme="white"
                          errorBorderColor="#e8e8e8"
                          borderRadius="0"
                          borderWidth="0.025px"
                        />
                        
                      </Box>
                    </Box>
                  </Flex>
                  <Box mt="1 rem">
                    <Button
                      variant={"solid"}
                 
                      
                      _focus={{ boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                     
                      borderWidth="0.025px"
                      bg="gold"
                      color={"black"}
                      border={"none"}
                      borderRadius={"8px"}
                      mt={"30px"}
                      ml={"9rem"}
                      onClick={() => {
                        
                          alert("Payment Done Successfull!");
                          alert("Items Deliver in Next 4 days");
                          navigate("/");
                        
                      }}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </Box>
          
        </Flex>
      </Box>
    </Box>
  );
};
