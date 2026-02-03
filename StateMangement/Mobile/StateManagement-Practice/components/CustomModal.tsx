import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { booksType } from '@/data/BooksData'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '@/redux/slice/bookSlice';

interface ModalProps {
    item: booksType,
    showModal: boolean,
    setshowmodal: (flag: boolean) => void
}

const CustomModal = ({ item, showModal, setshowmodal }: ModalProps) => {
    const { id, name, price, author } = item;
    console.log(name,price)
    const [bookname, setbookname] = useState<string>(item.name);
    const [price1, setprice] = useState<number>(price);
    const [author1, setauthor] = useState<string>(author);
    const dispathcer = useDispatch<any>();
    console.log("is modal visible", showModal);
    useEffect(()=>{
        setbookname(name);
        setprice(price);
        setauthor(author);
    },[item])
    return (
        <Modal visible={showModal}
            animationType='slide'
            transparent
            onRequestClose={() => setshowmodal(!showModal)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,5' }}>
                
                <View style={{ height: '50%', width: '80%', borderRadius: 10, backgroundColor: '#fff', padding: 20 }}>
                    <Text style={{fontWeight : '800',fontSize : 30}}>Edit book</Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <TextInput style={style.text}  placeholderTextColor={'#96a19bff'} placeholder='Book name' value={bookname} onChangeText={(val) => setbookname(val)} />
                        <TextInput style={style.text} placeholderTextColor={'#96a19bff'} placeholder='price' value={price1.toString()} onChangeText={(val) => setprice(Number(val))} />
                        <TextInput style={style.text} placeholderTextColor={'#96a19bff'} placeholder='author' value={author1} onChangeText={(val) => setauthor(val)} />

                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#155f43ff', padding: 20, borderRadius: 30}} onPress={() =>{setshowmodal(false); return dispathcer(updateBook({ id: item.id, name: bookname, price :  price1, author : author1 }))}}>
                        <Text style={{ color: '#ffffff' ,alignSelf : 'center'}}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal


const style = StyleSheet.create({
    text : { width: 300, borderBottomWidth: 1, fontSize: 16, borderBottomColor: '#6b6868ff' }
})