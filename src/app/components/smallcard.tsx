import { ReactElement } from "react";
import "./smallcard.css";

interface SmallCardProps {
  icon: ReactElement;
  text: string;
}

export default function SmallCard({ icon, text }: SmallCardProps) {
  return (
    <div className="small-card">
      <div className="small-card-icon">{icon}</div>
      <p className="small-card-text">{text}</p>
    </div>
  );
}
