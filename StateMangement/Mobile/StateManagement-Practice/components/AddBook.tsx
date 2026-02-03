import { View, TextInput, TouchableOpacity,Text } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '@/redux/slice/bookSlice';

const AddBook = () => {
    const [bookname, setbookname] = useState<string>("");
    const [price, setprice] = useState<number>(0.00);
    const [author, setauthor] = useState<string>("");
    const dispathcer = useDispatch<any>();
    return (
        <View style={{flex : 1,gap:12,backgroundColor : '#ffffff',margin : 20,justifyContent : 'center',alignItems : 'center',marginVertical : '50%',elevation : 3}}>
            <View style ={{flex : 1,justifyContent : 'center',alignItems : 'flex-start'}}>
                <TextInput style={{width : 300,borderBottomWidth : 1,fontSize : 16,borderBottomColor : '#6b6868ff'}} placeholderTextColor={'#96a19bff'} placeholder='Book name' value={bookname} onChangeText={(val) => setbookname(val)} />
                <TextInput style={{width : 300,borderBottomWidth : 1,fontSize : 16,borderBottomColor : '#6b6868ff'}} placeholderTextColor={'#96a19bff'} placeholder='price' value={price.toString()} onChangeText={(val) => setprice(Number(val))} />
                <TextInput style={{width : 300,borderBottomWidth : 1,fontSize : 16,borderBottomColor : '#6b6868ff'}} placeholderTextColor={'#96a19bff'} placeholder='author' value={author} onChangeText={(val) => setauthor(val)} />
                
            </View>
            <TouchableOpacity style={{backgroundColor : '#155f43ff',padding : 20,borderRadius : 30}} onPress={()=>dispathcer(addBook({id : 0,name : bookname,price,author}))}>
                    <Text style={{color : '#ffffff'}}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddBook