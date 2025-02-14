import React, { useState } from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import ThreeDotsMenu from "./MenuDots";
import MainDotsMenu from "./mainDotsMenu";
import StatusIndicator from "./indicator";
import AvatarPerfil from "./Avatar";

const Boards = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, {
      ...newTask,
      id: Date.now(), // ID único simples
      status: "todo"
    }]);
  };

  return (
    <Box w="80%" h="100%" p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        Board
      </Text>
      <Box>
        <Box h="calc(100% - 60px)">
          <Flex direction={["column", "row"]} gap={4}>
            {/* Coluna To Do */}
            <Stack
              bg="#dbdbdb"
              w="310px"
              h="630px"
              p={5}
              borderRadius="9px"
              overflowY="auto"
              position="relative"
              css={{
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-track': { borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': { background: '#555' },
              }}
            >
              <Flex gap={2} justifyContent="space-between">
                <Text pb={3}>To do</Text>
                <MainDotsMenu onAddTask={handleAddTask} />
              </Flex>
              
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}

            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

// Componente de card de tarefa reutilizável
const TaskCard = ({ task }) => (
  <Box
    bg="white"
    w="100%"
    minH="27vh"
    borderRadius="16px"
    position="relative"
    mb={4}
  >
    <Box p={4}>
      <Flex direction="column" w="100%">
        <Box w="100%">
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Flex alignItems="center">
              <StatusIndicator color="blue" />
              <Text fontSize="xs" pl={2}>{task.class}</Text>
            </Flex>
            <Box>
              <ThreeDotsMenu />
            </Box>
          </Flex>
        </Box>
        <Box overflowY="auto">
          <Text fontSize="lg">{task.title}</Text>
          <Text fontSize="11px" pb={4} whiteSpace="pre-wrap">
            {task.description}
          </Text>
        </Box>
        <AvatarPerfil />
      </Flex>
    </Box>
  </Box>
);

export default Boards;