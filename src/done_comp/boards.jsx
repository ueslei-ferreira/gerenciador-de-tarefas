import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./mainCards";

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
      <Box pl={10}>
        <Flex justify="space-between">
          {/* Coluna To Do */}
          <Card titleText={"To do"} handleSaveTask={handleSaveTask} tasks={tasks}/>
          <Card titleText={"In progress"} handleSaveTask={handleSaveTask} tasks={tasks}/>
          <Card titleText={"Done"} handleSaveTask={handleSaveTask} tasks={tasks}/>
    
        </Flex>
      </Box>
    </Box>
  );
};


export default Boards;
