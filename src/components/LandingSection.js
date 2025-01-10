import React from "react";
import { Image, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Emi!";
const bio1 = "A FullStack developer";
const bio2 = "Specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Image
        name="Emi"
        src="/images/emi.jpg"
        boxSize="400px" // Tamaño de la imagen
        borderRadius="full" // Hace la imagen circular
        objectFit="cover" // Ajusta la imagen al contenedor circular
      />
      <Heading color="white" size="md">
        {greeting}
      </Heading>
      <Heading color="gray.300" size="xl">
        {bio1}
      </Heading>
      <Heading color="gray.300" size="xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
