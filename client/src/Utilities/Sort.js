export const sortFunction = (sortBy, Item) => {
  const compareFunction = (a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  };
  return Item.sort(compareFunction);
};
