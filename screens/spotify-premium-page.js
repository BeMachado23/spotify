import { Text, View, StyleSheet, Image, TouchableOpacity, Div } from 'react-native';
import Constants from 'expo-constants';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
     <Image
        source={require('../assets/background1.jpg')}
        style={styles.backgroundImage1}
      />
      <View style={styles.toptxtContainer}>
        <Image
        source={require('../assets/premium.png')}
        style={styles.premium}
      />
        <Text style={styles.toptxt}>
          Premium
        </Text>
        <View style={styles.oferta}> 
      <Text style={styles.ofertatxt}>3 months for R$0,00</Text>
      </View>
      </View>
      
      <View style={{display:`flex`, alignItems: `center`, marginBottom: 10, marginTop: 10}}>
      <TouchableOpacity>
      <Text style={styles.monthtxt}>GET 3 MONTHS FREE</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.explaintxt}>Individual plan only. R$19,90/month after. Terms and conditions only. open only to users who have not alredy tried Premium. Offer ends 16/05/2023</Text>

      <View style={styles.card}>
      <Text style={styles.cardtxt1}> Why join Premium?</Text>
      <div style={{ borderTop: "1px solid #4D4D4D ", marginBottom: 10, }}></div>


      <View style={{display:'flex', flexDirection:'row', paddingTop:5, paddingBottom: 5, marginLeft: 6}}>
       <Image
        source={require('../assets/check.png')}
        style={styles.premium}
      />
      <Text style={styles.cardtxt2}> Listen offline without Wi-Fi or mabile data</Text>
      
      </View>
      <View style={{display:'flex', flexDirection:'row', paddingTop:5, paddingBottom: 5, marginLeft: 6 }}>
       <Image
        source={require('../assets/check.png')}
        style={styles.premium}
      />
      <Text style={styles.cardtxt2}> Play songs in any order</Text>
      
       </View>
       <View style={{display:'flex', flexDirection:'row', paddingTop:5, paddingBottom: 5, marginLeft: 6}}>
        <Image
        source={require('../assets/check.png')}
        style={styles.premium}
      />
      <Text style={styles.cardtxt2}> Music without ad interruptions</Text>
       </View>
       <View style={{display:'flex', flexDirection:'row', paddingTop:5, paddingBottom: 5, marginLeft: 6}}>
        <Image
        source={require('../assets/check.png')}
        style={styles.premium}
      />
      <Text style={styles.cardtxt2}> Higher sound quality</Text>
      </View>
      </View>
      
      <View style={styles.footer}>
  <TouchableOpacity style={styles.footertxt} onPress={ ()=> navigation.navigate('Home')}>
    <Image style={styles.footerImg} source={require('../assets/home.png')} />
    <Text style={styles.footertxt}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footertxt} onPress={ ()=> navigation.navigate('Search')}>
    <Image style={styles.footerImg} source={require('../assets/search.png')} />
    <Text style={styles.footertxt}>Search</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footertxt} onPress={ ()=> navigation.navigate('Login')}>
    <Image style={styles.footerImg} source={require('../assets/library.png')} />
    <Text style={styles.footertxt}>Your Library</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.footertxt} onPress={ ()=> navigation.navigate('Premiumpage')}>
    <Image style={styles.footerpremium} source={require('../assets/premium.png')} />
    <Text style={styles.footertxt}>Premium</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  justifyContent: 'left',
  flex: 1,
  paddingTop: Constants.statusBarHeight,
  backgroundColor: 'linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(51,50,50,1) 97%)',

  },
  backgroundImage1:{
    width: 333,
    height: 300,
  },
  toptxtContainer: {
    position: 'absolute',
    top: '4%',
    left: '4%',
    backgroundColor: 'transparent',
    display: `flex`,
    flexDirection: `row`,
  },
  toptxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    backgroundColor: 'linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(51,50,50,1) 97%)',
    width: '100%',
    height: 50,
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
    marginBottom:'0%',
    opacity: 0.95,
  },
  footerImg: {
    width: 18,
    height: 18,
    marginBottom: 4,
  },
  footertxt: {
    color: 'white',
    fontSize: 9,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  footerpremium: {
    width: 28,
    height: 18,
    marginBottom: 4,
    },
    premium:{
      width:25,
      height:25,
    },
    oferta:{
       position: 'absolute',
       width: 300,
       top:`920%`,
    },
    ofertatxt:{
      fontSize: 25,
    color: `white`
    },
    monthtxt:{
      width:250,
      height: 42,
      borderRadius: 62,
      alignItems: `center`,
      alignContent: `center`,
      textAlign: `center`,
      justifyContent: ` center`, 
      backgroundColor: `white`,
      display:`flex`,
      fontWeight:`bold`
    },
    explaintxt:{
      color:`gray`,
      fontSize: 10,
      marginLeft: 10,
      marginRight: 10 
    },
    card:{
      backgroundColor:'#282828',
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 7,
      paddingBottom: 30,
    },
    cardtxt1:{
      marginLeft: 10,
      color:'white',
      fontSize:20,
      marginBottom: 10,
      marginTop:20,
  
    },
    cardtxt2:{
      color:'white',
      marginLeft: 5
    }
});