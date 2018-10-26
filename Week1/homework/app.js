'use strict';

 const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'harry_potter_philosophers_stone',
    'the_fiery_cross',
    'madame_bovary',
    'anna_karenina',
    'harry_potter_goblet_of_fire',
    'twilight',
    'outlander',
    'harry_potter_deathly_hallows',
    'harry_potter_and_the_half_blood_prince'
  ]; 
  /*  const divForBookList = document.createElement('div'); //creates the div
  const listOfBooks = document.createElement('ul'); // creates the unord list

function makeBookList(){ 
  document.getElementsByTagName('body')[0].appendChild(divForBookList); //add the div to the body tag
  divForBookList.appendChild(listOfBooks); //adds the ul to the div


  for (let i = 0; i < bookTitles.length; i++){ //for each book title
    const listItems = document.createElement('li'); // create a li for each of the items
    listItems.innerHTML = bookTitles[i]; //add each book title index item to the listItems
    listOfBooks.appendChild(listItems); //add the list items to the ul
  }

}
makeBookList() */


  const nameOfList = {
  'harry_potter_chamber_secrets': {
    'title': 'Harry Potter and the Chamber of Secrets',
        language: 'English',
        author: 'JK Rowling'
    },
  
  'harry_potter_philosophers_stone': {
    'title': 'Harry Potter and the Philosopher\s Stone',
        language: 'English',
        author: 'JK Rowling'
    },

  'the_fiery_cross': {
    'title': 'The Fiery Cross',
    language: 'English',
    author: 'Diana Galbaldon'   
    },

  'madame_bovary': {
    'title': 'Madame Bovary',
    language: 'French',
    author: 'Gustav Flaubert'
    },

  'anna_karenina': {
    'title': 'Anna Karenina',
    language: 'English',
    author: 'Leo Tolstoy'
    },

  'harry_potter_goblet_of_fire': {
    'title': 'Harry Potter and the Goblet of Fire',
    language: 'English',
    author: 'JK Rowling'
    }, 

  'twilight': {
    'title': 'Twlight',
    language: 'English',
    author: 'Stephanie Meyer'
    },

  'outlander': {
    'title': 'Outlander',
    language: 'English',
    author: 'Diana Galbadon'
    },  

  'harry_potter_the_deathly_hallows': {
    'title': 'Harry Potter and the Deathly Hallows',
    language: 'English',
    author: 'JK Rowling'
    },

  'harry_potter_and_the_halfblood_prince': {
    'title': 'Harry Potter and the Half Blood Prince',
    language: 'English',
    author: 'JK Rowling'
    }
}

var fieldset = document.createElement( 'fieldset' );  
fieldset.setAttribute( 'class' , 'nameOfList' );

var legend = document.createElement( 'legend' );    
legend.innerHTML = 'My Book List';  
fieldset.appendChild(legend);

function makeBookList(){
    const ul = document.createElement('ul'); // creates the unord list
    const myBooks = Object.keys(nameOfList)
    
    
    const div = document.createElement('div'); //creates the div
    
    const h1second = document.createElement('h1'); // creates language h1
    const h1third = document.createElement('h1'); // creates author h1
    document.getElementsByTagName('body')[0].appendChild(div); //add the div to the body tag
    div.appendChild(ul); //adds the ul to the div
    const img = document.createElement('img');
    
    
    
      for( let i = 0; i < myBooks.length; i++){
        const li =  document.createElement('li');
        const li2 = document.createElement('li');
        var bookImage = document.createElement( 'img' );
        const h2 = document.createElement('h2');
        const h2second = document.createElement('h2');
        const h1 = document.createElement('h1'); // creates title h1
        var bookId = myBooks[i];
       
        const myBook = nameOfList[bookId];
        h1.innerHTML = myBook.title;
        h2.innerHTML = ("author");
        li.innerHTML = myBook.language;
        h2second.innerHTML = ("language");
        li2.innerHTML = myBook.author;
        ul.appendChild(h1second);
       
        ul.appendChild(h1);
        ul.appendChild(h1third);
        ul.appendChild(h2second);
        ul.appendChild(li);
        ul.appendChild(h2);
        ul.appendChild(li2);
        div.append( bookImage );
          
    


var bookImage = document.createElement( 'img' );   //Create a img  for the book in the div and give it an attribute
    bookImage.src = 'img/' + bookTitles[ i ] + '.jpg';
    bookImage.setAttribute( 'alt' , bookTitles[ i ] );
    bookImage.setAttribute('height', '300px');
    bookImage.setAttribute('width', '200px');
    ul.append( bookImage );
  
}
fieldset.appendChild(div);  
document.body.append(fieldset );
};
makeBookList();
