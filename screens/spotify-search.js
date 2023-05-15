import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Text style={styles.text1}>Search</Text>
        <Image
          source={require('../assets/camera.png')}
          style={{ width: 17, height: 15, marginLeft: '67%' }}
        />
      </View>

      <View style={styles.pesquisa}>
        <TextInput placeholder="  What do you want to listen to?" />
      </View>
      <View style={styles.browse}>
        <Text style={styles.browsetxt}>Browse all</Text>
      </View>

       
 <View style={styles.topicholder}>


  <View style={styles.column}>
     <TouchableOpacity style={[styles.card1, {backgroundColor: '#1D9BF6'}]}>
      <Text style={[styles.cardtxt, {color: '#fff'}]}>Podcasts</Text>
    <Image source={require('../assets/balela.png')} style={styles.cardImg} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card1, {backgroundColor: '#C96827'}]}>
    
      <Text style={[styles.cardtxt, {color: '#fff'}]}>Made for you</Text>
      <Image source={require('../assets/madeforyou.png')} style={styles.cardImg} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card1, {backgroundColor: '#212655'}]}>
     
      <Text style={[styles.cardtxt, {color: '#fff'}]}>Brazil</Text>
       <Image source={require('../assets/brazil.png')} style={styles.cardImg} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card1, {backgroundColor: '#AB9762'}]}>
    
      <Text style={[styles.cardtxt, {color: '#fff'}]}>Brazilian Funk</Text>
        <Image source={require('../assets/brazilfunk.png')} style={styles.cardImg} />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.card1, {backgroundColor: '#A76FAE'}]}>

      <Text style={[styles.cardtxt, {color: '#fff'}]}>Charts</Text>
      <Image source={require('../assets/charts.png')} style={styles.cardImg} />
    </TouchableOpacity>
  </View>
   <View style={styles.column}>
  <TouchableOpacity style={[styles.card1, {backgroundColor: '#591B89'}]}>
    <Text style={styles.cardtxt}>Live Events</Text>
    <Image source={require('../assets/LiveEvents.jpg')} style={styles.cardImg} />
  </TouchableOpacity>
  <TouchableOpacity style={[styles.card1, {backgroundColor: '#2C8B2C'}]}>
    <Text style={styles.cardtxt}>New releases</Text>
    <Image source={require('../assets/newreleases.jpg')} style={styles.cardImg} />
  </TouchableOpacity>
  <TouchableOpacity style={[styles.card1, {backgroundColor: '#1B544E'}]}>
    <Text style={styles.cardtxt}>Sertanejo</Text>
    <Image source={require('../assets/sertanejo.jpg')} style={styles.cardImg} />
  </TouchableOpacity>
  <TouchableOpacity style={[styles.card1, {backgroundColor: '#9A1D68'}]}>
    <Text style={styles.cardtxt}>Pop</Text>
    <Image source={require('../assets/pop.jpg')} style={styles.cardImg} />
  </TouchableOpacity>
  <TouchableOpacity style={[styles.card1, {backgroundColor: '#C1C136'}]}>
    <Text style={styles.cardtxt}>Hip-Hop</Text>
    <Image source={require('../assets/hiphop.jpg')} style={styles.cardImg} />
  </TouchableOpacity>
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
    padding: 8,
    background:
      'linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(51,50,50,1) 97%)',
  },
  topicholder: {
    flex: 2,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 8,
  },
  card1: {
    width: 140,
    height: 100,
    backgroundColor: 'red',
    marginBottom: 15,
    borderRadius: 6,

  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: `white`,
  },
  pesquisa: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 8,
    width: '100%',
    height: 35,
    justifyContent: `center`,
  },
  browse: {
    alignSelf: 'flex-start',
  },
  browsetxt: {
    color: 'white',
    fontWeight: `bold`,
    marginBottom: 9,
  },
  cardtxt: {
    color: `white`,
    marginTop: 11,
    marginLeft: 8,
    fontWeight: 600,
  },
  img: {
    flexDirection: 'row',
    marginTop: 25,

  },
  footer: {
    backgroundColor:
      'linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(51,50,50,1) 97%)',
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
    opacity: '95%',
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
  cardImg:{
    width:50,
    height: 70,
    marginLeft: 79,
    resizeMode: 'contain',
    transform: [{ rotate: '-50deg' }],
  }
});
