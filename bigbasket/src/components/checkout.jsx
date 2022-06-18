import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
//import { Topnavbar } from "./Navbar/Topnavbar";
import { GoLocation } from "react-icons/go"
import { useSelector } from "react-redux";
export const Checkout = () => {
  const currentProd = useSelector((store) => store.cartData.cartItems)
 
  let sum = 0
  for (let i = 0; i < currentProd.length; i++) {
      sum += currentProd[i].price
  }
  const navigate = useNavigate();
  return (
    <Box >
      <Box fontSize={"30px"} mt="1rem" marginLeft={"7%"} lineHeight={1}>
        <Flex>
          <Box marginRight={"10px"} ><GoLocation /></Box>
          <Box>Delivery Address</Box>
        </Flex>
      </Box>
      <Box width={"98%"} ml={"20px"} display={"flex"}
      //  border={"1px solid rgb(186, 164, 164)"}
      >


        <Box

          width={"65%"}
          marginLeft={"30px"}
          border={"1px solid #e8e8e8"}
          mt="3rem"
          mb={"3rem"}
          p={"2rem"}
          bg="#f6f6f6"
          pb="5rem"
        >

          <Box>
            <Text textAlign={"left"} mt="10px" mb={"10px"}>
              Personal Details
            </Text>
            <FormControl
              isRequired
              variant={"outline"}
              display={"flex"}
              justifyContent="space-between"
            >
              <Box width={"33%"} mr={"10px"}>
                <FormLabel
                  fontSize={"15px"}
                  fontWeight={300}
                  htmlFor="First-name"
                >
                  Enter First Name
                </FormLabel>
                <Input
                  bg={"white"}
                  fontSize={"15px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"33%"} mr={"10px"}>
                <FormLabel fontSize={"15px"} fontWeight={300} htmlFor="Last-name">
                  Enter Last Name
                </FormLabel>
                <Input
                  bg={"white"}
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"33%"} mr={"10px"}>
                <FormLabel
                  fontSize={"15px"}
                  fontWeight={300}
                  htmlFor="Contact-name"
                >
                  Enter Mobile No
                </FormLabel>
                <Input
                  bg={"white"}
                  fontSize={"15px"}
                  width={"100%"}
                  id="contact-number"
                  placeholder=""
                />
              </Box>
            </FormControl>
          </Box>
          <Box>
            <Text textAlign={"left"} mt="10px" mb={"10px"}>
              Address Details
            </Text>
            <FormControl
              isRequired
              variant={"outline"}
              justifyContent="space-between"
            >
              <Box width={"100%"} display={"flex"}>
                <Box width={"25%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    House Number
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"12px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                  />
                </Box>
                <Box width={"75%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    Enter Flat no
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"12px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                  />
                </Box>
              </Box>
              <Box width={"100%"} display={"flex"} mt="1rem">
                <Box width={"50%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    Enter Street Details
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"15px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                  />
                </Box>
                <Box width={"50%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    Enter landmark
                  </FormLabel>
                  <Input
                    bg={"white"}
                    required={"required"}
                    fontSize={"15px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                    variant={"outline"}
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    _focus={{ boxShadow: "#84c225" }}
                    focusBorderColor="#84c225"
                    // isInvalid
                    colorScheme="white"
                    errorBorderColor="#84c225"
                    borderRadius="0"
                    borderWidth="0.025px"
                  />
                </Box>
              </Box>
              <Box width={"100%"} display={"flex"} mt="1rem">
                <Box width={"25%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    City Name
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"15px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                  />
                </Box>
                <Box width={"50%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    Area
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"15px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                  />
                </Box>
                <Box width={"25%"} mr={"10px"}>
                  <FormLabel
                    fontSize={"15px"}
                    fontWeight={300}
                    htmlFor="Last-name"
                  >
                    Pin Code
                  </FormLabel>
                  <Input
                    bg={"white"}
                    fontSize={"15px"}
                    width={"100%"}
                    id="first-name"
                    placeholder=""
                    required
                  />
                </Box>
              </Box>
              <Box float={"left"} m={"1rem 0 1rem 0.25rem "}>
                <Button bg={"gold"} variant={"outline"} onClick={() => navigate("/payment")}>
                  Add Address
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Box mt={"1rem"} ml={"10px"}>
          <Box textAlign={"left"} fontSize={"25px"}>Apply Voucher</Box>
          <Box width={'100%'} height={"100px"}
            bgColor={"#f6f6f6"} padding={"30px"}
          >
            <Flex>
              <Input bgColor={"white"} placeholder="Enter Voucher" /><Button padding={"0px 30px"} bg={"gold"}>Apply</Button>
            </Flex>
          </Box>
          <Box textAlign={"left"} fontSize={"25px"}>Order Summery</Box>
          <Box justifyContent={"space-between"} width={'100%'} height={"250px"}
            bgColor={"#f6f6f6"} padding={"30px"}
            fontSize="22px"
          >

            <Flex justifyContent={"space-between"} >
              <Box>Basket Value</Box>
              <Box >Rs.{sum}.00</Box>
            </Flex>
            <Flex borderBottom={"1px solid rgb(213, 191, 191)"} justifyContent={"space-between"}>
              <Box mt={"15px"}>Delivery Charge</Box>
              <Box mt={"15px"}  color={"green"}>Free</Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Box fontWeight={"bold"} mt={"15px"}>Total Amount Payable</Box>
              <Box mt={"15px"}>Rs.{sum}.00</Box>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Box color={"green"} fontWeight={"bold"} mt={"15px"}>Total Savings</Box>
              <Box color={"green"} mt={"15px"} fontWeight={"bold"}>Rs.{Math.floor(sum/8)}.00</Box>
            </Flex>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};
