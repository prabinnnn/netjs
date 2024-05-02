const page = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const limit = 5;
const start = 1;
const pagination = (l, s, currentPage) => {
  const startIndex = (s - 1) * l;
  const endIndex = startIndex + l;
  const currentPage = page.slice(startIndex, endIndex);
  return currentPage;
};
console.log(pagination(limit, start));
