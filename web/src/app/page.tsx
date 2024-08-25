import dynamic from 'next/dynamic';

const FilteredCardList = dynamic(() => import('@/components/FilteredCardList'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <main className="bg-lightGray dark:bg-darkGray min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-navyBlue dark:text-lightGray text-center mb-8">
          Git Commands and Code Snippets
        </h1>

        <FilteredCardList />
      </div>
    </main>
  )
}

export default HomePage
