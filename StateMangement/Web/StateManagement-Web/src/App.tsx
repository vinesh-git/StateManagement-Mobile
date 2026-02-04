import { useState } from 'react';
import './App.css'
import { type booksType } from './BooksData'
import Addbook from './components/Addbook';
import Modal from './components/Modal';
import useBookStore from './zustand/BookStore';
function App() {
  const books = useBookStore();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bookitem ,setbookitem] = useState<booksType | null>(null);
  const data = books.books;
  return (
    <div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100vh', padding: 50 }}>
        <div style={{ flex: '0 0 600px', width: '400px', overflowY: 'auto', padding: 20, minHeight: 0, height: '1000px', scrollbarWidth : 'none' }}>
          {data.map((book: booksType) => {
            return (
              <div style={{ width: '100%', backgroundColor: '#000000', boxShadow: '0px 4px 10px rgba(0,0,0,0,2', borderRadius: 20, margin: 20 }} key={book.id}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <div>
                    <p>{book.name}</p>
                    <p>{book.price}Rs</p>
                    <p>{book.author}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <button onClick={() => books.borrowbook(book.id)}>Delete</button>
                    <button onClick={()=>{setbookitem(book); setShowModal(true)}}>Edit</button>
                  </div>
                  
                </div>
              </div>
            )
          })}
          {bookitem && <Modal show={showModal} setvisibility={setShowModal} item={bookitem} />}
        </div>
        <div style={{ width: '800px', padding: 20, borderLeft: '1px solid #ccc' }}>
          <Addbook />
        </div>
      </div>
      
    </div>
  )
}

export default App
