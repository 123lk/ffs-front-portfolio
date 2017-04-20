export function normalizeArrayById (arr) {
  return arr.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}