import { Button } from "@chakra-ui/react";

interface ButtonLoginProps {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
}

export function ButtonLogin({ onClick, label, disabled }: ButtonLoginProps) {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
      disabled={disabled}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      opacity={disabled ? 0.6 : 1}
    >
      {label}
    </Button>
  );
}
