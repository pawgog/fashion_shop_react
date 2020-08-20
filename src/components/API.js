import { useState, useEffect } from 'react';
import { sortProducts, slicePaginationProducts } from './Functions';

export const useFetchProducts = (url, options, page, search, selectSort) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [countPages, setCountJsonPages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        const searchJson = json.filter((val) =>
          val.product_name.toLowerCase().includes(search.toLowerCase())
        );
        const sortJson =
          selectSort !== '' ? sortProducts(searchJson, selectSort) : searchJson;
        const { sliceJson, countPages } = slicePaginationProducts(
          searchJson,
          sortJson,
          page
        );
        setData(sliceJson);
        setCountJsonPages(countPages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options, page, selectSort, search]);

  return { loading, data, countPages, error };
};
