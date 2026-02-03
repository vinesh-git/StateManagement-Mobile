import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { booksType } from '@/data/BooksData';
import list from '../data/BooksData'
import CustomItem from './CustomItem';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';

const BookStore = () => {
    const data = useSelector((state:any)=>state.BooksList);
    console.log("data is ",data)
    return (
        <View>
            <FlatList data={data}
                renderItem={({ item }: { item: booksType }) => <BookItem item={item}/>} 
                keyExtractor={(item)=> item.id.toString()}/>
        </View>
    )
}

export default BookStore