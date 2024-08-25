import React from "react"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'

export default function BotaoCamera(){

    //Navegar entre as paginas
    const navigation = useNavigation()
    function openScreenCamera(){    //telaCamera
        navigation.navigate('TelaCamera')
    }
    //
    return(
        <TouchableOpacity id="botaoCamera" onPress={openScreenCamera} style={styles.botaoCamera}>
            <FontAwesome name='camera' style={styles.botaoCameraIcon}/>
        </TouchableOpacity>
    )
}