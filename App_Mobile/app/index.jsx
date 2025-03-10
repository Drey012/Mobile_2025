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
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as WebBrowser from 'expo-web-browser';  // Usar expo-web-browser

const Drawer = createDrawerNavigator();

// Tela Input para a gaveta
const Input = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const exibir = () => {
    if (text !== '') setIsVisible(true);
  };

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://x.com/melhorpost');  // Abrir no navegador
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
          <Text style={styles.envButton}>Enviar</Text>
        </TouchableOpacity>
      </View>
      {isVisible && <Text style={styles.text}>Nome: {text}</Text>}
      <View style={styles.containerBtn}>
        <TouchableOpacity
          style={styles.botao2}
          onPress={openBrowser}>
          <Text style={styles.textBotao}>Abrir Webview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={esconder}>
          <Text style={styles.textBotao}>Limpar Input</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao2}
          onPress={() => navigation.openDrawer()}>
          <Text style={styles.textBotao}>Abrir Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Componente principal com o Drawer Navigator
export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Input} />
      </Drawer.Navigator>
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
    width: '25%',
    height: '90%',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao2: {
    backgroundColor: 'white',
    borderRadius: 30, // Corrigido: valor numérico sem "px"
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    padding: 3,
    borderWidth: 0.1,
    borderColor: '#D0D0D0',
    width: '30%',
    height: '100%',
  },
  textBotao: {
    color: '#3075E9',
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    height: '100%',
    fontSize: 17,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  envButton: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff'
  }
});
