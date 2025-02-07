import React from "react";
import { Box, Flex, Text, Stack} from "@chakra-ui/react";
import ThreeDotsMenu from "./MenuDots";
import StatusIndicator from "./indicator";
import AvatarPerfil from "./Avatar";
import RegisterTask from "./registerTask";

const Boards = () => {
    return (
    <Box w="80%" h="100%" p={5} >
        <Text fontSize="3xl" fontWeight="bold" mb={5}>
            Board
        </Text>
        <Box >
            <Box h="calc(100% - 60px)">
                <Flex direction={["column", "row"]} gap={4} >
                    <Stack

                        bg="#dbdbdb"
                        w="310px"
                        h="630px"
                        p={5}
                        borderRadius="9px"
                        overflowY="auto"
                        position="relative"
                        css={{
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {

                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#888',
                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background: '#555',
                            },
                        }}
                    >
                        <Text pb={3}>To do</Text>
                        <Box
                            bg="white"
                            w="100%"
                            h="27vh"
                            borderRadius="16px"
                            position="relative"

                        >
                            <Box p={4}>
                                <Flex direction="column" w="100%">
                                    <Box w="100%">
                                        <Flex justifyContent="space-between" alignItems="center" w="100%" >
                                            <Flex alignItems="center">
                                                <StatusIndicator color="blue" />
                                                <Text fontSize="xs" pl={2}>estado</Text>
                                            </Flex>
                                            <Box >
                                                <ThreeDotsMenu />

                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box overflowY="auto">
                                        <Text fontSize="lg">Titulo</Text>
                                        <Text isTruncated maxH="70px" fontSize="11px" pb={4}>
                                            ssdsjasadhasjdhasjdhasjdahhjhsdhjsadhjdsahsdhhjasdhjsdasadhesfdsdfdsfdsfsdfdsfdsfsdhsdhaaaaaaaaaaaaaa
                                        </Text>
                                    </Box>
                                    <AvatarPerfil ></AvatarPerfil>
                                </Flex>
                            </Box>
                        </Box>
                    </Stack>
                    <RegisterTask></RegisterTask>
                </Flex>
            </Box>
        </Box>
    </Box>
    );
}

export default Boards;