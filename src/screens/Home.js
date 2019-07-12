import React, {Component} from 'react';
import { NetInfo , Text , FlatList , Dimensions , ScrollView , ActivityIndicator, AsyncStorage} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import News from '../components/News';
import Api from '../../Api';


const dim = Dimensions.get("window");

export default class Home extends Component {

    state = {
        news: null,
        load: false,
    }

    
    async componentDidMount(){
        this.setState({load: true});
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);

        NetInfo.getConnectionInfo().then(async state => {
            console.log(state);
            if(state.type !== 'none'){
                let userData = await Api.LoginApi.users(user.user.cpf);
                var userNew = {
                    user: userData.user,
                    auth: 1
                };
                await AsyncStorage.setItem('user', JSON.stringify(userNew) );
                user =  userNew;
            }
        });

        console.log(user,'user');

        if(!user){
            this.props.navigation.navigate('Login');
        }
        let news = await Api.News.home();
        this.setState({news});
        this.setState({load: false});
    }
    
    render() {
        return (
            <ScreenDefault>
                
                <ScrollView> 
                    <Text style={styles.usualy.title}>Home</Text>
                    <FlatList
                        data={this.state.news}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <News
                            title={item.titulo}
                            text={item.chamada}
                            image={{uri: 'http://www.lucianaguidolin.com.br/uploads/default/files/novidades/' + item.thumbnail}}
                            item={item}
                            navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={this.state.news}
                    />
                    <ActivityIndicator style={{
                        display: this.state.load ? 'flex'  : 'none',
                        marginTop: 50,
                    }} size={100} color={"#FFFFFF"} />
                </ScrollView>
            </ScreenDefault>
        );
    }
}