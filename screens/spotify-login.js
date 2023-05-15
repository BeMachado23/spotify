import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function App({navigation}) {
  return (
    <View style={{
      backgroundColor: 'rgb(0,0,0)',
      backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(50,50,50,1) 100%)',
      flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source = {require('../assets/spotify.png')} style = {{width: 100, height: 100}}/>

        <Text style={styles.paragraph}>
          Millions of songs.{`\n`}Free on Spotify.
        </Text>
        <View>
        <TouchableOpacity style={styles.button1}>
        <Text style={styles.sign}>Sign up free</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button2}>
        <Image source = {require('../assets/celular.png')} style = {{width: 20, height: 0}}/> <Text style={styles.text}>Continue with phone number</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
        <Text style={styles.text}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={ ()=> navigation.navigate('Search')}>
        <Text style={styles.text}>Just see the app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
        <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>

        </View>
      </View> 
      
    
  );
}
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: `white`,
    marginTop: 70,
    fontFamily:''
     
  },
  sign:{
    fontSize: 16,
    fontFamily: '',
  },
  text:{
    fontSize: 16,
    color: 'white',
    fontFamily: '',
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
  button2:{
    width: 280,
    height: 40,
    borderRadius: 23,
    display: 'flex',
    alingnItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 9,
    textAlign: `center`
  },
  button3:{
    width: 280,
    height: 40,
    display: 'flex',
    alingnItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    marginTop: 9,
    textAlign: `center`
  }

});