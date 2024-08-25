import React from "react"
import { View } from 'react-native'

import styles from "./style"
import BarraPesquisa from "../../Components/BarraPesquisa/barraPesquisa"
import BotaoCamera from "../../Components/BotaoCamera/botaoCamera"

export default function TelaPrincipal(){
    return(
        <View style={styles.tela}>
            <BarraPesquisa/>
            <BotaoCamera/>
        </View>
    )
}
