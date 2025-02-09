import { useState } from "react";
import { Flex, Stack, Box, Input, Button, Text, IconButton } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

const WorkSpace = () => {
  const [taskClass, setTaskClass] = useState("");
  const [taskClasses, setTaskClasses] = useState([]);

  const addTaskClass = () => {
    if (taskClass.trim() !== "" && !taskClasses.includes(taskClass)) {
      setTaskClasses([...taskClasses, taskClass]);
      setTaskClass(""); // Limpa o input após adicionar
    }
  };

  const removeTaskClass = (task) => {
    setTaskClasses(taskClasses.filter((t) => t !== task));
  };

  return (
    <Stack direction="column" w="100%" h="auto" bg="#dbdbdb" borderRadius="16px" p={6}>
      <Box display="flex" flexDirection={"column"} alignItems={"center"} w={"300px"}>
        <Input
          placeholder="Adicionar classe de tarefa"
          value={taskClass}
          onChange={(e) => setTaskClass(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTaskClass()}
          mb={3}
        />
        <Button onClick={addTaskClass} colorScheme="blue" w="150px">
          Adicionar
        </Button>
      </Box>

      <Flex gap="2" wrap="wrap" maxW="40%">
        {taskClasses.map((task, index) => (
          <Stack key={index} direction="row" justify="space-between" align="center" p={2} bg="white" borderRadius="8px">
            <Text>{task}</Text>
            <IconButton size="sm" variant={"ghost"} onClick={() => removeTaskClass(task)} >
              <IoMdClose />
            </IconButton>
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
};

export default WorkSpace;
