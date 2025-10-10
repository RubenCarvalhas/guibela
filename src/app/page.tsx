import Navbar from "./components/navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="image-background">
      <Navbar />
      <div className="hero-slogan">
        <h1>Lavandaria Guibela</h1>
        <h2>Limpeza Profissional ao Seu Alcance</h2>
        <p>Serviços de lavagem, limpeza a seco, engomadoria e muito mais</p>
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


    <section>
      <div>
        
      </div>
    </section>

    </>
  );
}
