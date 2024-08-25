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
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white p-2 text-center">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 py-2">
        {description}
      </p>
      <section className="grid gap-5 items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg p-2 min-h-28">
        {code && (
          <>
            <ButtonCopy code={code} />
            <pre className="whitespace-pre-wrap overflow-x-auto font-mono text-sm">
              {code}
            </pre>
          </>
        )}
        {img && (
          <img
            src={img}
            alt={title}
            className=" w-full rounded-lg object-cover"
          />
        )}
      </section>
    </article>
  );
};

export default CodeSnippet;
