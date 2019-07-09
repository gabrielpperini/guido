import React, {Component} from 'react';
import {Text, View , Image , TouchableOpacity , Dimensions , ImageBackground , TextInput , AsyncStorage , Keyboard} from 'react-native';
import assets from '../../assets';
import styles from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Api  from '../../Api'

const dim = Dimensions.get("window");


export default class Login extends Component {
    
    constructor(props){
        super(props);
    }

    state={
        marginImage: 100,
        marginTextInput: 75,
        marginButton: 30,
        cpf: null,
        errorCpf: 'none'
    }

    login = async (cpf) => {
        var userData = await Api.LoginApi.users(cpf);
        if(userData.user){
            Keyboard.dismiss();
            let user = {
                user: userData.user,
                auth: 1
            };
            await AsyncStorage.setItem('user', JSON.stringify(user) );
            this.setState({cpf: '', errorCpf: 'none'});
            this.props.navigation.navigate('Home');
        }else{
            this.setState({errorCpf: 'flex' })
        }
        
    }

    render() {
        return (
            <ImageBackground style={styles.login.imageBackground}
            source={assets.bgLogin}
            >
               <Image source={assets.logoSmall} style={[{
                   marginTop: this.state.marginImage,
               }, styles.login.image]} />
                
               <View style={[{
                    marginTop: this.state.marginTextInput,
                }, styles.login.view]} >
                    <TextInput style={styles.login.textInput} 
                    maxLength={14} 
                    placeholder={'CPF'}
                    keyboardType={'numeric'}
                    onFocus={() => {this.setState({
                        marginImage: 40,
                        marginTextInput: 25,
                        marginButton: 15
                    })}}
                    onBlur={() => {this.setState({
                        marginImage: 100,
                        marginTextInput: 75,
                        marginButton: 30
                    })}}
                    onChangeText={cpf => {
                        this.setState({
                            cpf: cpf,  
                        });
                    }}
                    value={this.state.cpf}
                    />
                    <Icon
                        name={'id-card-o'}
                        color={"#094162"}
                        size={30}
                        style={styles.login.icon}
                    />
                </View>
                <Text style={{color: '#d80000', display: this.state.errorCpf }}>O CPF não está cadastrado!</Text>
                <TouchableOpacity style={[{
                    marginTop: this.state.marginButton,
                }, styles.login.button]}
                onPress={() => this.login(this.state.cpf)}
                >
                    <Text style={styles.login.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}


