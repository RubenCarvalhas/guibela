"use client";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
}

export default function ScrollButton({ targetId, children }: ScrollButtonProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
