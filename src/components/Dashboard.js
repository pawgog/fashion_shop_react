import React, { useState } from 'react';
import TopBar from './TopBar';
import ProductsList from './ProductsList';
import Spinner from './Spinner';
import Error from './Error';
import { useFetchProducts } from './API';

function Dashboard() {
  const [search, searchByTitle] = useState('');
  const [selectSort, changeSelectSort] = useState('');
  const [page, changePage] = useState(1);

  const { loading, data, countPages, error } = useFetchProducts(
    'https://fashion-shop123.herokuapp.com/',
    null,
    page,
    search,
    selectSort
  );

  const searchChange = (e) => {
    searchByTitle(e.target.value);
    changePage(1);
  };

  const handleChangePage = (e, value) => {
    changePage(value);
  };

  const handleChangeSelect = (e) => {
    changeSelectSort(e.target.value);
  };

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (error) {
    return (
      <div className="fashion-shop-body">
        <Error />
      </div>
    );
  } else {
    return (
      <div className="fashion-shop-body">
        <TopBar
          search={search}
          selectSort={selectSort}
          searchChangeFn={searchChange}
          handleChangeSelectFn={handleChangeSelect}
        />
        <ProductsList
          data={data}
          page={page}
          countPages={countPages}
          handleChangePageFn={handleChangePage}
        />
      </div>
    );
  }
}

export default Dashboard;
