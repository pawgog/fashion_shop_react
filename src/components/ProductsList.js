import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { changeCurrency } from './Functions';

const ProductsList = ({ data, countPages, handleChangePageFn }) => {
  return (
    <div className="fashion-shop-list">
    <div className="fashion-shop-list__cards">
      {data.map((val) => {
        return (
          <div key={val.id} className="fashion-shop-list__card">
            <div className="img-card">
              <img src={val.filename} alt={val.brand_name} />
            </div>
            <div className="content-card">
              <h4>{val.product_name}</h4>
              <p>Brand: {val.brand_name}</p>
              <p>{changeCurrency(val.actual_price)}</p>
            </div>
          </div>
        );
      })}
    </div>
    <Pagination count={countPages} onChange={handleChangePageFn} />
  </div>
  )
}

export default ProductsList;