import React, { useState, useEffect } from "react";
import { StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons'

const Actions = () => {


    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='addfolder' size={26} color='#000' />
                    <Text style={styles.labelButton}>Entradas</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='tagso' size={26} color='#000' />
                    <Text style={styles.labelButton}>Compras</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='creditcard' size={26} color='#000' />
                    <Text style={styles.labelButton}>Carteira</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='barcode' size={26} color='#000' />
                    <Text style={styles.labelButton}>Boletos</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='setting' size={26} color='#000' />
                    <Text style={styles.labelButton}>Conta</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Actions

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        marginStart: 14
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})