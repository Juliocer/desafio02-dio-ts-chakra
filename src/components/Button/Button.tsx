import { Button } from "@chakra-ui/react";

interface ButtonLoginProps {
  onClick: () => void;
  label: string;
}

export function ButtonLogin({ onClick, label }: ButtonLoginProps) {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      {label}
    </Button>
  );
}
