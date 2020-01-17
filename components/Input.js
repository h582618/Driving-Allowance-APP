import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const inputBar = (props) => {
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.text}> Start </Text>
            <TextInput
                style={styles.input}
                onChangeText={(kmInput1) => props.textChange(kmInput1)}
                value={props.kmInput1}

                />
            <Text style={styles.text}> Slutt </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(kmInput2) => props.textChange2(kmInput2)}
                    value={props.kmInput2}

                />

                <TextInput
                style={styles.input}

                />

        </View>
    )
}

const styles = StyleSheet.create ({

    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        shadowOffset: {width:0, height:3},
        shadowColor: '#171717',
        shadowOpacity:.1,
        paddingTop: 10
    },
    input : {
        backgroundColor: '#F3F3F3',
        flex:1,
        fontSize:30,
        height: 50
    },

    text: {
        color:'black',
        fontSize:15,
        fontWeight:'900',
        textTransform:'uppercase',
        padding:15,
        paddingTop:30,
    }
});

export default inputBar;
