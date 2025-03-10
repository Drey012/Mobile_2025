import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';

// Tela Input para a gaveta
const Input = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const exibir = () => {
    if (text !== '') setIsVisible(true); // Atualiza a visibilidade quando o botão é clicado
  };

  const esconder = () => {
    setIsVisible(false);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTff9bRsIU0UNOGta2zCM6yf2DTjd5tBA2Q&s',
        }}
        style={styles.image}
      />
      <Text style={styles.titulo}>Olá! Insira seu nome a seguir:</Text>
      <View style={styles.containerDados}>
        <TextInput
          editable
          numberOfLines={4}
          maxLength={40}
          onChangeText={setText}
          placeholder="Insira seu nome aqui"
          style={styles.input}
          value={text}
        />
        <TouchableOpacity style={styles.botao} onPress={exibir}>
          <Text style={styles.textBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
      {isVisible && <Text style={styles.text}>Nome: {text}</Text>}
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.botao2}
          onPress={() => navigation.navigate('Mapa')}>
          Ver Mapa
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={esconder}>
          Limpar Input
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao2}
          onPress={() => navigation.openDrawer()}>
          Abrir Menu
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
        <View name="Home" component={Input} />
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#bcc2be',
    minHeight: '100%',
    gap: 20,
    paddingTop: 20,
    overflowY: 'scroll',
  },
  containerDados: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxHeight: 50,
    gap: 10,
  },
  containerBtn: {
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'space-around',
    width: '100%',
    maxHeight: 50,
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 2,
    marginRight: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#3075E9',
    width: '30%',
    height: '90%',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao2: {
    backgroundColor: 'white',
    borderRadius: "30px",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    padding: 3,
    borderWidth: 0.1,
    borderColor: '#D0D0D0',
    width: '30%',
    height: '100%',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#3075E9',
  },
  textBotao: {
    color: 'white',
    fontSize: 12,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    height: '100%',
    fontSize: 17,
    fontWeight: '600',
  },
  map: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    height: '100%',
  },
});
