import { useEffect, useState } from "react";
import type { booksType } from "../BooksData"
import useBookStore from "../zustand/BookStore";
import './addbook.css'


interface ModalProps {
    show: boolean,
    setvisibility: (flag: boolean) => void,
    item: booksType | null
}

function Modal(book: ModalProps) {
    const [bookname, setbookname] = useState<string>("");
    const [price, setprice] = useState<number>(0.00);
    const [author, setauthor] = useState<string>("");
    const bookStore = useBookStore();
    const { show, setvisibility, item } = book;
    
    

    useEffect(() => {
        if (item) {
            setbookname(item.name);
            setprice(item.price);
            setauthor(item.author);
        }
        else {
            setbookname("");
            setprice(0);
            setauthor('');
        }
    }, [item,show])

    const handleUpdate = ()=>{
        if(!item) return ;
        const newbook = { name: bookname, price: price, author: author, id: item?.id }
        bookStore.updatebook(newbook);
        setvisibility(false);
        
    }
    if(!show) return null;
    return (
        <div style={overlay} onClick={() => setvisibility(false)}>
            <div style={modal} onClick={(e)=> e.stopPropagation()}>
                <input style={input} type="text" value={bookname} onChange={(e) => setbookname(e.target.value)} placeholder="Book name"   /><br></br>
                <input style={input} type="numeric" value={price} onChange={(e) => setprice(Number(e.target.value))} placeholder="Price"   /><br></br>
                <input style={input}  type="text" value={author} onChange={(e) => setauthor(e.target.value)} placeholder="author name"  /><br></br>
                <button  style={{ marginTop: 50 }} onClick={()=>handleUpdate()}>Save</button>
            </div>
        </div>
    )
}

export default Modal


const overlay : React.CSSProperties = {
    position : 'fixed',
    top : 0,
    left : 0,
    width : '100vw',
    height : '100vh',
    backgroundColor : 'rgba(0,0,0,0,5)',
    display : "flex",
    justifyContent : 'center',
    alignItems : 'center',
    zIndex : 1000
};
const modal : React.CSSProperties = {
    backgroundColor : '#fff',
    padding : 24,
    borderRadius : 10,
    width : 400,
    display : 'flex',
    flexDirection : 'column',
    gap : 12
};

const input : React.CSSProperties={
    padding : 10,
    borderBottomWidth: 1, color: '#000', fontSize: 30 ,backgroundColor : '#fff'
}