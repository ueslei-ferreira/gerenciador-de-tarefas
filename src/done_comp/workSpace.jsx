import { useState } from "react";
import { Box, Stack, Input, Button, Tag, TagLabel, TagCloseTrigger } from "@chakra-ui/react";

const WorkSpace = () => {
  const [inputValue, setInputValue] = useState("");
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    if (inputValue.trim() !== "") {
      setClasses([...classes, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveClass = (index) => {
    setClasses(classes.filter((_, i) => i !== index));
  };

  return (
    <Stack direction="column" w="300px" h="500px" bg="#dbdbdb" borderRadius="16px" p={6}>
      <Box>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Adicionar classe"
          borderColor="black"
        />
        <Button mt={2} onClick={handleAddClass} colorScheme="blue">
          Adicionar
        </Button>
      </Box>
      <Box>
        {classes.map((className, index) => (
          <Tag key={index} size="md" colorScheme="blue" m={1}>
            <TagLabel>{className}</TagLabel>
            <TagCloseTrigger onClick={() => handleRemoveClass(index)} />
          </Tag>
        ))}
      </Box>
    </Stack>
  );
};

export default WorkSpace;
