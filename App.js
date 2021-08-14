import React,{Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList, TextInput} from 'react-native';
import Header from "./components/Header";
import InputBar from "./components/Input";
import Lokasjon from "./components/Lokasjon";
import TurItem from "./components/TurItem";

export default class App extends React.Component {
  constructor() {
    super()


    this.state = {

        kmInput1: '',
        kmInput2: '',
        title:'',
        bomp:' ',

      tur: [
        {id: 1, title: 'Lyshovden', km: 20, bomP: 1, done: true},
        {id: 2, title: 'Ormhaugen', km: 50, bomP: 2, done: true},
      ]
    }
  }

  ny = () => {
      let kmT = this.state.kmInput2 - this.state.kmInput1;

      let tur1 = this.state.tur;
      tur1.unshift({
          id:tur1.length +1,
          title:this.state.title,
          km:kmT,
          bomP:this.state.bomp,
          done:true,
      })
      this.setState({kmInput1:''})
      this.setState({kmInput2:''})
      this.setState({title:''})
      this.setState({bomp:''})
  }

 //  bompCalc = () => {
 // }


  render() {
      console.log(this.state.title)
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
      let kmT = this.state.kmInput2 - this.state.kmInput1;
      let km1 = this.state.kmInput1;
      let km2 = this.state.kmInput2;
      const kmTotal = (km2.length >= km1.length)  ? <Text> {kmT} </Text> : <Text> </Text>
     return (
        <View style={styles.container}>
          {statusbar}
          <Header title="Kjøregodtgjørelse"/>
          <Lokasjon
          lokasjonChange={title => this.setState({title:title})}
          title={this.state.title}
          />
          <InputBar
          textChange={kmInput1 => this.setState({kmInput1:kmInput1})}
          textChange2={kmInput2 => this.setState({kmInput2:kmInput2})}
          kmInput1={this.state.kmInput1}
          kmInput2={this.state.kmInput2}
          addNewKm={this.ny}


          />
          <View style={styles.bomp}>
            <Text style={styles.text}> Bompenger </Text>
            <TextInput
                style={styles.input}
                onChangeText={bomp => this.setState({bomp:bomp})}
                value={this.state.bomp}
            />
              <TouchableOpacity
                  style={styles.addButton}
                  onPress={this.ny}

              >
                  <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>

          </View>
            <Text style={styles.km}>  Distanse: {kmTotal} km
            </Text>


            <FlatList
                data={this.state.tur}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return(
                        <TurItem turItem={item}
                        />
                    )
            }}

            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  statusbar: {
    backgroundColor:'#000',
    height:33,
  },
    text: {
        color:'black',
        fontSize:15,
        fontWeight:'900',
        textTransform:'uppercase',
        padding:15,
        paddingTop:30
    },
    km: {
        color:'black',
        fontSize:20,
        fontWeight:'900',
        textTransform:'uppercase',
        padding:15,
        paddingTop:30
    },
    addButton: {
        width: 100,
        height:50,
        left:40,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize:18,
        fontWeight:'700'
    },
    input : {
        backgroundColor: '#F3F3F3',
        fontSize:30,
        height: 50,
        width: 50,


    },
    bomp: {
      display:'flex',
        flexDirection:'row',
    }

});
