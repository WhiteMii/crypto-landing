export const getPageCount = (totalPages: number, limit: number) => {
  return Math.ceil(totalPages / limit);
};

export const getPagesArray = (totalPages: number) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
