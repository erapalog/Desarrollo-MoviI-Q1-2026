import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let nombrePersona= 'pedro'
  alert (nombrePersona);


  nombrePersona=78
  alert (nombrePersona);

  nombrePersona=true
  alert(nombrePersona);


  nombrePersona=[98,909, "hola", true]

  alert (nombrePersona);

  function saludar(){
    alert (4+4)
  }

  saludar()


  return (
    <View style={styles.container}>
      <Text>primera app para trabajar desde el movil</Text>
     
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
  },
});
