import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

function App({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Fondo de imagen */}
      <Image source={require('./assets/imagen.png')} style={styles.backgroundImage} />
      {/* Menú de navegación */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>HEALTECH</Text>
        <View style={styles.profileIcon}>
          <FontAwesomeIcon icon={faUser} color="white" />
        </View>
      </View>
      {/* Contenido centrado */}
      <View style={styles.centeredContent}>
        <Text style={styles.name}>HEALTECH</Text>
        <Text style={styles.subtitle}>Bienvenido Dr Esperanza</Text>
        {/* Barra de búsqueda */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Buscar paciente"
            placeholderTextColor="black"
          />
          <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} color="white" />
        </View>
        <Button
          title="Ir a Crear Receta"
          onPress={() => navigation.navigate('CrearReceta')}
        />
      </View>
    </View>
  );
}

function CrearReceta({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Menú de navegación */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>HEALTECH</Text>
          <View style={styles.profileIcon}>
            <FontAwesomeIcon icon={faUserDoctor} color="white" />
          </View>
        </View>
        {/* Contenido */}
        <View style={styles.content}>
          <Text style={[styles.heading, styles.bold]}>CREANDO RECETA</Text>
          <View style={styles.formContainer}>
            <View style={styles.column}>
              <FontAwesomeIcon icon={faUserDoctor} style={[styles.icon, {width: 200, height: 120}]} />
            </View>
            <View style={styles.column}>
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]} placeholder="Nombre" />
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]}placeholder="DUI" keyboardType="numeric" />
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]}placeholder="Teléfono" keyboardType="numeric" />
            </View>
            <View style={styles.column}>
              <FontAwesomeIcon icon={faUser} style={[styles.icon, {width: 200, height: 120}]}/>
            </View>
            <View style={styles.column}>
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]} placeholder="Nombre" />
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]}placeholder="DUI" keyboardType="numeric" />
              <TextInput style={[styles.input,{backgroundColor: '#D9D9D9', marginBottom: 5}]}placeholder="Teléfono" keyboardType="numeric" />
            </View>
          </View>
          <Text style={[styles.label, styles.bold]}>DIAGNÓSTICO</Text>
          <View style={styles.column}>
             <TextInput style={[styles.input, styles.textarea]} multiline={true} />
          </View>

          <TouchableOpacity style={styles.addButton}>
            <FontAwesomeIcon icon={faPlus} style={styles.addIcon} />
            <Text style={styles.addText}>Agregar medicamento</Text>
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.sendButton]}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#345DF5',
  },
  container: {
    flex: 1,
    backgroundColor: 'white', // Añadido para que la vista tenga fondo blanco
  },  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  logo: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'CeraRoundPro-Bold',
  },
  profileIcon: {
    fontSize: 20,
    color: 'white',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 50,
    fontFamily: 'CeraRoundPro-Bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'CeraRoundPro-Light',
    color: 'white',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: 500,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    color: 'black',
    backgroundColor: 'white',
    flex: 1,
    fontFamily: 'CeraRoundPro-Bold',
  },
  searchIcon: {
    fontSize: 20,
    color: 'white',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  column: {
    flex: 1,
    padding: 5,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyColumn: {
    flex: 1,
  },
  column8: {
    flex: 8,
    alignItems: 'center', // Centrar verticalmente el textarea
  },
  textarea: {
    width: 600,
    alignSelf:'center',
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: 'black',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  addIcon: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  addText: {
    fontSize: 16,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
    width: 500, // Ancho de los botones
    height: 25,
  },
  sendButton: {
    backgroundColor: 'skyblue',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={App} />
        <Stack.Screen name="CrearReceta" component={CrearReceta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
