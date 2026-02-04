import { useState } from "react"
import useBookStore from "../zustand/BookStore";
import './addbook.css';

export default function Addbook() {
    const [bookname,setbookname] = useState<string>("");
    const [price, setprice] = useState<number | undefined>();
    const [author,setauthor] = useState<string>("");
    const bookStore = useBookStore();
  return (
    <div style={{flex : 1,flexDirection : 'column',justifyContent : 'center',alignItems :'center'}}>
        <input className="input" type="text" value={bookname} onChange={(e) => setbookname(e.target.value)} placeholder="Book name" style={{borderBottomWidth : 1,color : '#ffffffff',fontSize : 30}}/><br></br>
        <input className="input" type="numeric" value={price} onChange={(e) => setprice(Number(e.target.value))} placeholder="Price" style={{marginTop : 20,marginBottom : 20 ,borderBottomWidth : 1,color : '#ffffffff',fontSize : 30}}/><br></br>
        <input className="input" type="text" value={author} onChange={(e) => setauthor(e.target.value)} placeholder="author name" style={{borderBottomWidth : 1,color : '#ffffffff',fontSize : 30}}/><br></br>
        <button style={{marginTop : 50}} onClick={()=>bookStore.addbook({name:bookname,price : price ?? 0,author : author,id : 0})}>Save</button>
    </div>
  )
}
