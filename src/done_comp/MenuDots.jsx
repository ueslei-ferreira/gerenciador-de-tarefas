import { Button } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu"
import { MoreHorizontal } from "lucide-react";

const ThreeDotsMenu = () => {
  return (
    <MenuRoot >
      <MenuTrigger asChild>
        <Button variant="plain" size="icon">
            <MoreHorizontal />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt">Edit</MenuItem>
        <MenuItem value="new-file">Change to "In progress"</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

export default ThreeDotsMenu;