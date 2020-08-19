import React from 'react';
import { useFetchProducts } from './API';

function Dashboard() {
  const { loading, data, error } = useFetchProducts('http://localhost:4000/')
  console.log(loading, data, error);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Fetching failed!</div>
  } else {
    return (
      <>
        {data.map((val) => {
          return (
            <div key={val.id}>
              <h4>{val.product_name}</h4>
              <p>{val.actual_price}</p>
            </div>
          )
        })}
      </>
    );
  }

}

export default Dashboard;