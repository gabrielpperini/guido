import { StyleSheet , Dimensions } from "react-native"

const dim = Dimensions.get("window");


export default styles = {
    screenDefault: {
            backgroundColor: '#F2EEE5',
            flex: 1,     
            // opacity: 0.5 
    },

    header: StyleSheet.create({
        view:{
            flexDirection: 'row',
            width: dim.width,
            height: 80,
            backgroundColor: '#5ADDB1',
            justifyContent: "center",
            alignItems: 'center',
        },
        navicon: {
            position: 'absolute',
            left: 0,
            paddingHorizontal: 30,
            paddingVertical: 30
        }
    }),

    usualy: StyleSheet.create({
        title: {
            textAlign: 'center',
            fontSize: 40,
            color: '#094162',
            marginTop: 5
        },
        scrollView: {
            marginHorizontal: 15, 
        },
        flatList: {
            marginTop: 20
        }
    }),

    news: StyleSheet.create({
        view: {
            width: dim.width - 40,
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 15,
        },
        title: {
            color: '#094162',
            fontSize: 25,
            textAlignVertical: 'center',
            fontFamily: 'Bubblegum Sans Regular'
        },
        text: {
            color: '#737373',
            fontSize: 16,
            textAlign: 'justify',
            fontFamily: 'Cabin Regular',
            marginTop: 5,
        },
        image: {
            width: dim.width - 70 , 
            height: 155,
            borderRadius: 5,
            marginTop: 5,
        },
        touchable: {
            width: '40%',
            paddingVertical: 15,
        },
        textButton: {
            textAlign: 'left',
            paddingLeft: 5,
            textAlignVertical: 'center',
            color: '#094162',
            fontSize: 20,
            fontFamily: 'Bubblegum Sans Regular'
        }
    }),
    
    menu: StyleSheet.create({
        view: {
            backgroundColor: 'white',
            marginTop: 10
        },
    }),

    buttonMenu: StyleSheet.create({
        text: {
            color: '#094162',
            fontSize: 30,
            textAlignVertical: 'center',
            fontFamily: 'Bubblegum Sans Regular',
            marginLeft: 5
        },
        button: {
            paddingVertical: 10,
            paddingLeft: 80,
            paddingRight: 20,
            flexDirection: 'row',
            alignItems:'center'
        },
        icon: {
            position: 'absolute',
            left: 50,
            textAlign: 'center',
            textAlignVertical: 'center',
        }
    }),

    sobre: StyleSheet.create({
        text: {
            color: '#737373',
            fontSize: 18,
            textAlign: 'justify',
            fontFamily: 'Cabin Regular',
            marginVertical: 20,
        },
        textTitulo: {
            color: '#094162',
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            fontFamily: 'Bubblegum Sans Regular',
            marginVertical: 10
        },
        image: {
            width: dim.width - 40 , 
            borderRadius: 5,
            marginTop: 20
        },
        view: {
            marginHorizontal: 20,
        }
    }),

    vacinas: StyleSheet.create({
        component: {
            width: dim.width - 30,
            marginTop: 20,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        vacinaName: {
            color: '#094162',
            fontSize: 30,
            textAlignVertical: 'center',
            fontFamily: 'Bubblegum Sans Regular',
        },
        date: {
            color: '#737373',
            fontSize: 18,
            textAlignVertical: 'center',
            fontFamily: 'Cabin Regular',
        }
    }),

    login: StyleSheet.create({
        imageBackground: {
            position: "absolute",
            left: 0,
            top: 0,
            height :dim.height,
            width: dim.width,
            alignItems: 'center',          
        },
        image: {
            width: 150,
            height: 150,
        },
        view: {
            flexDirection :'row',
            height: 60,
            width: dim.width * .8,
            borderColor: '#094162',
            borderWidth: 3,
            borderRadius: 30,
            alignItems: 'center',
        },
        textInput: {
            marginTop: 8,
            width: (dim.width*.8) - 50, 
            height: 60,
            marginLeft: 50,
            fontSize: 25,
            textAlignVertical: 'center',
            color: '#094162'
        },
        icon: {
            position: 'absolute',
            paddingHorizontal: 15,
        },
        button: {
            paddingVertical :10,
            paddingHorizontal: 40,
            backgroundColor: '#094162',
            borderRadius: 30,
        },
        buttonText: {
            color: 'white',
            textTransform: 'uppercase',
            fontSize: 24,
        }
    }),

    consultas: StyleSheet.create({
        component: {
            width: dim.width - 30,
            marginTop: 20,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 15,
        },
        barTop: {
            width: dim.width - 60,
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 10
        },
        consultaName: {
            color: '#094162',
            fontSize: 20,
            textAlignVertical: 'center',
            fontFamily: 'Bubblegum Sans Regular',
        },
        date: {
            color: '#737373',
            fontSize: 16,
            textAlignVertical: 'center',
            fontFamily: 'Cabin Regular',
        },
        descriptionText: {
            marginTop: 10,
            color: '#737373',
            fontSize: 16,
            fontFamily: 'Cabin Regular',
            textAlign: 'justify',
        }
    }),

    prontuarios: StyleSheet.create({
        component: {
            alignItems: 'center',
            marginVertical: 20,
        },
        button: {
            width: 200,
            paddingVertical: 25,
            backgroundColor: '#5ADDB1',
            borderRadius: 70,
        },
        buttonText: {
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'Cabin Regular',            
        }
    }),
    
};