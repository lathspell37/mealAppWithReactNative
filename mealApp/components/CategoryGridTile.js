import { Pressable, View, Text, StyleSheet,Platform } from 'react-native';

function CategoryGridTile({title, color, onPress}){


    return (
        <View style={styles.gridItem}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null] } 
            android_ripple={{color:'#ccc'}}
            onPress={onPress}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                  <Text style={styles.title}>{title}</Text>  
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem:{      
        flex:1,  
        margin: '5%',
        height: 150,
        borderRadius: 8,
        elevation:4,
        shadowColor:'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:'white', //in ios elevation needs backcolor
        overflow:Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:'8%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    title:{
        fontWeight:'bold',
        fontSize:16
    },
    buttonPressed:{
        opacity:0.5
    }
})