/* eslint-disable @next/next/no-img-element */
import { ButtonCopy } from "./ButtonCopy";

interface CodeSnippetProps {
  title: string;
  description: string;
  code?: string;
  img?: string;
}

const CodeSnippet = ({ title, description, code, img }: CodeSnippetProps) => {
  return (
    <div className="bg-lightGray dark:bg-charcoalGray p-6 rounded-lg shadow-md pt-8">
      <h2 className="text-2xl font-bold text-navyBlue dark:text-lightGray">{title}</h2>
      <p className="pt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="relative bg-slateGray dark:bg-darkGray text-white p-4 rounded-md mt-4">
        {code && (
          <>
            <pre className="whitespace-pre-wrap overflow-x-auto font-mono">{code}</pre>
            <ButtonCopy code={code} />
          </>
        )}
        {img && (
          <img
            src={img}
            alt={title}
            className="pt-4 w-full rounded-md shadow-md object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default CodeSnippet;

