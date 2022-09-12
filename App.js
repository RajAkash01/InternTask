import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Leftarrow from './Svg/Lef.svg';
import Marker from './Svg/Marker.svg';
import LinearGradient from 'react-native-linear-gradient';
import Veg from './Svg/Veg.svg';
import Non_veg from './Svg/Non_veg.svg';
import Circle from './Svg/Circle.svg';
import Chat from './Svg/Chat.svg';
import Down_arrow from './Svg/Down_arrow.svg';
import Add from './Svg/Add.svg';
import Minus from './Svg/Minus.svg';
import Star from './Svg/Star.svg';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const Set = [
  {name: 'Rahul', img: require('./assets/A.png'), pack: 'CLASSIC'},
  {name: 'Puspa', img: require('./assets/B.png'), pack: 'ROYAL'},
  {name: 'Rick', img: require('./assets/C.png'), pack: 'COMFORT'},
  {name: 'Souvik', img: require('./assets/D.png'), pack: 'CLASSIC'},
];
const Toolbar = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 30,
        marginBottom: -10,
      }}>
      <Leftarrow width={35} height={35} />
      <Text
        style={{marginLeft: 15, color: 'white', marginTop: 5, fontSize: 22}}>
        3 Ii Dhaba
      </Text>
    </View>
  );
};
const Customtext = ({
  color,
  data,
  size,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
}) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: size,
        marginBottom: marginBottom,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}>
      {data}
    </Text>
  );
};
const CustomDropdown = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#F1E27E',
        borderRadius: 20,
        width: 140,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        marginRight: 17,
      }}>
      <Text style={{color: '#F1E27E', marginRight: 10}}>{data}</Text>
      <Down_arrow />
    </TouchableOpacity>
  );
};
const Content = () => {
  const [total, settotal] = useState(0);
  return (
    <>
      <Customtext marginTop={20} data={'CLASSIC'} color={'#23D7FF'} size={16} />
      <Customtext
        marginTop={3}
        data={'Recomended for 10 people'}
        color={'#656358'}
        size={13}
      />
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingHorizontal: 100,
          height: 2,
          backgroundColor: '#A8A8A8',
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginBottom: 10}}
          source={require('./assets/kitchen.png')}
        />
        <View>
          <Text
            style={{
              color: '#5E5E5E',
              fontSize: 14,
              width: '40%',
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            nunc id magna ut.{' '}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', marginLeft: 10, marginRight: 10}}>
              How many guests
            </Text>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() =>
                settotal(current => (current > 0 ? current - 1 : 0))
              }>
              <Minus />
            </TouchableOpacity>
            <Text style={{color: 'white', marginRight: 10}}>{total}</Text>
            <TouchableOpacity onPress={() => settotal(current => current + 1)}>
              <Add />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Star style={{marginLeft: 10, marginRight: 10, marginTop: 3}} />
            <Text style={{color: '#F2C94C', marginRight: 10}}>4.7</Text>
            <Text style={{color: '#FFFFFF'}}>₹1400.00</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#F1E27E',
                padding: 5,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginLeft: 10,
                marginTop: -4,
              }}>
              <Text>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const Reviews = ({name, img, pack}) => {
  return (
    <>
      <View>
        {/* <Customtext
          data={'Reviews'}
          color={'#F1E27E'}
          size={18}
          marginTop={20}
        /> */}
        <View
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          // colors={['#201D1D', '#FFFFFF00']}
          style={{
            // paddingHorizontal: 100,
            // paddingVertical: 70,
            width: '100%',
            height: 160,
            borderRadius: 25,
            marginTop: 10,
            backgroundColor: '#201D1D',
            position: 'relative',
            flexDirection: 'row',
          }}>
          <View>
            <Image
              style={{
                width: 80,
                height: 80,
                marginLeft: 15,
                marginTop: 15,
              }}
              source={img}
            />

            <Text style={{color: 'white', marginLeft: 39, marginTop: 7}}>
              {name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', marginLeft: 39, marginTop: 7}}>
                4.6
              </Text>
              <Star style={{marginLeft: 5, marginTop: 11}} />
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', marginTop: 20, marginLeft: 20}}>
                Packages
              </Text>
              <Text style={{color: '#23D7FF', marginTop: 20, marginLeft: 10}}>
                {pack}
              </Text>
              <View style={{position: 'absolute', top: 20, right: 90}}>
                <Text
                  style={{
                    color: '#5E5E5E',
                    fontSize: 10,
                  }}>
                  23.08.2022
                </Text>
                <Text
                  style={{
                    color: '#5E5E5E',
                    fontSize: 10,
                  }}>
                  11 Guests
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 132,
                height: 1,
                backgroundColor: '#646464',
                marginLeft: 20,
                marginTop: 3,
                // marginRight: 152,
              }}
            />
            <Text
              style={{
                color: '#FFFFFF',
                marginLeft: 20,
                marginRight: 90,
                marginTop: 10,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              viverra ultrices vulputate et placerat scelerisque aliquet. Nulla
              tristique augue risus, in integer ipsum, malesuada.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <Toolbar />
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.black,
              flexWrap: 'wrap',
              marginLeft: 90,
              marginBottom: -30,
            }}>
            <Text style={{color: '#B8B8B8', fontSize: 15, marginTop: 5}}>
              3.7 |{' '}
            </Text>
            <Marker width={13} height={13} style={{marginTop: 10}} />
            <Text
              style={{
                color: '#B8B8B8',
                fontSize: 15,
                letterSpacing: -1.1,
                marginTop: 5,
              }}>
              {'   '}
              Lumbin Park, Kolkata,700038
            </Text>
          </View>

          <Image
            style={{marginBottom: -80, zIndex: 10, alignSelf: 'center'}}
            source={require('./assets/dishimg.png')}
          />

          <LinearGradient
            colors={['#313435', 'rgba(49, 52, 53, 0.72)']}
            style={{
              flex: 1,
              paddingLeft: 25,
              paddingRight: 25,
              borderTopLeftRadius: 55,
              borderTopRightRadius: 55,
              paddingTop: 65,
              paddingBottom: 30,
            }}>
            <Customtext
              data={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditultrices iaculis tempus augue imperdiet. Pellentesque inconsectetur gravida mattis in tempor. Diam id pellentesque sodalesnibh sit dolor.'
              }
              color={'#9B9B9B'}
              size={14}
            />
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Customtext data={'Veg'} color={'white'} size={15} />
                <Veg style={{marginTop: 7, marginLeft: 10, marginRight: 10}} />
                <Customtext data={'Non-Veg'} color={'white'} size={15} />
                <Non_veg style={{marginTop: 7, marginLeft: 10}} />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 20,
                  }}>
                  <Customtext data={'Available'} color={'white'} size={15} />
                  <Circle style={{marginTop: 7, marginLeft: 10}} />
                </View>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <Customtext data={'Reviews'} color={'white'} size={15} />
                  <Chat style={{marginTop: 0, marginLeft: 10}} />
                </View>
              </View>
            </View>

            <Customtext data={'Shedule a visit'} color={'#F1E27E'} size={18} />
            <View style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
              <CustomDropdown data={'16 Aug 2022'} />
              <CustomDropdown data={'08:00 PM'} />
            </View>
            <Customtext
              data={'Available Packages'}
              color={'#F1E27E'}
              size={18}
              marginTop={20}
            />
            <Content />
            <Content />
            <Customtext
              data={'Reviews'}
              color={'#F1E27E'}
              size={18}
              marginTop={20}
            />
            {Set.map(it => (
              <Reviews
                name={it.name}
                img={it.img}
                pack={it.pack}
                key={it.name}
              />
            ))}
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
