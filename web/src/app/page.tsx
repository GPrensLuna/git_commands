import dynamic from 'next/dynamic';
import Link from 'next/link';

const FilteredCardList = dynamic(() => import('@/components/FilteredCardList'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <main className="bg-lightGray dark:bg-darkGray min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-navyBlue dark:text-lightGray text-center mb-8 uppercase">
          Git Commands and Code Snippets
        </h1>
        <section className='w-full grid grid-cols-2 items-center justify-center gap-5 '>
          <Link
            className=" bg-lightBlue text-white dark:text-darkGray p-1 rounded-md shadow-sm hover:bg-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue transition-colors text-sm font-bold uppercase text-center px-8"
            href={"https://git-scm.com/download/win"}
            target='_blank'>
            Descargar git
          </Link>
          <Link
            className=" bg-lightBlue text-white dark:text-darkGray p-1 rounded-md shadow-sm hover:bg-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue transition-colors text-sm font-bold uppercase text-center px-8"
            href={"https://git-scm.com/book/en/v2"}
            target='_blank'>
            Descargar Libro de git
          </Link>
          <Link
            className=" bg-lightBlue text-white dark:text-darkGray p-1 rounded-md shadow-sm hover:bg-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue transition-colors text-sm font-bold uppercase text-center px-8"
            href={"https://github.com/GPrensLuna/git_commands"}
            target='_blank'>
            Repositorio de la web GITHUB
          </Link>
        </section>
        <FilteredCardList />
      </div>
    </main>
  )
}

export default HomePage
