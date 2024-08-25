import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator, Group } = createNativeStackNavigator()

import TelaPrincipal from '../Pages/TelaPrincipal'
import TelaAlimentoSelecionado from '../Pages/TelaAlimentoSelecionado'
import TelaCamera from '../Pages/TelaCamera'
import TelaComparacao from '../Pages/TelaComparacao'

export function StackRoutes(){
  return (
    <Navigator>
      <Group  //opcoes para um conjunto de telas
      screenOptions={
        {
          headerTintColor:"#ffffff",
          headerTitleStyle:{
            fontWeight:"bold",
          },
          headerTitleAlign:"center"
        }
      }>
        <Screen name="TelaPrincipal" 
        component={TelaPrincipal} 
        options={
          {
            title:"Personal Nutri", 
            headerStyle:{
              backgroundColor:"#CD021B",
            }
          }
        }/>

        <Screen name="TelaAlimentoSelecionado" 
        component={TelaAlimentoSelecionado}
        options={
          {
            title:"", 
            headerStyle:{
              backgroundColor:"#CD021B"
            },
            headerTitleStyle:{
              fontSize:16
            }
          }
        }/>
        
        <Screen name="TelaCamera" 
        component={TelaCamera}
        options={
          {
            title:"", 
            headerStyle:{
              backgroundColor:"#000000"
            }
          }
        }/>

        <Screen name="TelaComparacao"
        component={TelaComparacao}
        options={
          {
            title:"Comparações",
          }
        }
        />
      </Group>
    </Navigator>
  )
}
