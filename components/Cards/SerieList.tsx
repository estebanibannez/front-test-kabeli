import { SerieT } from "@/types/serieType";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

const SerieList = ({ fecha, valor }: SerieT) => {
  return (
    <Flex>
      <Box bg="teal" w="100%" p={4} color="white">
        <Text fontWeight="bold">
          {new Date(fecha).toLocaleDateString()}
          <Badge ml="1" colorScheme="green"></Badge>
        </Text>
        <Text fontSize="sm">valor: {valor}</Text>
      </Box>
    </Flex>
  );
};

export default SerieList;
