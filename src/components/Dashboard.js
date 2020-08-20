import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Select } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Spinner from './Spinner';
import Error from './Error';
import { useFetchProducts } from './API';

function Dashboard() {
  const [search, searchByTitle] = useState('');
  const [page, changePage] = useState(1);
  const [selectSort, changeSelectSort] = useState('');
  const { loading, data, countPages, error } = useFetchProducts(
    'https://fashion-shop123.herokuapp.com/',
    null,
    page,
    search,
    selectSort
  );
  console.log(loading, data, error);

  const searchChange = (e) => {
    searchByTitle(e.target.value);
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
      <>
        <Error />
      </>
    );
  } else {
    return (
      <div className="fashion-shop-body">
        <TextField
          id="products"
          className="fashion-shop-input"
          placeholder="Search by products title"
          type="search"
          size="small"
          variant="outlined"
          value={search}
          onChange={searchChange}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       {/* <Search /> */}
          //     </InputAdornment>
          //   ),
          // }}
        />
        <FormControl
          className="fashion-shop-select"
          size="small"
          variant="outlined"
        >
          <InputLabel htmlFor="select-sort-data-label">Sort by:</InputLabel>
          <Select
            native
            id="select-sort-data-label"
            value={selectSort}
            onChange={handleChangeSelect}
            label="Sort by:"
          >
            <option aria-label="None" value="" />
            <option value="asc">Price: Low to High</option>
            <option value="desc">PriceL High to Low</option>
          </Select>
        </FormControl>
        <div className="fashion-shop-list">
          {data.map((val) => {
            return (
              <div key={val.id} className="fashion-shop-list__card">
                <h4>{val.product_name}</h4>
                <p>{val.actual_price}</p>
              </div>
            );
          })}
        </div>
        <Pagination count={countPages} onChange={handleChangePage} />
      </div>
    );
  }
}

export default Dashboard;
