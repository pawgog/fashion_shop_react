export const sortProducts = (json, selectSort) => {
  return selectSort === 'asc'
    ? json.sort((a, b) => a.actual_price - b.actual_price)
    : json.sort((a, b) => b.actual_price - a.actual_price);
};

export const slicePaginationProducts = (json, sortJson, page) => {
  const sliceJson = sortJson.slice(page * 12 - 12, page * 12);
  const countPages = Math.ceil(json.length / 12);
  return { sliceJson, countPages };
};

export const changeCurrency = (price) => {
  return `$${price.slice(0, -1)}`;
};
