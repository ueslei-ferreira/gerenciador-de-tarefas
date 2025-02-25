import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Flex, Stack, Box, Input, Button, Text, IconButton, HStack, parseColor } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from "../components/ui/color-picker";


const WorkSpace = () => {
  const [taskClass, setTaskClass] = useState("");
  const [taskClasses, setTaskClasses] = useState([]);

  const { control, watch } = useForm({
    defaultValues: { color: "#eb5e41" },
  });
  const colorClass = watch("color");


  //seção de tarefas
  const addTaskClass = () => {
    if (taskClass.trim() !== "" && !taskClasses.some(t => t.name === taskClass)) {
      setTaskClasses([...taskClasses, { name: taskClass, color: colorClass }]);
      setTaskClass("");
    }
  };

  const removeTaskClass = (task) => {
    setTaskClasses(taskClasses.filter((t) => t.name !== task));
  };

  return (
    <Flex direction="column" gap={2} w="100%" h="auto" bg="#dbdbdb" borderRadius="16px" p={6}>
      <Flex gap={4}>
        <Box display="flex" p={4} bg="white" flexDirection="column" alignItems="center" w="300px" borderRadius={9}>
          <Box pb={2}>
            <Input
              placeholder="Adicionar classe de tarefa"
              value={taskClass}
              onChange={(e) => setTaskClass(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTaskClass()}
              mb={3}
            />
            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <ColorPickerRoot
                  name={field.name}
                  defaultValue={parseColor(field.value)}
                  onValueChange={(e) => field.onChange(e.valueAsString)}
                >
                  <ColorPickerControl>
                    <ColorPickerInput />
                    <ColorPickerTrigger />
                  </ColorPickerControl>
                  <ColorPickerContent>
                    <ColorPickerArea />
                    <HStack>
                      <ColorPickerEyeDropper />
                      <ColorPickerSliders />
                    </HStack>
                  </ColorPickerContent>
                </ColorPickerRoot>
              )}
            />
          </Box>
          <Button onClick={addTaskClass} colorScheme="blue" w="150px">
            Adicionar
          </Button>

        </Box>
      </Flex>

      <Flex gap="2" wrap="wrap" maxW="40%">
        {taskClasses.map((task, index) => (
          <Stack key={index} direction="row" justify="space-between" align="center" p={2} bg="white" borderRadius="8px">
            <Box w="10px" h="10px" bg={task.color} borderRadius="50%" />
            <Text>{task.name}</Text>
            <IconButton size="sm" variant="ghost" onClick={() => removeTaskClass(task.name)}>
              <IoMdClose />
            </IconButton>
          </Stack>
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkSpace;
