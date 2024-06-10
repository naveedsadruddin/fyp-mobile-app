import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lowerbar from './Lowerbar';

function Homepage() {
  const navigation = useNavigation();
  const token = useSelector(state => state.user.userData.token);
  console.log(token)
  const [fetured, setFetured] = useState([]);
  const [products, setProducts] = useState([]);

  const [list, setList] = useState('');
  // const [token, setToken] = useState(
  //   '81|i4Jy1dqMZx5OILS1aJgFwzYjBC91PEamSISqw3xQ14540414',
  // );
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [search, setSearch] = useState('');

  const handleSearchChange = text => {
    setSearch(text);
  };

  const handleSearch = () => {
    navigation.navigate('screen7', {search: search});
    setSearch('');
  };
  useEffect(() => {
    
    axios
      .get('http://192.168.2.107:8000/api/users/products', config)
      .then(response => {
        console.log(response.data);
        setProducts(response.data.products);
        setFetured(response.data.featuredProducts);
      })
      .catch(error => {
        console.error('Error fetching token:', error);
      });
  }, []);
  const list1 = () => {
    return products.map(element => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('screen8', {id: element.id})} key={element.id}>
          <View key={element.id} style={style.content}>
            <Image
              source={{uri: element.images[0].image_uri}}
              style={{width: '100%', height: '70%', borderRadius: 16}}
            />
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              {element.name}
            </Text>
            <Text>Rs {element.sale_price}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const featured = () => {
    return fetured.map(element => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('screen8', {id: element.id})} key={element.id}>
          <View style={style.recomcontainer} key={element.id}>
            <Image
              source={{uri: element.images[0].image_uri}}
              style={style.container7Picture}
            />
            <Text style={style.productName}>{element.name}</Text>
            <Text style={style.afterSalePrice}>RS {element.sale_price}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
  return (
    <>
      <ScrollView style={{height: 'auto'}}>
        <View style={style.container1}>
          <View style={style.inputWrapper}>
            <TouchableOpacity onPress={handleSearch}>
              <MaterialIcons
                name="search"
                size={20}
                color="gray"
                style={{paddingHorizontal: 10}}
              />
            </TouchableOpacity>
            <TextInput
              style={{paddingHorizontal: 5}}
              placeholder="search product"
              value={search}
              onChangeText={handleSearchChange}
            />
          </View>
          <View style={style.container1IconsContainer}>
            {/* <SimpleLineIcons name="heart" size={25} color="gray" />
            <SimpleLineIcons
              name="bell"
              size={25}
              color="gray"
              style={{paddingLeft: 23}}
            /> */}
            <TouchableOpacity  onPress={() => navigation.navigate('screen5')} style={style.logoutbtn}>
            <SimpleLineIcons
              name="logout"
              size={15}
              color="gray"
              
            />
              <Text style={style.logouttxt}>Logout</Text>
           
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.container2}>
          <Image source={require('../assets/images/slider.jpg')} />
          <View style={style.locationbutton}>
            <MaterialIcons name="location-pin" size={40} color="#5C61F4" />
            <Text style={{fontSize: 20}}>Drop your location</Text>
          </View>
        </View>

        {/* <View style={style.container3}>
          <Text style={{fontWeight: '600', fontSize: 21}}>Category</Text>
          <View style={style.buttonbox}>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <AntDesign name="shoppingcart" size={40} color="#5C61F4" />
              </TouchableOpacity>
              <Text style={style.categoryName}>Mart</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <Fontisto name="shopping-sale" size={40} color="#5C61F4" />
              </TouchableOpacity>
              <Text style={style.categoryName}>Sale</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <MaterialCommunityIcons
                  name="lipstick"
                  size={40}
                  color="#5C61F4"
                />
              </TouchableOpacity>
              <Text style={style.categoryName}>Beauty</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <MaterialCommunityIcons
                  name="tshirt-crew-outline"
                  size={40}
                  color="#5C61F4"
                />
              </TouchableOpacity>
              <Text style={style.categoryName}>Fashion</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <MaterialCommunityIcons
                  name="truck-delivery"
                  size={40}
                  color="#5C61F4"
                />
              </TouchableOpacity>
              <Text style={style.categoryName}>Delivery</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <FontAwesome5 name="couch" size={35} color="#5C61F4" />
              </TouchableOpacity>
              <Text style={style.categoryName}>Decor</Text>
            </View>
            <View style={style.buttonWrapper}>
              <TouchableOpacity style={style.buttons}>
                <MaterialIcons name="payment" size={40} color="#5C61F4" />
              </TouchableOpacity>
              <Text style={style.categoryName}>Payment</Text>
            </View>
          </View>
        </View> */}

        <View style={style.container4}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('screen7');
            }}>
            <Text style={{fontWeight: '600', fontSize: 21}}>Products</Text>
          </TouchableOpacity>
          <View style={style.productcontainer}>{list1()}</View>
        </View>

        <View style={style.container5}>
          <Text style={{fontWeight: '600', fontSize: 21}}>Reels</Text>
          <View style={style.reelcontent}>
            <TouchableOpacity onPress={() => navigation.navigate('reels')}>
              <FastImage
                style={{width: responsiveWidth(31), height: 196}}
                source={require('../assets/reels/reel1.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
            <FastImage
              onPress={() => navigation.navigate('reels')}
              style={{width: responsiveWidth(31), height: 200}}
              source={require('../assets/reels/reel2.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              onPress={() => navigation.navigate('reels')}
              style={{width: responsiveWidth(31), height: 196}}
              source={require('../assets/reels/reel3.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>

        <View style={style.container6}>
          <Image
            style={{width: responsiveWidth(95), borderRadius: 13}}
            source={require('../assets/images/image1.png')}
          />
          <Text style={style.recomtxt}>Recomended Product</Text>
          <Text style={style.txt}>We recomend the best for you</Text>
        </View>

        <View style={style.container7}>{featured()}</View>
        <View style={style.footer}></View>
      </ScrollView>
      <Lowerbar />
    </>
  );
}
const style = StyleSheet.create({
  container1: {
    width: responsiveWidth(95),
    justifyContent: 'center',
    alignSelf: 'center',
    top: responsiveHeight(3),
    flexDirection: 'row',
  },

  inputWrapper: {
    flexDirection: 'row',
    top: responsiveHeight(2),
    width: responsiveWidth(65),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },

  container1IconsContainer: {
    flexDirection: 'row',
    marginLeft: 23,
    top: responsiveHeight(3.5),
  },
  logoutbtn:{
    height:responsiveHeight(5.5),
    width:responsiveWidth(22),
    right:1.5,
    bottom:responsiveHeight(1),
    flexDirection:"row",
    borderRadius: 7,
    backgroundColor: 'transparent',
    justifyContent:"space-evenly",
    alignItems:"center",
    borderWidth:0.9,
    borderColor:"gray",
    // elevation: 5,
    // shadowColor: '#5C61F4',
    // shadowOffset: {width: 0, height: 3},
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
  },
  logouttxt:{
    color:"gray",
    fontWeight:"500",
    fontSize:18
  },
  container2: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    top: responsiveHeight(8),
  },

  locationbutton: {
    width: responsiveWidth(70),
    height: responsiveHeight(7),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    bottom: responsiveHeight(3),
    elevation: 5,
    shadowColor: '#5C61F4',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  container3: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    top: responsiveHeight(7),
  },

  buttonbox: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    padding: 20,
  },

  buttonWrapper: {
    alignItems: 'center',
  },

  buttons: {
    backgroundColor: 'white',
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#5C61F4',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  categoryName: {
    fontSize: 20,
    marginTop: 10,
  },

  container4: {
    width: responsiveWidth(95),
    top: responsiveHeight(7),
    alignSelf: 'center',
    padding: 10,
  },

  productcontainer: {
    width: responsiveWidth(95),
    top: responsiveHeight(2),
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },

  content: {
    width: responsiveWidth(29),
    height: responsiveHeight(22),
    borderWidth: 1,
    borderColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container5: {
    width: responsiveWidth(95),
    top: responsiveHeight(11),
    alignSelf: 'center',
  },
  reelcontent: {
    width: responsiveWidth(95),
    top: responsiveHeight(2),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },

  container6: {
    width: responsiveWidth(95),
    top: responsiveHeight(15),
    alignSelf: 'center',

    height: responsiveHeight(27),
  },
  recomtxt: {
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
    position: 'relative',
    bottom: responsiveHeight(22),
    paddingHorizontal: 20,
  },
  txt: {
    color: 'white',
    fontSize: 21,
    bottom: responsiveHeight(20),
    paddingHorizontal: 20,
  },
  container7: {
    width: responsiveWidth(95),
    height: responsiveHeight(200),
    top: responsiveHeight(16),
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    gap: 20,
  },

  recomcontainer: {
    width: responsiveWidth(40),
    borderWidth: 1,
    borderColor: '#EBF0FF',
    flexDirection: 'column',
    padding: 15,
  },

  container7Picture: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  productName: {
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
  },

  afterSalePrice: {
    marginTop: 30,
    color: 'black',
  },

  actualPrice: {
    textDecorationLine: 'line-through',
    marginTop: 7,
  },

  footer: {
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    backgroundColor: 'white',
  },
});

export default Homepage;
