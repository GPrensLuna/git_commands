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
      className=" bg-lightBlue text-white dark:text-darkGray p-1 rounded-md shadow-sm hover:bg-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue transition-colors text-sm font-bold uppercase "
      onClick={() => copyToClipboard(code)}
      aria-label="Copiar código al portapapeles"
    >
      Copiar código
    </button>
  );
};
