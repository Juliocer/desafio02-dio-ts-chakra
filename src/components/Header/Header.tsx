import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header  = () => {
  return (
    <Box
      as="header"
      bg="purple.600"
      color="black"
      py={4}
      px={6}
      boxShadow="md"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="center"
      >
        <Heading as="h1" size="lg" letterSpacing="wide">
          Dio Bank
        </Heading>
      </Flex>
    </Box>
  );
}
