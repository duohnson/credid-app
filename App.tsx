import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { estilos } from './src/styles/styles';
import IniciarSesion from './modulos/usuario/IniciarSesion';

const CrearNavegante = createNativeStackNavigator();

function CrearPantalla() {
  const UsarNavegante = useNavigation<any>();

  return (
    <View style={estilos.areaSegura}>
      <StatusBar style="dark" />
      <View style={estilos.burbujaSuperiorFondo} />
      <View style={estilos.burbujaInferiorFondo} />

      <View style={estilos.contenedor}>
        <View style={estilos.carta}>
          <View style={estilos.filaMarca}>
            <Image source={require('./assets/carnet.png')} style={estilos.logoPequeno} />
            <Text style={estilos.textoMarca}>CredID</Text>
          </View>

          <Image source={require('./assets/usuario.png')} style={estilos.imagen} />
          <Text style={estilos.subtitulo}>Identidad digital segura</Text>
        </View>

        <View style={estilos.contenedorBotones}>
          <Pressable
            onPress={() => UsarNavegante.navigate('IniciarSesion')}
            style={estilos.contenedorSecundario}
          >
            <Text style={estilos.textoSecundario}>Ingresar como usuario</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={estilos.contenedorTerciario}>
            <Text style={estilos.textoTerciario}>Ingresar como organización</Text>
          </Pressable>
        </View>

        <Text style={estilos.derechosAutor}>Desarrollado por Daniel Uohnson</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CrearNavegante.Navigator initialRouteName="Inicio">
        <CrearNavegante.Screen
          name="Inicio"
          component={CrearPantalla}
          options={{ headerShown: false }}
        />
        <CrearNavegante.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{ headerShown: false }}
        />
      </CrearNavegante.Navigator>
    </NavigationContainer>
  );
}
