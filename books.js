// prva

let books = [
  {
    title: "lord of The Rings - part 1 The Felowsheep of the rings",
    author: "J R Tolken ",
    genre: "Adventure",
    pages: 438,
    price: 1200,
  },
  {
    title: "anna karenina",
    author: "Leo Tolstoj",
    genre: "Love",
    pages: 500,
    price: 1000,
  },
  {
    title: "the Adventures of Huckleberry Finn",
    author: "Mark Twain",
    genre: "Comedy",
    pages: 600,
    price: 900,
  },

  {
    title: "the Stories of Anton Chekhov",
    author: "Anton Chekhov",
    genre: "Biography",
    pages: 700,
    price: 1500,
  },
];
// Vtora funkcija
function filterBooksByGenre(genre) {
  return books.filter((book) => {
    return book.genre == genre;
  });
}
console.log(filterBooksByGenre("Comedy"));

// pure function
// Treta funkcija
// eden nacin
// function findAveragePages(books) {
//   let totalPages = books
//     .map((book) => {
//       return book.pages;
//     })
//     .reduce((agg, numOfPages) => {
//       // agg = agg + numOfPages
//       return (agg = agg + numOfPages);
//     }, 0);
//   return totalPages / books.length;

// Drug nacin pooptimalen

function findAveragePages(books) {
  let totalPages = books.reduce((agg, book) => {
    return (agg = agg + book.pages);
  }, 0);
  return totalPages / books.length;
}
console.log(findAveragePages(books));

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
// }
// console.log(findAveragePages(books));

const num = [2, 4, 9, 16];
newReduceNumber = num.reduce((acc, num) => {
  return (acc += num);
});
console.log(newReduceNumber);

//  Cetvrta funkcija -  Create a function named `findShortestBook` that returns the title of the shortest book.
//  - Use the `reduce` array method to find the book with the minimum number of pages.

function findShortestBook(books) {
  const shortesBook = books.reduce((acc, book) => {
    if (acc.pages < book.pages) {
      return acc;
    } else {
      return book;
    }

    // return [Math.min(page, acc[0])];
  }, books[0]);
  // return books.reduce((acc, page) => {
  //   return [Math.min(page, acc[0])];
  // });
  return shortesBook;
}
console.log(findShortestBook(books));

// function minMax(items) {
//   return items.reduce(
//     (accumulator, currentValue) => {
//       return [
//         Math.min(currentValue, accumulator[0]),
//         Math.max(currentValue, accumulator[1]),
//       ];
//     },
//     [Number.MAX_VALUE, Number.MIN_VALUE]
//   );
// }

// petta funkcija - - Create a function named `doesAuthorExist` that takes an author's name as a parameter and returns a boolean indicating whether any book by that author exists.
// eden nacin
// function doesAuthorExist() {
//   if (books.autor != books.autor) {
//     return true;
//   } else {
//     return false;
//   }
// }

// vtor nacin

function doesAuthorExist(autor, books) {
  // According to JavaScript empty rray is true, but emptyArray.langth is false
  const autorExist = books.filter((book) => {
    return book.autor == autor;
  });

  return Boolean(autorExist.length);
}

console.log(doesAuthorExist("Petre M Andreevski", books));

// let newNumbers = numbers
//   .filter((number) => {
//     return number > 2;
//   })

// sesta funkcija
// **Function 5: Display Book Information**
//    - Create a function named `displayBookInfo` that takes a book object as a parameter and logs its information in a readable format (e.g., "Title: {title}, Author: {author}, Pages: {pages}, Price: ${price}").
//    - Extra points for using string literals instead of using pure concatenation.

function displayBookInfo(book) {
  return `Title: ${book.title}, autor: ${book.autor}, Pages: ${book.pages}`;
}
console.log(displayBookInfo(books));

// ## Bonus Tasks:

// 1. **Sort Books by Pages:**

//    - Create a function named `sortBooksByPages` that sorts the books array based on the number of pages, from the shortest to the longest.
//    - Use the `sort` array method.

// ...1.spread and 2.rest
function sortBooksByPages(books) {
  const cloneBooks = [...books];
  cloneBooks.sort((a, b) => {
    return a.pages - b.pages;
  });
  return cloneBooks;
}
console.log(sortBooksByPages(books));

// 2. **Find Longest Book per Genre:**

