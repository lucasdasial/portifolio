import { useState } from "react";
import { Backend } from "./Backend";
import { Front } from "./Front";
import { Container, Content, Header, LangsSection } from "./Skills.styes";

export function Skills() {
  const [dsLang, setDslang] = useState("");

  const iconJS =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  const iconTS =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
  const iconGo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg";

  const jsDescription =
    "Javascript é a minha principal linguagem, ela é utilizada principalmente no desenvolvimento de interfaces mas tambem pode ser usada no lado do servivores para desenvolver microserviços.";
  const tsDescription =
    "Utilizo Typescript pois ele é um +plus para javascript que adiciona recursos novos para a linguagem como tipagem de dados que ajudar a trazer uma maior confiança e segurança no desenvolvimento/ manutenção das aplicações.";

  const goDescription =
    "Go lang é minha linguagem secundaria. Ela foi desenvolvida pelo Google, uma linguagem compilada, bastante utilizada na construção de apis e microserviços com alta performace pois faz uso muito bem de processadores multicores. ";

  return (
    <Container id="skills">
      <Content>
        <Header
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h1>Conhecimentos</h1>
          <p>
            Meu maior foco é no <strong>desenvolvimento de interfaces</strong>{" "}
            web e mobile mas tambem tenho conhecimentos na construção de apis e
            microserviços.
          </p>
        </Header>
        <LangsSection
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <h2>Linguagens</h2>
          <div className="icons">
            <img
              width={45}
              alt="js"
              src={iconJS}
              onMouseEnter={() => setDslang(jsDescription)}
              onMouseLeave={() => setDslang("")}
            />

            <img
              width={45}
              alt="ts"
              src={iconTS}
              onMouseEnter={() => setDslang(tsDescription)}
              onMouseLeave={() => setDslang("")}
            />
            <img
              width={45}
              alt="go lang"
              src={iconGo}
              onMouseEnter={() => setDslang(goDescription)}
              onMouseLeave={() => setDslang("")}
            />
          </div>
          <p className="tip">passe o mouse/ toque nos icones</p>
          <div className="ds">{dsLang}</div>
        </LangsSection>

        <Front />
        <Backend />
      </Content>
    </Container>
  );
}
