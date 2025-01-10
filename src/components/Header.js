import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faT, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: facio.gabrielemiliano@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/emifacio",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/emiliano-facio",
  },
  {
    icon: faX,
    url: "https://x.com/EmilianoFacio77",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/24658969/gabriel-emiliano-facio",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 200;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "lightblue",
    transition: "transform 0.3s ease-in-out",
    transform: visible ? "translateY(0)" : "translateY(-200px)",
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header ref={headerRef} style={headerStyle}>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <nav>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </nav>
            <nav>
              <HStack spacing={8}>
                <button onClick={handleClick("projects")}>Projects</button>
                <button onClick={handleClick("contactme")}>Contact Me</button>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
