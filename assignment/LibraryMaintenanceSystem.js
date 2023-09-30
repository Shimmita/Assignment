//QUIZ 4c)

//defining a libraryItem class as  the Base Class
class LibraryItem {
    constructor(title, itemID) {
        this.title = title;
        this.itemID = itemID;
        this.checkedOut = false;
    }

    checkOut() {
        if (!this.checkedOut) {
            this.checkedOut = true;
            return true;
        }
        return false;
    }

    returnItem() {
        if (this.checkedOut) {
            this.checkedOut = false;
            return true;
        }
        return false;
    }
}

class Book extends LibraryItem {
    constructor(title, itemID, author, numPages) {
        super(title, itemID);
        this.author = author;
        this.numPages = numPages;
    }
}

class DVD extends LibraryItem {
    constructor(title, itemID, director, duration) {
        super(title, itemID);
        this.director = director;
        this.duration = duration;
    }
}

class Student {
    constructor(studentID, name) {
        this.studentID = studentID;
        this.name = name;
        this.borrowedItems = [];
    }

    borrowItem(item) {
        if (item.checkOut()) {
            this.borrowedItems.push(item);
            return true;
        }
        return false;
    }

    returnItem(item) {
        const index = this.borrowedItems.indexOf(item);
        if (index !== -1) {
            this.borrowedItems.splice(index, 1);
            item.returnItem();
            return true;
        }
        return false;
    }
}

// Instantiation of Book and DVD class
const book = new Book("The Blossoms of The Savannah", "BID474", "J.D. Salinger Kayelo", 220);
const dvd = new DVD("Inception", "D45678", "Shimita Douglas", "180 minutes");

const student = new Student("SID98765", "James Einstein");

student.borrowItem(book);
student.borrowItem(dvd);

//logging the results on the console
console.log(`Borrowed Items by ${student.name}:`);
student.borrowedItems.forEach(item => {
    console.log(`${item.title} (Item ID: ${item.itemID})`);
});
