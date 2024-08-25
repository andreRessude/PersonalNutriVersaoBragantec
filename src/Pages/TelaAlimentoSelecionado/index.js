import React, { useState } from "react"
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from "./style"

export default function TelaAlimentoSelecionado(){

    const route = useRoute();
    const { pratos } = route.params;

    const [open, setOpen] = useState(false);

    return(
        <View>
            <ScrollView>
                <View style={styles.telaAlimentoSelecionado}>
                    
                    <Image
                    source={{uri:pratos.imagem}}
                    style={styles.imagemPrato}
                    />
                    <View style={styles.container}>
                        <Text style={styles.titulo}> {pratos.nome} </Text>
                        <Text style={styles.textPorcao}> --- porção: 300g --- </Text>
                    </View>

                    <View style={styles.container}>     
                        <Text style={styles.tituloTabela}> Ingredientes: </Text>

                        {pratos.nome === 'Estrogonofe de Frango' &&(
                            <View style={styles.tabela}>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Peito de Frango</Text>
                                <Text style={styles.textTabela}> 160g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Cebola </Text>
                                <Text style={styles.textTabela}> 21g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Cogumelo Paris in Natura </Text>
                                <Text style={styles.textTabela}> 39g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Creme de Leite</Text>
                                <Text style={styles.textTabela}> 61g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Catchup </Text>
                                <Text style={styles.textTabela}> 13g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Mostarda </Text>
                                <Text style={styles.textTabela}> 4g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Óleo </Text>
                                <Text style={styles.textTabela}> 2g </Text>
                            </View>
                        </View>
                        ) || pratos.nome === 'Feijoada' &&(
                            <View style={styles.tabela}>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Feijão preto</Text>
                                    <Text style={styles.textTabela}> 113g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Orelha de Porco</Text>
                                    <Text style={styles.textTabela}> 13g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Rabo de Porco</Text>
                                    <Text style={styles.textTabela}> 13g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Pé de Porco</Text>
                                    <Text style={styles.textTabela}> 13g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Lombo de Porco</Text>
                                    <Text style={styles.textTabela}> 7g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Costelinha</Text>
                                    <Text style={styles.textTabela}> 13g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Paio</Text>
                                    <Text style={styles.textTabela}> 13g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Linguiça Portuguesa </Text>
                                    <Text style={styles.textTabela}> 20g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Carne Seca </Text>
                                    <Text style={styles.textTabela}> 5g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Cebola </Text>
                                    <Text style={styles.textTabela}> 30g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Alho </Text>
                                    <Text style={styles.textTabela}> 1g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Bacon defumado </Text>
                                    <Text style={styles.textTabela}> 33g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Óleo </Text>
                                    <Text style={styles.textTabela}> 6g </Text>
                                </View>
                            </View>
                        ) || pratos.nome === 'Macarrão com Molho de Tomate' &&(
                            <View style={styles.tabela}>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Macarrão </Text>
                                    <Text style={styles.textTabela}> 250g </Text>
                                </View>
                                <View style={styles.linhaTabela}>
                                    <Text style={styles.textTabela}> Molho de tomate </Text>
                                    <Text style={styles.textTabela}> 50g </Text>
                                </View>
                        </View>
                        )}

                    </View>
                   
                    
                    <View style={styles.container}>      
                        <Text style={styles.tituloTabela}> Valores Nutricionais: </Text>
                        <View style={styles.tabela}>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Calorias: </Text>
                                <Text style={styles.textTabela}> {pratos.calorias}kcal </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Lipídios: </Text>
                                <Text style={styles.textTabela}> {pratos.lipidios}g </Text>
                            </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Fibras: </Text>
                                <Text style={styles.textTabela}> {pratos.fibras}g </Text>
                           </View>
                            <View style={styles.linhaTabela}>
                                <Text style={styles.textTabela}> Carga Glicêmica: </Text>
                                <Text style={styles.textTabela}> {pratos.indiceGlicemico} </Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* botao recomendacao suadavel */}
                    <View style={styles.container}>
                        <Text style={styles.textoContainerBotaoRecomendacao}> Recomendação mais saudável </Text>
                        <TouchableOpacity style={styles.botaoRecomendacao} onPress={() => setOpen(true)}>
                            <Text style={styles.textoBotaoRecomendacao}> Abrir </Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* recomendacao */}
                    <Modal animationType="slide" transparent={true} visible={open}>
                        {pratos.id === 1 &&(
                            <View style={styles.contentModal}>
                                <View style={styles.containerTextModal}>
                                    <Text style={styles.textModal}> Recomendação do ESTROGONOFE DE FRANGO</Text>
                                </View>
                                <TouchableOpacity style={styles.closeButtonModal} onPress={() => setOpen(false)}>
                                    <Text style={styles.textCloseButtonModal}>Fechar</Text>
                                </TouchableOpacity>
                            </View> 
                        ) || pratos.id === 2 &&(
                            <View style={styles.contentModal}>
                                <View style={styles.containerTextModal}>
                                    <Text style={styles.textModal}> Recomendação da FEIJOADA</Text>
                                </View>
                                <TouchableOpacity style={styles.closeButtonModal} onPress={() => setOpen(false)}>
                                    <Text style={styles.textCloseButtonModal}>Fechar</Text>
                                </TouchableOpacity>
                            </View> 
                        ) || pratos.id === 3 &&(
                            <View style={styles.contentModal}>
                            <View style={styles.containerTextModal}>
                                <Text style={styles.textModal}> Recomendação do MACARRÃO</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButtonModal} onPress={() => setOpen(false)}>
                                <Text style={styles.textCloseButtonModal}>Fechar</Text>
                            </TouchableOpacity>
                        </View> 
 
                        )}
                    </Modal>
                </View>
            </ScrollView>
        </View>
    )
}    
