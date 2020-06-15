import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableHighlight } from 'react-native';

// Reanimated >> GestureHandler
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
 
// React-Native-SVG
import Svg, { Image, Circle, ClipPath } from 'react-native-svg';

// Const Tamanho da tela
const { width, height } = Dimensions.get('window');

// Const Animated
const {
  Value,
  event,
  block,
  cond, 
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

// Função Timing
function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}

const Logo = {uri: 'https://snack.expo.io/web-player/37/static/media/react-native-logo.2e38e3ef.png'};


class LoginScreen extends Component{
  constructor(props) {
    super(props);

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);
 
    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3 -50 , 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });

    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >  

          <Svg height={height + 50} width={width}>
            <ClipPath id="clip">
              <Circle r={height + 50} cx={width / 2} />
            </ClipPath>

            <Image
              href={require('../../../assets/bg.jpeg')}
              width={width}
              height={height + 50}  
              preserveAspectRatio='xMidYMid slice'
              clipPath="url(#clip)"
            />
          </Svg>
        </Animated.View>

        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Entrar</Text>
            </Animated.View>
          </TapGestureHandler>

          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#2E71DC',
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }]
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Entrar com Facebook
            </Text>
          </Animated.View>

          <Animated.View 
            style={{
              zIndex: this.textInputZindex,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }],
              height:height/3,
              ...StyleSheet.absoluteFill,
              top:null,
              justifyContent:'center'
            }}> 

            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>

                <Animated.Text 
                  style={{ 
                    fontSize: 15,
                    transform: [{ rotate: concat(this.rotateCross, 'deg') }]
                  }}
                >X
                </Animated.Text>
              
              </Animated.View>
            </TapGestureHandler>

            <TextInput
              placeholder="CPF"
              style={styles.textInput}
              placeholderTextColor="black"
            />

            <TextInput
              placeholder="Telefone"
              style={styles.textInput}
              placeholderTextColor="black"
            />

            <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeScreen')} >
                <Animated.View  style={styles.button}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>ENTRAR</Text>
                </Animated.View>
            </TouchableHighlight>



          </Animated.View>

        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 0.1,
    borderColor: 'grey' 
  },
  textInput: {
    height:50,
    borderRadius:25,
    borderWidth:0.5,
    marginHorizontal:20,
    paddingLeft:15,
    marginVertical:5,
    borderColor:'rgba(0,0,0,0.2)'
  },
  closeButton:{
    zIndex: 2,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 0.1,
    borderColor: 'grey'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
},
profileImage: {
  zIndex: 100,
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden"
},
});
