

// import { Box, Flex, IconButton, Input, Text } from "@chakra-ui/react"
// import { Checkbox, CheckboxGroup, Stack, Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, MenuDivider, Button } from '@chakra-ui/react'
// import { Search2Icon, SearchIcon } from '@chakra-ui/icons'

// export const FilterComponents = () => {


//     const brandhandler=()=>{
        
//     }
//     return (
//         <Box>
//             <Box display={{ base: "none", md: "block" }} >

//                 <Text borderBottom={"2px solid green"} width={"60px"}>Brand</Text>
//                 <CheckboxGroup colorScheme='green' >
//                     <Stack alignItems={"baseline"} >
//                         <Flex>
//                             <Input marginTop={"5px "} border={"2px solid black"} placeholder="search By brand" />
//                             <IconButton
//                                 colorScheme='blue'
//                                 backgroundColor={"white"}
//                                 marginTop={"5px "}
//                                 aria-label='Search database'
//                                 icon={<SearchIcon fontSize={"20px"} width={"30px"} height={"40px"} border={"1px solid rgb(213, 191, 191"} color={"black"} borderLeft={"1px solid white"}
//                                     marginLeft={"-14px"}

//                                 />}
//                             />
//                         </Flex>
//                         <Checkbox onChange={brandhandler} value="7 Up">7 Up</Checkbox>
//                         <Checkbox value="Appy">Appy</Checkbox>
//                         <Checkbox value='Appy Fizz'>Appy Fizz</Checkbox>
//                         <Checkbox value='Bisleri'>Bisleri</Checkbox>
//                         <Checkbox value='Coca Cola'>Coca Cola </Checkbox>
//                         <Checkbox value='Fanta'>Fanta </Checkbox>
//                         <Checkbox value='Limca'>Limca </Checkbox>
//                         <Checkbox value='Pepasi'>Pepasi </Checkbox>
//                         <Checkbox value='Sprite'>Sprite </Checkbox>
//                         <Box borderBottom={"2px solid green"} >Price</Box><hr />
//                         <Checkbox value="">Less than Rs 20 </Checkbox>
//                         <Checkbox value="">Rs 21 to Rs 50  </Checkbox>
//                         <Checkbox value="">Rs 51 to Rs 100  </Checkbox>
//                         <Checkbox value="">Rs 101 to Rs 200  </Checkbox>
//                         <Checkbox value="">Rs 201 to Rs 500  </Checkbox>
//                         <Checkbox value="">More than Rs 500  </Checkbox>

//                         <Box borderBottom={"2px solid green"}>Pack Size</Box><hr />
//                         <Checkbox value="">50  ml</Checkbox>
//                         <Checkbox value="">100 ml</Checkbox>
//                         <Checkbox value="">250 ml </Checkbox>
//                         <Checkbox value="">500 ml  </Checkbox>
//                         <Checkbox value="">1000 ml  </Checkbox>
//                         <Checkbox value="">1.25 l  </Checkbox>

//                         <Box borderBottom={"2px solid green"}>Flavours </Box><hr />
//                         <Checkbox value="">Cola</Checkbox>
//                         <Checkbox value="">Orange</Checkbox>
//                         <Checkbox value="">Leman</Checkbox>
//                         <Checkbox value="">Others </Checkbox>


//                     </Stack>
//                 </CheckboxGroup>
//             </Box>
//             <Box display={{ base: "block", md: "none" }} p="0 rem 2 rem">
//                 <Menu closeOnSelect={false}>
//                     <MenuButton as={Button} colorScheme='blue'>
//                         MenuItem
//                     </MenuButton>
//                     <MenuList minWidth='240px'>
//                         <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
//                             <MenuItemOption value='asc'>Ascending</MenuItemOption>
//                             <MenuItemOption value='desc'>Descending</MenuItemOption>
//                         </MenuOptionGroup>
//                         <MenuDivider />
//                         <MenuOptionGroup title='Country' type='checkbox'>
//                             <MenuItemOption value='email'>Email</MenuItemOption>
//                             <MenuItemOption value='phone'>Phone</MenuItemOption>
//                             <MenuItemOption value='country'>Country</MenuItemOption>
//                         </MenuOptionGroup>
//                     </MenuList>
//                 </Menu>
//             </Box>
//         </Box>
//     )
// }