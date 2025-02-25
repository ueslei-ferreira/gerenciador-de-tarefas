import { Flex, Text, Stack } from "@chakra-ui/react";
import MainDotsMenu from "./mainDotsMenu";
import TaskCard from "./taskCard";
const Card = ({titleText, handleSaveTask, tasks}) => {
    return (
        <Stack
            bg="#dbdbdb"
            w="310px"
            h="630px"
            p={5}
            borderRadius="9px"
            overflowY="auto"
        >
            <Flex gap={2} justifyContent="space-between">
                <Text pb={3}>{titleText}</Text>
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
    );
}
export default Card;