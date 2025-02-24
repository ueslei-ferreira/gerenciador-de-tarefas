import { Flex, Text, Box} from "@chakra-ui/react";
import StatusIndicator from "./indicator";
import AvatarPerfil from "./Avatar";
//import { MoreHorizontal } from "lucide-react"; // Ícone para edição
import ThreeDotsMenu from "./MenuDots";

const TaskCard = ({ task, onSaveTask }) => {
    return (
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

                        <ThreeDotsMenu onSaveTask={onSaveTask} />

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
    )
};

export default TaskCard;