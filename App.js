import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/spotify-login'
import Search from './screens/spotify-search'
import Premium_Page from './screens/spotify-premium-page'

export function Home({navigation}) {
  return (
    <View style={styles.container}>
    <Image
        source={require('./assets/spotify.png')}
        style={styles.spotify}
      />
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.sign}>Start</Text>
      </TouchableOpacity>
    </View>

  );
}

const app = () => {

  const Stack = createStackNavigator();

  return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Premiumpage" component={Premium_Page} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:`center`,
    alignContent: `center`,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282828',
    padding: 8,
    
  },
spotify:{
width: 130,
height: 130,
},

button1:{
    backgroundColor: '#32cd32',
    width: 280,
    height: 40,
    borderRadius: 23,
    display: 'flex',
    alingnItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    textAlign: `center`,
    marginTop: 60
  },
  sign:{
    fontSize: 16,
    fontFamily: '',
}
});


