import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import {MotiView}  from 'moti'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

interface balanceProps {
    saldo: string,
    gastos: string
}

const Balance = ({saldo, gastos} : balanceProps) => {
    return (
        <MotiView
        from={{
            rotateX: '-100deg',
            opacity: 0
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1
        }}
        transition={{
            type: 'timing',
            duration: 800,
            delay: 900
        }}
        style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>-{gastos}</Text>
                </View>
            </View>
        </MotiView>

    )
}

export default Balance

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: '#b9b8b8'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {

    },
    currencySymbol: {
        color: '#b9b8b8',
        marginRight: 6
    },
    balance: {
    fontSize: 22,
    color: '#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c'
    }
});