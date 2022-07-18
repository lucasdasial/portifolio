import Rellax from "rellax";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { Container, Content, ImageBox, TextBox } from "./Bio.styles";

export function Bio() {
  const imgSrc = "https://avatars.githubusercontent.com/u/72477227?v=4";
  return (
    <Container id="about">
      <Content>
        <TextBox
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <p>
            Olá! 👋 Sou <strong>Lucas,</strong> desenvolvedor de software e
            entusiasta ui/ux design, baseado no Brasil.🇧🇷
          </p>
          <br />
          <p>
            Por volta de 2 anos meu trabalho tem sido construir interfaces e
            aplicativos para ajudar a <span className="yellow">solucionar</span>{" "}
            problemas das pessoas por meio da programção 🧑‍💻. Eu gosto de fazer
            isso sempre buscando proporcinar a melhor experiencia possivel.
          </p>
          <br />
          <p>
            Estou sempre aperfeiçando e aprendendo novas maneiras de fazer meu
            trabalho. 🌱
          </p>
          <SocialMedia />
        </TextBox>

        <ImageBox
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={imgSrc} alt="Foto de perfil" />
        </ImageBox>
      </Content>
    </Container>
  );
}
