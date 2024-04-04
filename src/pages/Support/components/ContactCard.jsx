import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          Vous recevrez une réponse dans les 24 heures suivant l'envoi de votre demande.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>prénom</FormLabel>
            <Input placeholder="Entrez votre prénom.." />
          </FormControl>
          <FormControl>
            <FormLabel>nom de famille</FormLabel>
            <Input placeholder="Entrez votre nom de famille.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Saisissez votre mail.." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Entrez votre Message.." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs">
            J'accepte les 
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Envoyez un Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Réserver une réunion
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
