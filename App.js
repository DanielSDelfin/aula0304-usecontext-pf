import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaFormulario from './src/telas/TelaFormulario';
import TelaLista from './src/telas/TelaLista';
import { Button, Icon, Text } from "@rneui/base";
import { ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='TelaList'
          screenOptions={{
            headerStyle:{
              backgroundColor:'green',

            }
          }}
        >
          <Stack.Screen
          name = 'TelaList'
          component={TelaLista}
          options={({navigation})=>{
            return{
              title:'Tela Listagem',
              headerRight:()=>(
                <Button
                type='clear' 
                  icon = {<Icon name = 'add' color='white' size={25}/>}
                  onPress={()=>navigation.navigate('TelaForm')}
                />
              )
            }
          }}
          />
          <Stack.Screen
          name = 'TelaForm'
          component={TelaFormulario}
          options={{title:"TelaFormulario"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
