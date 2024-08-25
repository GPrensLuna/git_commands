import React from 'react';

interface ButtonCopyProps {
  code: string;
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ code }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Código copiado al portapapeles");
    } catch (error) {
      console.error("Error al copiar el código: ", error);
    }
  };

  return (
    <button
      className="absolute top-2 right-2 bg-lightBlue text-white dark:text-darkGray p-2 rounded-md shadow-sm hover:bg-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue transition-colors"
      onClick={() => copyToClipboard(code)}
      aria-label="Copiar código al portapapeles"
    >
      Copiar
    </button>
  );
};
