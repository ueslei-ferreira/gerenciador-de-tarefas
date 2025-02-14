import { Button } from "@chakra-ui/react"
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { MoreHorizontal } from "lucide-react"
import RegisterTask from "./registerTask";

const MainDotsMenu = ({ onAddTask }) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="plain" size="icon">
          <MoreHorizontal />
        </Button>
      </DialogTrigger>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new task</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <RegisterTask onAddTask={onAddTask} />
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}

export default MainDotsMenu