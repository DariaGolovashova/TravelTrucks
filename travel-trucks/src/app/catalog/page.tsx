'use client';

import { useState } from 'react';
import { useCampers } from '@/src/lib/hooks/useCampers';
import Header from '@/src/components/Header/Header';
// import CamperCard from '@/src/components/CamperCard/CamperCard';
import Filters from '@/src/components/Filters/Filters';
import CamperList from '@/src/components/CamperList/CamperList';
import css from './pageCamper.module.css';

const emptyFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

const CatalogPage = () => {
  const [filters, setFilters] = useState(emptyFilters);

  const [searchFilters, setSearchFilters] = useState(emptyFilters);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCampers(searchFilters);

  const handleLocationChange = (value: string) => {
    setFilters((prev) => ({ ...prev, location: value }));
  };

  const handleFormChange = (value: string) => {
    setFilters((prev) => ({ ...prev, form: value }));
  };

  const handleEngineChange = (value: string) => {
    setFilters((prev) => ({ ...prev, engine: value }));
  };

  const handleTransmissionChange = (value: string) => {
    setFilters((prev) => ({ ...prev, transmission: value }));
  };

  const onSearch = () => {
    setSearchFilters(filters);
  };

  const resetFilters = () => {
    setFilters(emptyFilters);
    setSearchFilters(emptyFilters);
  };

  // const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
  //   useCampers(filters);

  if (isLoading) return <p>Loading...</p>;

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div>
      <Header />
      <div className={css.filters}>
        {/* filters */}
        <aside className={css.sidebar}>
          <Filters
            filters={filters}
            onLocation={handleLocationChange}
            onFormChange={handleFormChange}
            onEngineChange={handleEngineChange}
            onTransmissionChange={handleTransmissionChange}
            onSearch={onSearch}
            onResetFilters={resetFilters}
          />
        </aside>
        <main className={css.pageContent}>
          {data?.pages.map((page, i) => (
            <div key={i}>
              {/* <CamperList filters={filters} /> */}

              <CamperList
                campers={campers}
                // campers={data?.pages.flatMap((page) => page.campers) ?? []}
              />
            </div>
          ))}

          {hasNextPage && (
            <button
              className={css.byttonMore}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading...' : 'Load more'}
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default CatalogPage;
