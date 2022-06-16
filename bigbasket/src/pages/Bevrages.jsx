
import {
    Box, Flex, Center, useColorModeValue, Heading, Text, Stack, Image,
} from '@chakra-ui/react';

export const Beverage = () => {
    return (
        <div>
            <Box>
                <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
                    <Box>
                        filter
                    </Box>
                    <Box>
                        <Heading as="h3">Products</Heading>
                        <Flex> </Flex>


                    </Box>
                </Stack>
            </Box>
        </div>
    )
}