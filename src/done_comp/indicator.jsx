import React from "react";
import { Box} from "@chakra-ui/react";

const StatusIndicator = ({ color }) => (
    <Box 
      w="12px" 
      h="12px" 
      borderRadius="full" 
      bg={color} 
    />
  );
  export default StatusIndicator;