import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Emi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Emi"
        src="https://sat02pap003files.storage.live.com/y4mHKgZPGpzKwFD5_jqvkAf64_1nRDUNCwzrJvUDCD304krvuQ1SeVvAOOv6l0k2UywEOP4J-ldZBkzYF2f3XhJuKs1c8jIvO_Lm2DpZPjryY-Mb6idwdqdwP3GJgvfbnnyJRvLSTEV95wEGXy6d8xZbbiPQr-2FW74c_36hI9gbt8Dft5plzHh6n9HS-USGn5I58a0y-w0CqZ7tE4-CKj4oGotUfKbKXj0A6hUBQtyYeU?encodeFailures=1&width=352&height=288"
        s
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
