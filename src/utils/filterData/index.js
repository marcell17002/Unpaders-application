export const filterData = async (payload, category, value) => {
  const promise = new Promise((resolve, reject) => {
    const filteredData = payload.filter(e => e[`${category}`] === value);
    return resolve(filteredData);
  });
  return promise;
};
