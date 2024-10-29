import {
  SlCarousel,
  SlCarouselItem,
} from "@shoelace-style/shoelace/dist/react";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { useEffect, useRef } from "react";
import "./App.css";
import "./tw-directives.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const slCarouselRef = useRef<any | null>(null);

  useEffect(() => {
    setBasePath("../public/shoelace/dist/assets/icons");
  }, []);

  return (
    <div className="">
      <Header
        style={{ height: "60px" }}
        className="w-full h-24 bg-gray-800 text-white text-2xl font-bold flex justify-center items-center"
        onGoToSection1={() => {
          slCarouselRef.current.goToSlide(0);
        }}
        onGoToSection2={() => {
          slCarouselRef.current.goToSlide(1);
        }}
        onGoToSection3={() => {
          slCarouselRef.current.goToSlide(2);
        }}
        onGoToSection4={() => {
          slCarouselRef.current.goToSlide(3);
        }}
      />
      <SlCarousel
        ref={slCarouselRef}
        style={{ height: "calc(100vh - 60px)", padding: "0 4px" }}
        className="vertical scroll-hint"
        pagination
        orientation="vertical"
      >
        <SlCarouselItem className="h-full bg-slide">
          <Card
            subheader="Desenvolvedor Front-end"
            header={
              <>
                Olá! Sou Hugo,
                <br /> tenho mais de 4 anos de experiência
              </>
            }
            description={
              <>
                Anteriormente, fui desenvolvedor front-end em:
                <div className="flex flex-col items-center">
                  <ul className="text-start p-2 ">
                    <li>- Hicom It</li>
                    <li>- Macetado</li>
                  </ul>
                </div>
              </>
            }
          />
        </SlCarouselItem>
        <SlCarouselItem className="h-full bg-slide">
          <Card
            subheader="Áreas de interesse"
            header={
              <>
                Gosto de desenvolver interfaces com frameworks modernos como:
                Tailwind, React JS, Typescript
              </>
            }
            description="Com o intuito de otimização de performance e acessibilidade para garantir que todos os usuários tenham a melhor experiência possível"
          />
        </SlCarouselItem>
        <SlCarouselItem className="h-full bg-slide">
          <Card
            subheader="Projetos em andamento"
            header={
              <>
                Estou desenvolvendo uma série de projetos que em breve estarão
                disponíveis aqui no site
              </>
            }
            description={
              <>
                Elas incluem&nbsp;
                <span style={{ fontFamily: "varelaround", fontWeight: "bold" }}>
                  automação CI/CD (jenkins)
                </span>
                &nbsp;e desenvolvimento de&nbsp;
                <span style={{ fontFamily: "varelaround", fontWeight: "bold" }}>
                  component library com StencilJS
                </span>
                &nbsp;testada com&nbsp;
                <span style={{ fontFamily: "varelaround", fontWeight: "bold" }}>
                  unit e e2e tests
                </span>
              </>
            }
          />
        </SlCarouselItem>
        <SlCarouselItem className="h-full bg-slide">
          <Card
            subheader="O Site Ainda Está Evoluindo"
            header={<>Este site ainda está passando por transformações!</>}
            description={
              <>
                Em breve, haverá uma seção dedicada aos meus projetos mais
                recentes, além de novas funcionalidades e melhorias no layout
                para facilitar a navegação
              </>
            }
          />
        </SlCarouselItem>
      </SlCarousel>
    </div>
  );
}

export default App;
