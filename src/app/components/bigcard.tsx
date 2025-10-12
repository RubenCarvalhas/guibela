import Image from "next/image";
import Link from "next/link";
import "./bigcard.css";

interface BigCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  text: React.ReactNode;
  footerText?: string;
  footerLink?: string;
}

export default function BigCard({
  imageSrc,
  imageAlt,
  title,
  text,
  footerText,
  footerLink,
}: BigCardProps) {
    
  return (
    <div className="big-card">
      {imageSrc && (
        <div className="big-card-image">
          <Image
            src={imageSrc}
            alt={imageAlt || "Imagem"}
            width={260}
            height={180}
          />
        </div>
      )}
      {title && <h2 className="big-card-title">{title}</h2>}
      <div className="big-card-text">{text}</div>
      {footerText && (
        footerLink ? (
          <Link href={footerLink} className="big-card-footer-link">
            {footerText}
          </Link>
        ) : (
          <p className="big-card-footer">{footerText}</p>
        )
      )}
    </div>
  );
}
