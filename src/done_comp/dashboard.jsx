import React from "react";
import { Box, Flex, Text, Stack, Link , Icon} from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import ThreeDotsMenu from "./MenuDots";
import StatusIndicator from "./indicator";
import AvatarPerfil from "./Avatar";


const Dashboard = () => {
  return (
    <Flex h="100vh" bg="gray.100" >
        <Box
            w="15%"
            bg="white.600"
            color="black"
            boxShadow="4px 0 8px rgba(0, 0, 0, 0.2)"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            align="center"
            >
            
            <Stack align="start" w="100%" px={9} pt={7}> 
                <Text fontSize="2xl" fontWeight="bold">
                Manage
                </Text>
                <Flex>
                <Icon as={MdSpaceDashboard} boxSize={6} mr={2} />
                <Link href="#overview" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                    Board
                </Link>
                </Flex>
            </Stack>

            <Text fontSize="sm" mt={10}>
            &copy; 2025 - My Dashboard
            </Text>
        </Box>

      {/* Conteúdo Principal */}
        <Box w="80%" h="100%" p={5} >
            <Text fontSize="3xl" fontWeight="bold" mb={5}>
            Board
            </Text>
            <Box h="calc(100% - 60px)">
                <Stack

                    bg="Gainsboro"
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
                        h="190px"
                        borderRadius="16px" 
                        position="relative"
                        
                    >
                        <Box p={4}>
                            <Flex direction="column" w="100%">
                                <Box w="100%">
                                    <Flex justifyContent="space-between" alignItems="center" w="100%" >
                                        <Flex alignItems="center">
                                            <StatusIndicator color="blue"/>
                                            <Text fontSize="xs" pl={2}>estado</Text>
                                        </Flex>
                                        <Box >
                                            <ThreeDotsMenu />
                                            
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box>
                                    <Text fontSize="lg">Titulo</Text>
                                    <Text fontSize="11px" pb={4}>
                                        ssdsjasadhasjdhasjdhasjdahhjhsdhjsadhjdsahsdhhjasdhjsdasadhesfdsdfdsfdsfsdfdsfdsfsdhsdhaaaaaaaaaaaaaa
                                    </Text>
                                </Box>
                                <AvatarPerfil ></AvatarPerfil>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    </Flex>
  );
};

export default Dashboard;
