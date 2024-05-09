import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';


function CrearReceta({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Menú de navegación */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>HEALTECH</Text>
          <View style={styles.profileIcon}>
            <FontAwesomeIcon icon={faUser} color="white" />
          </View>
        </View>
        {/* Contenido */}
        <View style={styles.content}>
          <Text style={[styles.heading, styles.bold]}>CREANDO RECETA</Text>
          <View style={styles.formContainer}>
            <View style={styles.column}>
              <FontAwesomeIcon icon={faUserDoctor} style={[styles.icon, { width: 200, height: 120 }]}  />
            </View>
            <View style={styles.column}>
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9', marginBottom: 5 }]} placeholder="Nombre" />
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9', marginBottom: 5 }]} placeholder="DUI" keyboardType="numeric" />
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9', }]} placeholder="Teléfono" keyboardType="numeric" />
            </View>
            <View style={styles.column}>
              <FontAwesomeIcon icon={faUser} style={[styles.icon, { width: 200, height: 120 }]} />
            </View>
            <View style={styles.column}>
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9', marginBottom: 5 }]} placeholder="Nombre" />
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9', marginBottom: 5 }]} placeholder="DUI" keyboardType="numeric" />
              <TextInput style={[styles.input, { backgroundColor: '#D9D9D9' }]} placeholder="Teléfono" keyboardType="numeric" />
            </View>
          </View>
          <Text style={[styles.label, styles.center, styles.bold]}>DIAGNÓSTICO</Text>
          <View style={styles.formContainer}>
              {/* Columnas vacías */}
              <View style={styles.emptyColumn}></View>
              <View style={styles.emptyColumn}></View>
              <View style={styles.emptyColumn}></View>
  
              {/* Columna para el TextInput */}
             <View style={styles.column6}>
             <TextInput style={[styles.input, styles.textarea]} multiline={true} />
             </View>
  
              {/* Columnas vacías */}
             <View style={styles.emptyColumn}></View>
             <View style={styles.emptyColumn}></View>
            <View style={styles.emptyColumn}></View>
         </View>

          <TouchableOpacity style={styles.addButton}>
            <FontAwesomeIcon icon={faPlus} style={styles.addIcon} />
            <Text style={styles.addText}>Agregar medicamento</Text>
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.sendButton, { width: 150 }]}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton, { width: 150 }]}>
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
    backgroundColor: '#345DF5',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: 'black',
    fontFamily: 'CeraRoundPro-Bold',
    backgroundColor: 'yellow',
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  emptyColumn: {
    flex: 1,
  },
  column6: {
    flex: 6,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: 'black',
    marginBottom: 5,
  },  
  textarea: {
    height: 100,
    paddingLeft: 100,
    paddingRight: 100,
    padding: 10,
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
    paddingVertical: 15,
    borderRadius: 20,
    marginHorizontal: 5,
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

export default CrearReceta;