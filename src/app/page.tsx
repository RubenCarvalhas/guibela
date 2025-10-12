import Navbar from "./components/navbar";
import ScrollButton from "./components/scrollbutton";
import Image from "next/image";
import SmallCard from "./components/smallcard";
import BigCard from "./components/bigcard";
import Slider from "./components/slider"
import Footer from "./components/footer"
import { FaTshirt, FaSoap, FaCut } from "react-icons/fa";
import { GiMonclerJacket } from "react-icons/gi";
import { FaRug } from "react-icons/fa6";

export default function Home() {

const sliders = {
  id: "slider",
  reviews: [
    { name: "Maria", text: "Serviço excelente!" },
    { name: "João", text: "Muito rápido e profissional." },
    { name: "Ana", text: "Recomendo a todos!" },
    { name: "Pedro", text: "Qualidade acima da média." },
    { name: "André", text: "Roupa entregada com perfeiçao." },
  ],
};


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
            <SmallCard icon={<FaRug />} text="Tapetes e Carpetes" />
          </div>
          <div className="services-container">
            <BigCard
              imageSrc="/first_image.png"
              imageAlt="Lavandaria"
              title="Horário"
              text={
                <>
                  <p>Segunda a sexta: 9h - 19h</p>
                  <p>Sábados: 9h - 13h</p>
                  <p>Encerrados aos domingos e feriados.</p>
                </>
              }
            />
            <BigCard
              imageSrc="/deliver_clothes.jpg"
              imageAlt="Lavandaria"
              title="Serviço de Entrega"
              text={
                 <>
                  <p>Com um mínimo de 15 peças, tem direito a entrega e recolha ao domicilio.</p>
                </>
              }
              footerText="Basta fornecer o seu contacto!"
            />
            <BigCard
              title="Normas"
              imageSrc="/norms.jpg"
              text="Para verificar as nossas Normas:"
              footerText="Clique aqui"
              footerLink="/normas"
            />


          </div>
        </div>
      </section>

      <section className="sliders-container">
        <Slider
          id={sliders.id}
          reviews={sliders.reviews}
          itemsToShow={2} 
        />
      </section>

      <section>
        <Footer />
      </section>

    </>
  );
}
