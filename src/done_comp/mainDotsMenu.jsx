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

const MainDotsMenu = ({
  onAddTask,
  titleText,
  triggerIcon,
  open,           // estado controlado
  onOpenChange,   // função para alterar o estado
  hideTrigger = false, // se true, não renderiza o botão trigger
}) => {
  const TriggerIcon = triggerIcon || Plus;

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      {!hideTrigger && (
        <DialogTrigger asChild>
          <Button variant="plain" size="icon">
            <TriggerIcon />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent w="350px">
        <DialogHeader>
          <DialogTitle>{titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <RegisterTask onAddTask={onAddTask}/>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default MainDotsMenu;

