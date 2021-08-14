import React from 'react';
import {StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

export default class TurItem extends React.Component  {
    constructor(props){
        super(props);
    }

    render() {
        const turItem = this.props.turItem;

        return (
            <TouchableOpacity
                style={styles.turItem}

            >
                <Text style={(turItem.done) ? styles.text : styles.text1}>
                    { turItem.title }, {turItem.km} km, {'\n'}{turItem.bomP} bomstasjoner,
                    {'    '}
                    {(turItem.km *4 + parseInt(turItem.bomP)*22)} kr
                </Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    turItem: {
        width:'100%',
        height:100,
        borderBottomColor:'#DDD',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
    },
    text: {
        color:'black',
        fontSize:20,
        fontWeight:'900',
        textTransform:'uppercase',
        padding:15,
        paddingTop:30
    },
    text1 : {
        color:'red',
        fontSize:20,
        fontWeight:'900',
        textTransform:'uppercase',
        padding:15,
        paddingTop:30
    }
})

