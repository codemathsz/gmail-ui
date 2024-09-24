import '@/styles/global.css'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
/* 
GestureHandlerRootView => lidar com gesto 
Slot => pega todas as rotas dentro de app e repassa para layout
*/
export default function Layout(){
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Slot />
    </GestureHandlerRootView>
  )
}