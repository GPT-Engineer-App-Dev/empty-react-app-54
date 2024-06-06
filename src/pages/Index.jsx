import { Container, Text, VStack, Heading, Button, HStack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="lg">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
        <HStack spacing={4}>
          {session ? (
            <>
              <Text>{session.user.email}</Text>
              <Button colorScheme="red" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button colorScheme="teal" onClick={() => navigate("/login")}>Login</Button>
          )}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;