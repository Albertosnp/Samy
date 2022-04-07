export const deleteDuplicateItemsInArray = (data) => {
  const set = new Set(data.map(JSON.stringify));
  let dataNoDuplicate = Array.from(set).map(JSON.parse);
  return dataNoDuplicate;
};
