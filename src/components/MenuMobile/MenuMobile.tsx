import { Container } from "./MenuMobile.styles";
import { IoClose } from "react-icons/io5";

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: any;
};

export function MenuMobile(props: Props) {
  return (
    <Container isOpen={props.menuIsOpen}>
      <IoClose size={45} onClick={() => props.setMenuIsOpen(false)} />
      <nav>
        <a href="#about" onClick={() => props.setMenuIsOpen(false)}>
          Sobre Dasial
        </a>
        <a href="#" onClick={() => props.setMenuIsOpen(false)}>
          Em Breve
          <br />
          {/* Meus conhecimentos */}
        </a>
        <a href="#" onClick={() => props.setMenuIsOpen(false)}>
          Em Breve
          <br />
          {/* Oque sou capaz de fazer */}
        </a>
        <a href="#" onClick={() => props.setMenuIsOpen(false)}>
          Em Breve
          <br />
          {/* Entre em contato */}
        </a>
      </nav>
    </Container>
  );
}
