import { AsyncStorage } from "react-native";

export default Api = {
    LoginApi:{
        users: async (cpf) => {
            var data = false;
            if(cpf){
                let user = cpf.replace( /[^\d]+/g , '')
                await fetch('http://www.lucianaguidolin.com.br/app/users/' + user)
                .then((response) => response.json())
                .then(res => {
                    data = res;
                }).catch(err => {
                    console.log(err);
                    alert('Conecte à internet para carregar!');
                });
            }
            return data;
        },
    },
    
    News: {
        home: async () => {
            var data = false;
            await fetch('http://www.lucianaguidolin.com.br/app/news')
            .then((response) => response.json())
            .then(res => {
                data = res;
            }).catch(err => {
                console.log(err);
                alert('Conecte à internet para carregar!');
            });
            return data;
        },  
    },
    Sobre: async () => {
        var data = false;
        await fetch('http://www.lucianaguidolin.com.br/app/sobre')
        .then((response) => response.json())
        .then(res => {
            data = res;
        }).catch(err => {
            console.log(err);
            alert('Conecte à internet para carregar!');
        });
        return data;
    },
    Vacinas: async () => {
        var data = false;
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);
        await fetch('http://www.lucianaguidolin.com.br/app/vacinas/' + user.user.id )
        .then((response) => response.json())
        .then(res => {
            data = res;
        }).catch(err => {
            console.log(err);
            alert('Conecte à internet para carregar!');
        });
        return data;
    },
    Consultas: async () => {
        var data = false;
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);
        await fetch('http://www.lucianaguidolin.com.br/app/consultas/' + user.user.id )
        .then((response) => response.json())
        .then(res => {
            data = res;
        }).catch(err => {
            console.log(err);
            alert('Conecte à internet para carregar!');
        });
        return data;
    },
    Politica: async () => {
        var data = false;
        await fetch('http://www.lucianaguidolin.com.br/app/politica')
        .then((response) => response.json())
        .then(res => {
            data = res;
        }).catch(err => {
            console.log(err);
            alert('Conecte à internet para carregar!');
        });
        return data;
    },
}