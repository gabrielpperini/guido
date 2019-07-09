import React, {Component} from 'react';
import { View , Text , FlatList , Dimensions , ScrollView , Image, AsyncStorage} from 'react-native';
import styles from '../styles';
import assets from '../../assets';
import ScreenDefault from './screendefault';
import News from '../components/News';


const dim = Dimensions.get("window");

const news = [
    {
        id: 1,
        title: "News Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.",
    },
    {
        id: 2,
        title: "News Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.",
        image: assets.news
    },
    {
        id: 3,
        title: "News Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.",
    },
    {
        id: 4,
        title: "News Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel rhoncus lorem. Aliquam sed orci sit amet eros accumsan viverra. Donec consequat enim vel mauris gravida faucibus. Suspendisse id egestas purus.",
        image: assets.news
    },
]

export default class Home extends Component {

    async componentDidMount(){
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);
        if(!user){
            this.props.navigation.navigate('Login');
        }
    }
    
    render() {
        return (
            <ScreenDefault>
                <ScrollView> 
                    <Text style={styles.usualy.title}>Home</Text>
                    <FlatList
                        data={news}
                        style={styles.usualy.flatList}
                        renderItem={({ item }) => (
                            <News
                            title={item.title}
                            text={item.text}
                            image={item.image}
                            />
                        )}
                        keyExtractor={item => item.id}
                        extraData={news}
                    />
                </ScrollView>
            </ScreenDefault>
        );
    }
}