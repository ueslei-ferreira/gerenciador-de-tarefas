import React from "react";
import { Box, Flex, Text, Stack, Link , Icon} from "@chakra-ui/react";

const register_task = () =>{

    return (

        <Stack direction="column" w="500px">
            <Box h={"25%"}>
                
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

}

export default register_task;