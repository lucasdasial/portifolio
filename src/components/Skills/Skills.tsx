import { useState } from "react";
import { Container, Content, DsLang, Langs } from "./Skills.styes";

export function Skills() {
  const [dsLang, setDslang] = useState("");

  return (
    <Container id="skills">
      <Content>
        <h1>Conhecimentos</h1>

        <section className="langs">
          <h2>Linguagens</h2>
          <Langs>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              alt="js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              onMouseEnter={() =>
                setDslang(
                  "Javascript é a minha princiapal linguagem, ela é utilizada principalmente no desenvolvimento de interfaces mas tambem pode ser usada no lado do servivores para desenvolver microserviços."
                )
              }
              onMouseLeave={() => setDslang("")}
            />

            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
              alt="ts"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              onMouseEnter={() =>
                setDslang(
                  "Eu utilizo Typescript pois ele é um plus para javascript que adiciona recursos novos para a linguagem como tipagem de dados que ajudar a trazer mais segurança para o desenvolvimento/ manutenção das aplicações."
                )
              }
              onMouseLeave={() => setDslang("")}
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              alt="go lang"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              onMouseEnter={() =>
                setDslang(
                  "Go lang é minha linguagem secundaria. Ela foi desenvolvida pelo Google, uma linguagem compilada, bastante utilizada na construção de apis e microserviços com alta performace pois faz uso muito bem de processadores multicores. "
                )
              }
              onMouseLeave={() => setDslang("")}
            />
          </Langs>
          <DsLang
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {dsLang}
          </DsLang>
        </section>
      </Content>
    </Container>
  );
}
