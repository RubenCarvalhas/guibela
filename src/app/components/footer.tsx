import "./footer.css";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className="footer-container">
      <div className="footer-left-side-first">
        <h1>Morada</h1>
        <p>Rua Mário Sampaio Ribeiro Nº11</p>
        <p>Sta. Marta do Pinhal</p>
        <p>2855-598 Corroios</p>

        <div className="footer-left-side-second">
          <h1>Contactos</h1>
          <div className="contact-item">
            <h3>Tlf:</h3>
            <p>211 808 830</p>
          </div>
          <div className="contact-item">
            <h3>Tlm:</h3>
            <p>939 524 195</p>
          </div>
        </div>

        <div className="footer-left-side-third">
          <h1>Visite a nossa página!</h1>
          <a
            href="https://pt-pt.facebook.com/people/Lavandaria-Guibela/100064088021194/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-icon"
          >
            <FaFacebookF size={32} />
          </a>
        </div>
      </div>

      <div className="footer-right-side">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12467.271614915295!2d-9.152119!3d38.63007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19357deebe10b1%3A0x780f55f541b5b76d!2sGuibela%20-%20Lavandaria!5e0!3m2!1spt-PT!2sus!4v1748193188509!5m2!1spt-PT!2sus"
          width="100%"
          height="700"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      
    </div>

    <div className="footer-last-message">
        <h1>Tabela de preços com IVA incluído à taxa em vigor.</h1>
      </div>
    </>
  );
}
