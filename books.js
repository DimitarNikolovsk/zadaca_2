const books = [
  {
    title: "Lord of The Rings - part 1 The Felowsheep of the rings",
    autor: "J R Tolken ",
    genre: "Adventure",
    pages: 438,
    price: 1200,
  },
  {
    title: "Anna Karenina",
    autor: "Leo Tolstoj ",
    genre: "Love",
    pages: 500,
    price: 1000,
  },
  {
    title: "The Adventures of Huckleberry Finn",
    autor: " Mark Twain",
    genre: "Comedy",
    pages: 600,
    price: 900,
  },
  {
    title: "Anna Karenina",
    autor: "Leo Tolstoj ",
    genre: "Love",
    pages: 500,
    price: 1000,
  },
  {
    title: "The Stories of Anton Chekhov",
    autor: "Anton Chekhov ",
    genre: "Biography",
    pages: 700,
    price: 1500,
  },
];

function filterBooksByGenre(genre) {
  return books.filter((book) => {
    return book.genre == genre;
  });
}
console.log(filterBooksByGenre("Comedy"));

// pure function

function findAveragePages(books) {
  let totalPages = books
    .map((book) => {
      return book.pages;
    })
    .reduce((agg, numOfPages) => {
      // agg = agg + numOfPages
      return (agg = agg + numOfPages);
    }, 0);
  return totalPages / books.length;

  //   let totalPages = 0;
  //   for (let index = 0; index < pages.length; index++) {
  //     const element = pages[index];
  //     totalPages += element;
  //   }
  //   console.log(pages);
  //   //   let pages = 0;
  //   //   for (let index = 0; index < books.length; index++) {
  //   //     const element = books[index];
  //   //     pages += element.pages;
  //   //   }
  //   return pages / books.length;
}
console.log(findAveragePages(books));

const num = [2, 4, 9, 16];
newReduceNumber = num.reduce((acc, num) => {
  return (acc += num);
});
console.log(newReduceNumber);
