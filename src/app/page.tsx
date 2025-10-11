import Navbar from "./components/navbar";
import ScrollButton from "./components/scrollbutton";
import Image from "next/image";
import SmallCard from "./components/smallcard";
import { FaTshirt, FaSoap, FaCut  } from "react-icons/fa";
import { GiMonclerJacket } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <div className="image-background">
        <Navbar />
        <div className="hero-slogan">
          <h1>Lavandaria Guibela</h1>
          <h2>Limpeza Profissional ao Seu Alcance</h2>
          <ScrollButton targetId="services">
            Ver os nossos serviços
          </ScrollButton>
        </div>
      </div>

      <section className="who-are-we-section">
        <div className="who-are-we">
          <div className="who-are-we-image">
            <Image
              src="/ironying.jpg"
              alt="Ironying"
              width={400}
              height={300}
            />
          </div>
          <div>
            <h1>Quem somos?</h1>
            <p>
              A Lavandaria Guibela presta serviços de lavagem, limpeza a seco e engomadoria, com uma equipa profissional e preparada para responder aos clientes.
            </p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="hero-content">
          <h1>Serviços da Lavandaria Guibela</h1>
          <div className="services-container">
            <SmallCard icon={<FaTshirt />} text="Lavandaria e Engomadoria" />
            <SmallCard icon={<FaSoap />} text="Lavagem / Limpeza a seco" />
          </div>
          <div className="services-container">
            <SmallCard icon={<FaCut />} text="Arranjos de Costura" />
            <SmallCard icon={<GiMonclerJacket />} text="Tratamento de Peles" />
            <SmallCard icon={<GiMonclerJacket />} text="Tapetes e Carpetes" />
          </div>
        </div>
      </section>
    </>
  );
}