//    - Create a function named `findLongestBookPerGenre` that, given a genre, returns the title of the longest book in that genre.
//    - Use a combination of `filter` and `reduce` array methods.

function findLongestBookPerGenre(books, genre) {
  const bookByGenre = books.filter((book) => {
    return book.genre == genre;
  });
  const longestBook = bookByGenre.reduce((acc, book) => {
    if (acc.pages > book.pages) {
      return acc;
    } else {
      return book;
    }
  }, books[0]);
  return longestBook.title;
}
console.log(findLongestBookPerGenre(books, "triler"));

// 3. **Add a New Book:**

//    - Create a function named `addNewBook` that takes a book object as a parameter and adds it to the `books` array.
//    - Ensure that the new book object has the required properties (title, author, genre, pages, price).

// function addNewBook(books, key, value) {
//   books[key] = value;
// }
// addNewBook(books, "title", "Kasni Porasni");
// addNewBook(books, "autor", "Petre M Andereevski");
// addNewBook(books, "genre", "Detski Pesni");
// addNewBook(books, "pages", 200);
// addNewBook(books, "price", 300);

const newBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: "Classic",
  pages: 256,
  price: 800,
};

function addNewBook(newBook) {
  books.push(newBook);
}
addNewBook(newBook);
console.log(books);

// if (
//   newBook.title &&
//   newBook.author &&
//   newBook.genre &&
//   newBook.pages &&
//   newBook.price
// ) {
//   books.push(newBook);
//   console.log("New book added successfully!");
// } else {
//   console.error(
//     "Error: The new book must have title, author, genre, pages, and price."
//   );
// }

// console.log(
//   books,
//   "Kasni Porasni",
//   "Petre M Andreevski",
//   "Detski Pesni",
//   200,
//   300
// );
console.log(books);
// let states = {};
// addProperty(states, "City", "Skopje");
// addProperty(states, "River", "Vardar");
// addProperty(states, "population", 1000000);
// console.log(states);

// 4. **Remove Books by Author:**

//    - Create a function named `removeBooksByAuthor` that takes an author's name as a parameter and removes all books by that author from the `books` array.
//    - Use the `filter` array method.

// function removeBooksByAuthor(books, autor) {
//   let removedBook = books.filter((book) => {
//     if (book.autor === autor) {
//       return remove;
//     }
//   });
//   return removedBook;
// }
function removeBooksByAuthor(authorName) {
  books = books.filter(
    (book) => book.author.toLowerCase() !== authorName.toLowerCase()
  );
}

removeBooksByAuthor("Mark Twain");

console.log(books);

// console.log(removeBooksByAuthor(books, "Petre M Andreevksi"));

// 5. **Capitalize Titles:**
//    - Create a function named `capitalizeTitles` that modifies the `title` property of each book in the array, capitalizing the first letter of each word.
//    - Use the `map` array method.
//    - For the purpose of this task, possible solution may include the `slice` array method. Please do your own investigation on it and try to include it in the solution.

// function capitalizeTitles(books) {
//   let capTttles = books.map((book) => {
//     return book.title.charAt(0).toUpperCase() + book.title.slice(1);
//   });

//   return capTttles;
// }

// console.log(capitalizeTitles(books));

function capitalizeTitles() {
  books = books.map((book) => ({
    ...book,
    title: book.title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }));
}

capitalizeTitles();

console.log(books[0]);

// const str = 'abc efg';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);

// function capitalizeFirstLetter(string) {
//   return string
//     .split(" ")
//     .map(function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log(capitalizeFirstLetter("hello world")); // "Hello World"

// function capitalizeTitles_1(books) {
//   let knigi = books.map((book) => book.title.split(" "));
//   let kniga = knigi.map((book) =>
//     book.map((book) => {
//       return book.title.charAt(0).toUpperCase() + book.title.slice(1);
//     })
//   );
//   return kniga;
// }
// console.log(capitalizeTitles_1(books));

// function capitalizeWords(arr) {
//   return arr.map((word) => {
//     const capitalizedFirst = word.charAt(0).toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
//   });

// const str = 'i have learned something new today';

// //split the above string into an array of strings
// //whenever a blank space is encountered

// const arr = str.split(" ");

// //loop through each element of the array and capitalize the first letter.

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

// //Join all the elements of the array back into a string
// //using a blankspace as a separator
// const str2 = arr.join(" ");
// console.log(str2);

// //Outptut: I Have Learned Something New Today
