import { FlatList,StyleSheet,View } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';




function CategoriesScreen({navigation}){

    function renderCategoryItem(itemData){

        function pressHandler(){
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id   
            });
        }
    
        return (<CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
        />);
    }

    return(
        <View>
            <FlatList
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}
            renderItem={renderCategoryItem.bind()}
            numColumns={2} />        
        </View>

    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({

})