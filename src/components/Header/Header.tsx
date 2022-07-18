import { useState } from "react";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import { ButtonMenu, Container, Logo } from "./Header.styles";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Logo>Lucas da.si.al</Logo>
      <ButtonMenu>
        <HiOutlineMenuAlt3 size={30} onClick={() => setMenuIsOpen(true)} />
      </ButtonMenu>
      <MenuMobile menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </Container>
  );
}
