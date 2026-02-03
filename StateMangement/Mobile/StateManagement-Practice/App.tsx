import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookStore from './components/BookStore'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './redux/store/bookStore'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddBook from './components/AddBook'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const BottomStack = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator >
            <Tab.Screen name='Books' component={BookStore} />
            <Tab.Screen name='Add Book' component={AddBook} />
        </Tab.Navigator>
    )
}

const App = () => {
    const stack = createNativeStackNavigator();
    return (
        <GestureHandlerRootView>
                <Provider store={store}>
                    <NavigationContainer>
                        <stack.Navigator screenOptions={{headerShown : false}}>
                            <stack.Screen name='bottom' component={BottomStack} />
                        </stack.Navigator>
                    </NavigationContainer>
                </Provider>
        </GestureHandlerRootView>
    )
}

export default App