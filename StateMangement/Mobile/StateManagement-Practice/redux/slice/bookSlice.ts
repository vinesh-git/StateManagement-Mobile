import list, { booksType } from "@/data/BooksData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";

type books = {
  BooksList: booksType[];
};

const initialState: books = {
  BooksList: list,
};

const bookSlice = createSlice({
  initialState,
  name: "bookslice",
  reducers: {
    borrowBook: (state, action: PayloadAction<booksType>) => {
      const item = action.payload.id;
      const itemExist = state.BooksList.find((x) => x.id == item);
      if (itemExist)
        state.BooksList = state.BooksList.filter((book) => book.id != item);
      else console.log("books not available");
      return state;
    },
    addBook : (state,action:PayloadAction<booksType>)=>{
        const item = action.payload;
        const ids = state.BooksList.length + 1;
        state.BooksList.push({...item,id : ids});
        return state;
    },
    updateBook : (state,action:PayloadAction<booksType>)=>{
        const item = action.payload;
        const itemExist = state.BooksList.find(book => book.id===item.id);
        if(itemExist){
            console.log("item",itemExist);
            state.BooksList = state.BooksList.map((book:booksType) => book.id===item.id ? {...item} : book);
        }
        return state;
    }
  },
});

export const { borrowBook,addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
