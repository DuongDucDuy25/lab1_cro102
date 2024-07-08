import { View, Text, Image } from 'react-native'
import React from 'react'
import st from './style'

const index = ({uri_img} : any) => {
  return (
    <View>
      <Image source={{uri : uri_img}} style = {st.img}/>
    </View>
  )
}

export default index