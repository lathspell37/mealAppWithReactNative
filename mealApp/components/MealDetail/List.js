import {View, Text, StyleSheet} from 'react-native'

function List({data}){
    return (
        data.map(dataPoint => (
            <View style={styles.listItem}>
                <Text style={styles.itemText} key={dataPoint} >{dataPoint}</Text>
            </View>
        )
            )
    )
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:'4%',
        paddingVertical:'2%',
        marginVertical:'4%',
        marginHorizontal:'8%',
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign: 'center'
    }

})