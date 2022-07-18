import { Container } from "./Hero.styles";

export function Hero() {
  return (
    <Container>
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
      >
        Software Developer
      </h2>
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        Lucas d.s Alves
      </h1>
    </Container>
  );
}
