import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView} from "react-native";
import {useState} from 'react';


  


export default function App() {

  const [mostrarFeed, setMostrarFeed] = useState(<Feed />)
  


  return (
      
      <View style={styles.container}>



      {mostrarFeed}
      


      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c0',
  },
  textoH1: {
    fontSize: 40,
    marginBottom: 20,

  },
  texto: {
    fontSize: 20,
    marginTop: 10

  },
  input:{
    height: '5%',
    width: '50%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 10
    

  },
  resultado:{
  fontSize: 20

  },
  feed:{
    height: '70%',
    width: '100%'

  },
  result:{
    height: '30%',
    width: '100%'

  },
  botao:{
    height: '10%',
    width: '50%',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#097bf4',

  }

});


function Feed(){

  const [altura, setAltura] = useState()
  const [peso, setPeso] = useState()
  const [calculo, setCalculo] = useState()
  const [textoCalculo, setTextoCalculo] = useState('')
  

  function calcular(){

  let soma = (peso / (altura*altura)).toFixed(2)

  if(soma < 18.5){

    setTextoCalculo('Você esta a baixo do peso')
    styles.resultado = {color: '#0000ff', fontSize: 20}

  }
  if(soma >= 18.5 && soma < 25 ){

    setTextoCalculo('Você esta no peso ideal')
    styles.resultado = {color: '#008000', fontSize: 20}

  } 
  if(soma >= 25 && soma < 30 ){

    setTextoCalculo('Você esta com sobrepeso')
    styles.resultado = {color: '#f67828', fontSize: 20}

  }
  if(soma >= 30 ){

    setTextoCalculo('Você esta obeso')
    styles.resultado = {color: '#ff0000', fontSize: 20}

  }

  setCalculo(soma)


  }

return(

<View style={styles.container}>

<View style={styles.feed}>

<Text style={styles.textoH1}>Calcule seu IMC</Text>

<Text style={styles.texto}>Insira sua altura (Metros):</Text>

  <TextInput

     multiline= {false}
     style={styles.input}
     value={altura}
     onChangeText={setAltura}
  />



<Text style={styles.texto}>Insira seu peso (Kg):</Text>

<TextInput

     multiline= {false}
     style={styles.input}
     value={peso}
     onChangeText={setPeso}
  />

  <TouchableOpacity onPress={calcular} style={styles.botao}>
  <Text>CALCULAR</Text>
  </TouchableOpacity>
  </View>
  <View style={styles.result}>
  <Text style={styles.resultado}>{calculo}</Text>
  <Text style={styles.resultado}>{textoCalculo}</Text>
  </View>
</View>

)
}

