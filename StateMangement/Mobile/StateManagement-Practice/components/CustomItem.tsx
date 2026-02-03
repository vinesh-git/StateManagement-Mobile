import { View, Text } from 'react-native'
import React from 'react'

type item = {
    label : string,
    value : string
}

const CustomItem = (item : item) => {
    const {label,value} = item;
  return (
    <View style={{flexDirection : 'row'}}>
      <Text style ={{color : '#0579fdff',fontWeight : '800'}}>{label} : </Text>
      <Text>{value}</Text>
    </View>
  )
}

export default CustomItem