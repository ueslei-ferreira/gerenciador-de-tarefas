import React from "react";
import { Box, Stack, Input, Textarea } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Field } from "@/components/ui/field";

const frameworks = [
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

const RegisterTask = () => {
  return (
    <Stack direction="column" w="500px">
      <Box h={"25%"}>
        <SelectRoot size="sm" width="320px">
          <SelectLabel>Select framework</SelectLabel>
          <SelectTrigger>
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
          <Input placeholder="Ex. Bug Fix" />
        </Field.Root>
      </Box>
      <Box h={"50%"}>
        <Field.Root>
          <Field.Label>Designation</Field.Label>
          <Textarea />
        </Field.Root>
      </Box>
    </Stack>
  );
};

export default RegisterTask;
