import {Button, Text, View, Image} from 'react-native'

const Help = (props) => {
  return(
    <View>
      <Image
        style = {{width:340, height:270}}
        source = {require('../assets/Priority.png')}
      />
      <Text> 시간관리 매트릭스를 참고하여 우선순위를 매겨보세요.</Text>
    </View>
  )
}

export default Help