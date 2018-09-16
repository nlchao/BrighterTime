import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TextInput, Image, ImageBackground, TouchableOpacity, Alert} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Play Time',
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    testing() {
        this.setState({
            text: ''
        })
        // getResponse()
    }

    render() {
        return <View style={styles.container}>

                <View style={styles.videoContainer}>
                    <Image
                        source={require('../videos/demo.gif')}
                        style={styles.imageContainer}
                    />
                </View>
                <ScrollView 
                    contentContainerStyle={styles.questionContainer}
                >
                    <View style = {styles.gameQuestionContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hi there! What are your thoughts on this situation?</Text>
                           
                           <View style = {{paddingTop: 20}}>
                            <TextInput
                                multiline={true}
                                style={styles.textContainer}
                                onChangeText={(text) => this.setState({text})}
                                maxLength = {200}
                                value={this.state.text}
                            />
                            </View>

                            <View style = {{paddingTop: 10}}>
                                <TouchableOpacity 
                                    onPress={() => this.testing()}>
                                    {this.state.text !== '' ? <View style = {styles.buttonContainer}>
                                            <Text style = {{paddingTop: 10, fontWeight: 'bold'}}>SUBMIT</Text>
                                        </View> : null}
                                </TouchableOpacity>
                            </View>

                    </View>
                </ScrollView>

        </View>
    }
}

// const getResponse = (param) => {
//     return fetch('104.248.71.161:8888', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             firstParam: 'yourValue',
//             secondParam: 'yourOtherValue',
//         }),
//     }).then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009faf',
    },
    videoContainer: {
        backgroundColor: 'transparent',
        borderColor: '#03A9F4',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        alignItems: 'center',
        paddingTop: 20,
        borderRadius: 20,
    },
    imageContainer: {
        borderRadius: 30, 
        width: (Dimensions.get('window').width + 100) / 2,
        justifyContent: 'center',
    },
    gameQuestionContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#4dd0e1',
        height: 100, 
        width: winWidth - 30, 
        borderWidth: 10, 
        borderColor: 'transparent',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    backgroundContainer: {
        width: winWidth,
        height: winHeight,
    },
    buttonContainer: {
        backgroundColor: 'orange',
        height: 40,
        width: 250,
        marginBottom: 30,
        alignItems: 'center',
        borderRadius: 15,
    }
})

