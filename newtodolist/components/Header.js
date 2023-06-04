import {View, Text, Button,TouchableOpacity, StyleSheet} from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
  },
});

export default Header