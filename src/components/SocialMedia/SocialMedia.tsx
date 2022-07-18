import { Btn, Container } from "./styles";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
export function SocialMedia() {
  const tt = "https://twitter.com/lucas_dasial";
  const ghub = "https://github.com/luccasalves";
  const linkdin = "https://www.linkedin.com/in/luccasalves";

  return (
    <Container>
      <Btn href={ghub} target="_blank">
        <TbBrandGithub size={45} />
      </Btn>
      <Btn href={linkdin} target="_blank">
        <FiLinkedin size={45} />
      </Btn>
      <Btn href={tt} target="_blank">
        <FiTwitter size={45} />
      </Btn>
    </Container>
  );
}
