class PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


    fix() {
    this.state = this.state * 1.5;
  }




   get state() {
    return this._state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, pagesCount, releaseDate) {
        super(name, pagesCount, releaseDate);
        this.type = "magazine";
    }
}



class Book extends PrintEditionItem {
    constructor(author, name, pagesCount, releaseDate) {
        super(name, pagesCount, releaseDate);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, pagesCount, releaseDate) {
        super(author, name, pagesCount, releaseDate);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, pagesCount, releaseDate) {
        super(author, name, pagesCount, releaseDate);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, pagesCount, releaseDate) {
        super(author, name, pagesCount, releaseDate);
        this.type = "detective";
    }   
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }


    addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }



    findBookBy(type, value){
        for(const book of this.books){
            if(book[type] === value) {
                return book;
            }
        } 

        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
              const book = this.books[i];
              this.books.splice(i, 1);
            return book;
    }
  }
  return null;
}
}

