"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./normas.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const normas = [
  {
    title: "1. Peças fora do contrato",
    content:
      "Reservamo-nos o direito de aplicar tabela específica às peças que não fazem parte do contrato (ex: conectores, tralhas, bordados, blusões, etc).",
  },
  {
    title: "2. Cabides",
    content:
      "Os cabides são devolvidos no ato da próxima recolha.",
  },
  {
    title: "3. Contratos",
    content:
      "Os contratos terão de ter peças variadas.",
  },
  {
    title: "4. Contratos Vinculativos",
    content:
      "A nossa empresa não sujeita o cliente a qualquer tipo de contrato vinculativo referente ao nº de peças.",
  },
  {
    title: "5. Mudança de pacotes", 
    content:
        "O cliente pode mudar de pacote a cada mês de acordo com as suas necessidades (nº peças a enviar) ou escolher um pacote fixo, sendo este que o número camisas/calças enviadas não poderá exceder os 50% do número de peças do pacote.",
  },
  {
    title: "6. Validade dos pacotes",
    content:
        "Os pacotes têm a validade de 4 semanas a contar à data de aquisação do mesmo.",
  },
  {
    title: "7. Serviços não incluidos nos pacotes",
    content:
        "O serviço de pacote não inclui carpetes, tapeçarias, peles, edredões, blazers, blusões, cabedais, rendas, bordados, fatos de cerimónia ou outras peças cuja engomagem seja de maior complexidade.",
  },
  {
    title: "8. Recolhas e entregas",
    content:
        "As recolhas e entregas são efectuadas até, de acordo com a necessidade do cliente, e a roupa será entregue ao cliente no prazo de 48h, salvo excepções acordados com o cliente, ou em casos que ocorram cortes de energia ou água.",
  },
  {
    title: "9. Serviços de costura",
    content:
        "Nos serviços de costura, todos os arranjos que estejam marcados pelo cliente, são da sua inteira responsabilidade.",
  },
  {
    title: "10. Pagamento dos serviços",
    content:
        "Todos os serviços são em pré-pagamento.",
  },
  {
    title: "11. Transporte de roupa",
    content:
        "Para o transporte da roupa, o cliente pode optar por açafate, saco e cabides próprios, ou por açafate, saco e cabides da nossa empresa.",
  },
  {
    title: "12. Acessórios de transporte de roupa",
    content:
        "Todos os acessórios de transporte de roupa fornecidos pela nossa empresa aos clientes de Pacotes Mensais, devem ser devolvidos, caso o mesmo não aconteça, serão debitados ao cliente no final de contrato.",
  },
  {
    title: "13. Levantamento das roupas",
    content:
        "Se o cliente não efectuar o levantamento da roupa na nossa loja até 90 dias após a data de entrega, a mesma é doada a instituições de caridade escolhidas pela nossa empresa.",
  },
  {
    title: "14. Reclamações",
    content:
        "O cliente dispõe de 24 horas para eventuais reclamações sob o serviço prestado.",
  },
  {
    title: "15. IVA",
    content:
        "Todos os preços constantes da nossa tabela de serviços de loja, incluem IVA à taxa legal em vigor.",
  },
  {
    title: "16. Recolha e entrega ao Domicilio",
    content:
        "Com recolha e entrega ao Domicilio, acima de 15 peças.",
  }

];

export default function Normas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="hero-background">
        <Navbar />
        <div className="hero-content">
          <h1>Normas</h1>
        </div>
      </div>

      <div className="title">
        <h1>Normas de Serviço</h1>
        <p>Clique nos tópicos abaixo para visualizar os detalhes de cada norma.</p>
      </div>

      <div className="normas-list">
        {normas.map((item, index) => (
          <div key={index} className={`norma-item ${openIndex === index ? "open" : ""}`}>
            <h3 className="norma-title" onClick={() => toggle(index)}>
              {item.title}
              <span className="arrow">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h3>
            <div className={`norma-content ${openIndex === index ? "visible" : ""}`}>
                <p>{item.content}</p>
                </div>
          </div>
        ))}
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
}