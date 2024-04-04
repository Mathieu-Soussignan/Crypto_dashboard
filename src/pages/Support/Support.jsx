import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Nous contacter"
          text=" Vous avez une question ou souhaitez en savoir plus ? N'hésitez pas à nous contacter."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="En savoir plus sur nos services immobiliers, hypothécaires et de comptes d'entreprise"
            />
          }
          title="Live Chat"
          text=" Vous n'avez pas le temps d'attendre la réponse ? Chattez avec nous maintenant."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
