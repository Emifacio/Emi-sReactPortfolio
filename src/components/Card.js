import React from "react";
import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      color="black"
      maxW="350px"
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
    >
      <Image
        src={imageSrc}
        alt={`Imagen de ${title}`}
        width="full"
        height="auto"
        style={{ minHeight: "200px" }} // Asegura que la imagen sea alta
      />
      <VStack align="start" p={4} spacing={4}>
        <Heading size="md" fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end" p={4}>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
