import { create } from "zustand";
import type { booksType } from "../BooksData";
import list from "../BooksData";

type BookState = {
    books : booksType[],
    borrowbook : (id : number) => void;
    addbook : (book : booksType) => void;
    updatebook : (book : booksType) => void;
}

const useBookStore = create<BookState>((set,get)=>({
    books : list,
    borrowbook : (id : number)=>{
        set(() => ({
            books : get().books.filter(b => b.id!==id)
        }));
    },
    addbook : (book : booksType)=>{
        const id = get().books.length+1;
        book = {...book,id : id};
        set((state)=>({
            books : [...state.books,book]
        }))
    },
    updatebook : (book : booksType)=>{
        const item = get().books.find(b => b.id===book.id);
        if(item)
            set(()=>({
                books : get().books.map(b => b.id===book.id ? book : b)
            }))
    }
}))

export default useBookStore;