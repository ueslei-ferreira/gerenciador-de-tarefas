import React from "react";
import { Link } from "react-router";
import { Box, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <Flex h="100vh" bg="gray.100" >
            <Box
                w={{ base: "0", md: "15%" }} // Esconde no mobile, exibe no desktop
                minH="100vh"
                bg="white"
                color="black"
                boxShadow="4px 0 8px rgba(0, 0, 0, 0.2)"
                display={{ base: "none", md: "flex" }} // Oculta no mobile, mostra no desktop
                flexDirection="column"
                justifyContent="space-between"
                align="center"
                transition="0.3s"
            >
                <Stack align="start" w="100%" px={9} pt={7}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Manage
                    </Text>
                    <Flex direction="column">
                        <Link to="/workspace" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                            Workspace
                        </Link>
                        <Box>
                            <Icon as={MdSpaceDashboard} boxSize={6} mr={2} />
                            <Link to="/boards" fontSize="lg" _hover={{ textDecoration: "underline" }}>
                                Boards
                            </Link>
                        </Box>
                    </Flex>
                </Stack>

                <Text fontSize="sm" mt={10}>
                    &copy; 2025 - My Dashboard
                </Text>
            </Box>
            <Outlet/>
        </Flex>
    );
};

export default Dashboard;
