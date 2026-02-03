import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomItem from './CustomItem'
import { booksType } from '@/data/BooksData'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import { useDispatch } from 'react-redux'
import { borrowBook } from '@/redux/slice/bookSlice'
import CustomModal from './CustomModal'
import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

type BookItemType = {
    item: booksType,
    ondelete: (id: number) => void
}

const BookItem = ({ item }: { item: booksType }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    console.log(item.name);
    const dispatcher = useDispatch<any>();
    const swiperef = useRef<any>(null);
    const renderrightaction = () => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => dispatcher(borrowBook(item))} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width: 100, margin: 10, borderRadius: 10, height: 60 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '600', color: '#ffffff' }}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderleftaction = (progress: any, dragx: any) => {
        const style = useAnimatedStyle(() => {
            const translateX = interpolate(dragx.value, [0, 100], [-50, 0]);
            return { transform: [{ translateX }] }
        })
        return (
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { console.log('iam clicking'); return setShowModal(true) }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#3d29f0ff', width: 100, margin: 10, borderRadius: 10, height: 60 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '600', color: '#ffffff' }}>Edit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <ReanimatedSwipeable ref={swiperef} renderRightActions={renderrightaction}
                renderLeftActions={(progress, dragx) => renderleftaction(progress, dragx)}
                overshootLeft={false}
                overshootRight={false}
                leftThreshold={40}
                rightThreshold={40}
                onSwipeableOpen={(dir) => {
                    if (dir === 'right') {
                        setTimeout(() => {
                            swiperef.current.close();
                        }, 500);
                        setShowModal(true);
                    }
                    if (dir === 'left') {
                        swiperef.current.close();
                        dispatcher(borrowBook(item))
                    }
                }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20, marginHorizontal: 50, elevation: 6, borderRadius: 10, flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', padding: 20, gap: 10 }}>
                        <CustomItem label={'Book Name'} value={item.name} />
                        <CustomItem label={'Price'} value={item.price.toString()} />
                        <CustomItem label={'Author'} value={item.author} />
                    </View>
                </View>
            </ReanimatedSwipeable>
            <CustomModal item={item} showModal={showModal} setshowmodal={setShowModal} />
        </View>
    )
}

export default BookItem