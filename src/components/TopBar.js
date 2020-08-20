import React from 'react';
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  InputAdornment,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const TopBar = ({ search, selectSort, searchChangeFn, handleChangeSelectFn }) => {
  return (
    <div className="fashion-shop-topbar">
    <TextField
      id="products"
      className="fashion-shop-input"
      placeholder="Search by products title"
      type="search"
      size="small"
      variant="outlined"
      value={search}
      onChange={searchChangeFn}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
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
        onChange={handleChangeSelectFn}
        label="Sort by:"
      >
        <option aria-label="None" value="" />
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </FormControl>
  </div>
  )
}

export default TopBar;