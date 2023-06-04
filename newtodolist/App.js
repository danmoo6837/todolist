import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import TodoList from './Screen/TodoList'
import Help from './Screen/Help'
import Header from './components/Header'

const Drawer = createDrawerNavigator()

export default function App() {
  return(

    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName = "Home"
        drawerPosition = "right"
        drawerStyle = {{
          backgroundColor:"#aaffd0",
          width:200
        }}
        drawerContentOptions = {{
          activeTiniColor:'green',
          activeBackgroundColor:'#fffff1'
        }}
      >
      
        <Drawer.Screen name = "TodoList" component = {TodoList}
          options={{
            headerShown: true,
            headerTitle: <Header name="TodoList"/>,
            headerStyle: styles.header
          }}
        />
        <Drawer.Screen name = "Priority guide" component = {Help}
        options={{
            headerShown: true,
            headerTitle: <Header name="Help"/>,
            headerStyle: styles.header
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
 );
}

const styles = {
  header: {
    height:75,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'#00e4d0',
    shadowColor:'#000',
    elevation:25
  }
};
