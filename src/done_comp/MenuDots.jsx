import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { MoreHorizontal } from "lucide-react";

const ThreeDotsMenu = ({ onEdit }) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="plain" size="icon">
          <MoreHorizontal />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={onEdit}>Edit</MenuItem>
        <MenuItem>Change to "In progress"</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default ThreeDotsMenu;
