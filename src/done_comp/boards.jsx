import React, { useState } from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import MainDotsMenu from "./mainDotsMenu";
import StatusIndicator from "./indicator";
import AvatarPerfil from "./Avatar";
import { Pencil } from "lucide-react"; // Ícone para edição

const Boards = () => {
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (task) => {
    if (task.id) {
      // Atualiza a tarefa existente
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Adiciona nova tarefa (atribui um ID único simples)
      setTasks([...tasks, { ...task, id: Date.now(), status: "todo" }]);
    }
  };

  return (
    <Box w="80%" h="100%" p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        Board
      </Text>
      <Box>
        <Flex justify="space-between">
          {/* Coluna To Do */}
          <Stack
            bg="#dbdbdb"
            w="310px"
            h="630px"
            p={5}
            borderRadius="9px"
            overflowY="auto"
          >
            <Flex gap={2} justifyContent="space-between">
              <Text pb={3}>To do</Text>
              {/* Para criação, usa o ícone de Plus */}
              <MainDotsMenu
                onAddTask={handleSaveTask}
                titleText="Add a new task"
              />
            </Flex>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onSaveTask={handleSaveTask} />
            ))}
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

const TaskCard = ({ task, onSaveTask }) => (
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
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <StatusIndicator color="blue" />
            <Text fontSize="xs" pl={2}>
              {task.class}
            </Text>
          </Flex>
          {/* Para edição, usamos o mesmo diálogo,
              customizando o título e passando a tarefa a ser editada.
              Aqui usamos o ícone Pencil para representar a ação de editar */}
          <MainDotsMenu
            onAddTask={onSaveTask}
            titleText="Edit task"
            editingTask={task}
            triggerIcon={Pencil}
          />
        </Flex>
        <Box overflowY="auto" minH="100px">
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
