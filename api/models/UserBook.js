const mongoose = require('mongoose');
const {Schema,model} = mongoose;



const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String },
    
    // Ajoutez d'autres champs spécifiques aux livres selon vos besoins
  });
  
  const userLibrarySchema = new Schema({
    books: { type: [bookSchema], default: [] },
  });
  
  const UserLibrary = model('UserLibrary', userLibrarySchema);
  
  module.exports = UserLibrary;