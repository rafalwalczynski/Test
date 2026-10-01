import { useState } from 'react'
import './App.css'

function App() {
  const [tytul, setTitle] = useState('');
  const [autor, setAuthor] = useState('');
  const [gatunek, setGenre] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tytuł: ${tytul}; autor: ${autor}; gatunek: ${gatunek}`);
     };
   return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookTitle">Tytuł książki</label>
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            value={tytul}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookAuthor">Autor książki</label>
          <input
            type="text"
            className="form-control"
            id="bookAuthor"
            value={autor}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookGenre">Gatunek</label>
          <select
            className="form-control"
            id="bookGenre"
            value={gatunek}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default App;
