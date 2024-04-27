import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Currently() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
  
   async function displayBooks(){
       try {
       const response = await axios.get('http://localhost:3000/search-books/politics')
       setBooks(response.data.items.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching books:', error);  
      }
    }
    displayBooks()
}, []);


//   useEffect(() => {
//     // Fonction pour récupérer les données des livres depuis l'API Google Books
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=tech'); // Remplacez 'programming' par le terme de recherche souhaité
//         setBooks(response.data.items.slice(0, 3));
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };
    
//     // Appel de la fonction pour récupérer les données des livres
//     fetchBooks();
//   }, []); // Le tableau vide signifie que useEffect sera exécuté une seule fois après le rendu initial

  const handleSubmitTermChange = async (i,e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    try{
        const newbook=[...books]
        
        //console.log(i,newbook)
        // setBooks()
        //console.log(newbook)
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${e.target[0].value}`)
        if(response.data){
        const findBook = response.data.items[0]
        newbook.splice(i,1,findBook)
        setBooks(newbook)
        const fetchQuery = await axios.post('http://localhost:3000/add-booksusers', newbook)
        }else{
            console.error("pb monet ")
        }
           
    }catch (error){
        console.error(error)
    }
  };

  return (
    <section className="third-section">
      <article className="book-carrousel">
        {books.map((book,i) => (
          <article key={i}>
            <img className="bookcover" src={book.volumeInfo.imageLinks.thumbnail} alt={`Cover of ${book.volumeInfo.title}`} />
            <p className="title">{book.volumeInfo.title}</p>
            <p className="author">{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
            <p>Rating: {book.volumeInfo.averageRating || 'N/A'}</p>
            <form onSubmit={(e)=>handleSubmitTermChange(i,e)}>
              <label htmlFor={`searchTerm-${book.id}`}>Search Book:</label>
              <input
                type="text"
                id={`searchTerm-${book.id}`}
                />
                <button type="submit">Submit</button>
            </form>
          </article>
        ))}
      </article>
    </section>
  );
}


