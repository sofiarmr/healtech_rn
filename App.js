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
     
      {/* Contenido centrado */}
      <View style={styles.centeredContent}>
        <Text style={styles.name}>HEALTECH</Text>
        <Text style={styles.subtitle}>Bienvenido Dr Esperanza</Text>
        {/* Barra de búsqueda */}
        <TouchableOpacity onPress={() => navigation.navigate('CrearReceta')} style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Buscar paciente"
            placeholderTextColor="black"
          />
          <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CrearReceta({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: '#345DF5', padding:40, }]}>
        <View style={[styles.headingContainer, { backgroundColor: 'transparent' }]}>
        <Text style={[styles.heading, styles.bold, { color: 'white' }]}>CREANDO RECETA</Text>
        </View>
        <View style={[styles.mainContainer, { backgroundColor: 'white' }]}>
          
        <View style={styles.content}>
  <View style={styles.headingContainer}>
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.column}>
      <Text style={[styles.heading, styles.bold, { color: 'black', textAlign: 'center' }]}>INFORMACIÓN DEL DOCTOR</Text>
    </View>
    <View style={styles.column}>
      <Text style={[styles.heading, styles.bold, { color: 'black', textAlign: 'center' }]}>INFORMACIÓN DEL PACIENTE</Text>
    </View>
    </View>
  </View>
  <View style={[styles.formContainer, { padding: 30 }]}>
    <View style={styles.column}>
      <FontAwesomeIcon icon={faUserDoctor} style={[styles.icon, { width: 200, height: 120 }]} />
    </View>
    <View style={styles.column}>
    <View style={[styles.inputContainer, { marginBottom: 5 }]}>
        <Text style={styles.inputText}>Carlos Enrique Esperanza</Text>
    </View>
    <View style={[styles.inputContainer, { marginBottom: 5 }]}>
        <Text style={styles.inputText}>06637889-9</Text>
    </View>
    <View style={[styles.inputContainer, { marginBottom: 5 }]}>
        <Text style={styles.inputText}>+503 70998800</Text>
    </View>

    </View>
    <View style={styles.column}>
      <FontAwesomeIcon icon={faUser} style={[styles.icon, { width: 200, height: 120 }]} />
    </View>
    <View style={styles.column}>
    <View style={[styles.inputContainer, { marginBottom: 5}]}>
        <Text style={styles.inputText}>Carlos Enrique Esperanza</Text>
    </View>
    <View style={[styles.inputContainer, { marginBottom: 5 }]}>
        <Text style={styles.inputText}>06637889-9</Text>
    </View>
    <View style={[styles.inputContainer, { marginBottom: 5 }]}>
        <Text style={styles.inputText}>+503 70998800</Text>
    </View>
    </View>
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
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white', // Añadido para que la vista tenga fondo blanco
  },  
  inputContainer: {
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
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
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: 500,
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
    alignSelf:'center',
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    color: 'black',
    backgroundColor: 'white',
    flex: 1,
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
    width: 350, // Ancho de los botones
    height: 40,
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
        <Stack.Screen name="HEALTECH" component={App}  
        options={{
                headerStyle: {
                  backgroundColor: 'black', // Cambia el color de fondo del encabezado a negro
                  borderBottomWidth: 0, // Elimina el borde inferior del encabezado
                  },
                  headerTintColor: 'white', // Cambia el color del texto del encabezado a blanco
                headerRight: () => (
      <View style={{ marginRight: 10 }}>
        <FontAwesomeIcon icon={faUser} color="white" size={20} />
      </View>
    ),
  }}
/>
<Stack.Screen
  name="CrearReceta"
  component={CrearReceta}
  options={{
    headerStyle: {
      backgroundColor: 'black', // Cambia el color de fondo del encabezado a negro
      borderBottomWidth: 0, // Elimina el borde inferior del encabezado
    },
    headerTintColor: '#D9D9D9', // Cambia el color del texto del encabezado a blanco
    headerRight: () => (
      <View style={{ marginRight: 10 }}>
        <FontAwesomeIcon icon={faUserDoctor} color="white" size={20} />
      </View>
    ),
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
