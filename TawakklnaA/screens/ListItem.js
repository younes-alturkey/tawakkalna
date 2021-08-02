import React from 'react'
import { Image } from 'react-native'
import { View, Text,StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ListItem(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemContainer}>
                <Ionicons name={'chevron-down'} size={20} color="grey"></Ionicons>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textStyle}>{props.name}</Text>
                    <Image source={props.icon} style={styles.iconStyle}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#1c1c1e', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        borderBottomWidth:0.5,
        borderColor:'#4d4c4e', 
        padding: 15,
        alignItems: 'center'
  },
  iconStyle:{
    width:20,
    height:20
  },
  textStyle:{
    color: 'white', 
    paddingRight: 10
  }
})