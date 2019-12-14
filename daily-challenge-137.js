let dailyChallenge = (books, codes) => {
  let bookCodes = codes.reduce((result, code) => {
    books.forEach((book) => {
      if (book[0] === code) {
        result[code] = (result[code] || 0) + (+book.split(' ')[1]);
      } else {
        result[code] = (result[code] || 0) + 0;
      }
    });
    return result;
  }, {});
  if (Object.keys(bookCodes).length === 0) {
    return '';
  } else {
    return bookCodes;
  }
}

const books = ['ABART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
const codes = ['A', 'B', 'C', 'W'];
let result = dailyChallenge(books, codes);
console.log(result);
