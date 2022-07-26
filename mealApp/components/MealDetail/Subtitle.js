import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',

    },
    subtitleContainer:{
        padding:'3%',
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,    
        marginHorizontal:'8%',
        marginVertical:'2%'
    }
})