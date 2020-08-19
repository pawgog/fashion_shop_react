import React from 'react';
import Spinner from './Spinner';
import Error from './Error';
import { useFetchProducts } from './API';

function Dashboard() {
  const { loading, data, error } = useFetchProducts(
    'https://fashion-shop123.herokuapp.com/'
  );
  console.log(loading, data, error);

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
      <>
        {data.map((val) => {
          return (
            <div key={val.id}>
              <h4>{val.product_name}</h4>
              <p>{val.actual_price}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Dashboard;
