export const sortProducts = (json, selectSort) => {
  return selectSort === 'asc' ? json.sort((a, b) => a.actual_price - b.actual_price) : json.sort((a, b) => b.actual_price - a.actual_price);
}

export const slicePaginationProducts = (json, sortJson, page) => {
  const sliceJson = sortJson.slice((page * 10) - 10, (page * 10))
  const countPages = Math.ceil(json.length / 10)
  return { sliceJson, countPages };
}