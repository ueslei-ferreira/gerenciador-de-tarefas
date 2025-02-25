import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, Input, Textarea, Button } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";
import DeadLine from "./prazo";

const frameworks = [
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

const RegisterTask = ({ onAddTask, editingTask }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calculatedDate, setCalculatedDate] = useState("");
  
  const contentRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setSelectedValue(editingTask.class);
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setCalculatedDate(editingTask.deadline || "");
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!selectedValue || !title) return;

    onAddTask({
      id: editingTask?.id, // Mantém o ID se estiver editando
      class: selectedValue,
      title,
      description,
      deadline: calculatedDate,
    });

    setSelectedValue("");
    setTitle("");
    setDescription("");
    setCalculatedDate("");
  };

  return (
    <Stack direction="column" w="300px" minH="500px" bg="#dbdbdb" borderRadius="16px" p={6}>
      <Box h="25%">
        <SelectRoot size="sm" w="100%">
          <SelectLabel>Select a class</SelectLabel>
          <SelectTrigger>
            <SelectValueText>
              {frameworks.find(f => f.value === selectedValue)?.label || "Select framework"}
            </SelectValueText>
          </SelectTrigger>
          <SelectContent portalRef={contentRef}>
            {frameworks.map((framework) => (
              <SelectItem
                key={framework.value}
                value={framework.value}
                onClick={() => setSelectedValue(framework.value)}
              >
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>

      <Box h="25%">
        <Input
          borderColor="black"
          placeholder="Ex. Bug Fix"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box h="50%">
        <Textarea
          borderColor="black"
          h="150px"
          resize="none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      
      <DeadLine calculatedDate={calculatedDate} setCalculatedDate={setCalculatedDate}/>

      <Button variant="solid" colorScheme="blue" onClick={handleSubmit}>
        {editingTask ? "Save Changes" : "Register Task"}
      </Button>

      <div ref={contentRef} />
    </Stack>
  );
};

export default RegisterTask;
