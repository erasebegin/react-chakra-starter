import { Flex, Stack, Heading, Image, Text } from '@chakra-ui/react';
import image1 from './assets/Desk Mac Mockup 1desktop.png';

function App() {
  return (
    <>
      <Flex w="full" minH="100vh" justify="center" align="center">
        <Stack
          align="center"
          gap={5}
          bg="gray.50"
          p={10}
          borderRadius="md"
          shadow="md"
        >
          <Image
            src={image1}
            alt="computer with FRIVLE logo on screen"
            h={200}
            w={200}
          />
          <Heading as="h1" size="xl" textAlign="center" color="brand.500">
            This is a heading
          </Heading>
          <Heading as="h2" size="lg" textAlign="center">
            And this is another one
          </Heading>
          <Text color="brandOrange.400" maxW={400} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Stack>
      </Flex>
    </>
  );
}

export default App;
