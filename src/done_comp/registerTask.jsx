import React from "react";
import { Box, Stack, Input, Textarea, Field, Button } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";


const frameworks = [
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

const RegisterTask = () => {
  return (
    <Stack direction="column" w="300px" h="500px" bg={"#dbdbdb"} borderRadius="16px" p={6}>
      <Box h={"25%"}>
        <SelectRoot size="sm" w="100%" >
          <SelectLabel >Select framework</SelectLabel>
          <SelectTrigger >
            <SelectValueText placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((framework) => (
              <SelectItem key={framework.value} value={framework.value}>
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </Box>
      <Box h={"25%"}>
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input borderColor="black"
            style={{ "--global-color-border": "black" }} placeholder="Ex. Bug Fix" />
        </Field.Root>
      </Box>
      <Box h={"50%"}>
        <Field.Root>
          <Field.Label>Designation</Field.Label>
          <Textarea
            borderColor="black"
            style={{ "--global-color-border": "black" }}
            h="150px"
            resize="none" />
        </Field.Root>
      </Box>
      <Button variant="subtle">Subtle</Button>
    </Stack>
  );
};

export default RegisterTask;
