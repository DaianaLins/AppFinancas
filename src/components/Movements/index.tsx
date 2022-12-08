import React, { useState, useEffect } from "react";
import { StyleSheet, Text, StatusBar, TouchableOpacity, View } from "react-native";
import { MotiView, AnimatePresence, MotiText } from 'moti'

export interface IMovementsProps {
    id?: number | string;
    label: string;
    value: string;
    date: string;
    type?: number | string; // despesas
}



type MovementsProps = {
    data: IMovementsProps
}

const Movements = ({ data }: MovementsProps) => {
    const [show, setShow] = useState(false)

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
            <Text style={styles.date}>{data?.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label} >{data?.label}</Text>
                {show ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type: 'timing',
                                duration: 500
                            }}
                            style={data?.type === 1 ? styles?.value : styles?.espenses} >
                            {data?.type === 1 ? `R$ ${data?.value}` : `R$ -${data?.value}`}
                        </MotiText>
                    </AnimatePresence>
                )
                    :
                    (
                        <AnimatePresence exitBeforeEnter>
                            <MotiView
                            from={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                type: 'timing',
                            }}
                            style={styles.skeleton}>

                            </MotiView>
                        </AnimatePresence>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default Movements

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8

    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: 'bold'
    },
    espenses: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})