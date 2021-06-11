export const sortData = async (data, type) => {
  const sortedData = await data.sort((a, b) => {
    return new Date(b[type]) - new Date(a[type]);
  });
  return sortedData;
};
