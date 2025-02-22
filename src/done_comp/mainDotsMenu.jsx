import { Button } from "@chakra-ui/react";
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Plus } from "lucide-react";
import RegisterTask from "./registerTask";

// Recebe opcionalmente editingTask e triggerIcon para customização
const MainDotsMenu = ({ onAddTask, titleText, editingTask, triggerIcon }) => {
  // Se não for passado um triggerIcon, usa o Plus por padrão
  const TriggerIcon = triggerIcon ? triggerIcon : Plus;
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="plain" size="icon">
          <TriggerIcon />
        </Button>
      </DialogTrigger>
      <DialogContent w="350px">
        <DialogHeader>
          <DialogTitle>{titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <RegisterTask onAddTask={onAddTask} editingTask={editingTask} />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default MainDotsMenu;
