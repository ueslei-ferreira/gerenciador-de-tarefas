import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import MainDotsMenu from "./mainDotsMenu";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { MoreHorizontal } from "lucide-react";

const ThreeDotsMenu = ({ onEdit }) => {

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };
  return (
    <>
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="plain" size="icon">
          <MoreHorizontal />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={handleOpenDialog}>Edit</MenuItem>
        <MenuItem>Change to "In progress"</MenuItem>
      </MenuContent>
    </MenuRoot>

    {isDialogOpen && (
      <MainDotsMenu
        onEdit={onEdit}
        titleText="Edit task"
        open={isDialogOpen}
        onOpenChange={setDialogOpen}
        hideTrigger={true} // Aqui, o botão não será renderizado
      />
    )}
    </>
  );
};

export default ThreeDotsMenu;
