import { useState } from "react";
import { Input, Box } from "@chakra-ui/react";

const DeadLine = ({ setCalculatedDate }) => {
  const [days, setDays] = useState("");

  const handleChange = (e) => {
    const inputDays = parseInt(e.target.value, 10) || 0;
    setDays(inputDays);

    // Cálculo da data final
    const today = new Date();
    today.setDate(today.getDate() + inputDays);

    // Formatar para YYYY-MM-DD (padrão comum para DBs)
    const formattedDate = today.toISOString().split("T")[0];
    setCalculatedDate(formattedDate);
  };

  return (
    <Box>
      <Input
        type="number"
        value={days}
        onChange={handleChange}
        placeholder="Deadline (In days)"
      />
    </Box>
  );
};

export default DeadLine;
