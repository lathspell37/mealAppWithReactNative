import {CATEGORIES} from '../data/dummy-data.js';
import {FlatList} from 'react-native';
import CategoryGridTile from '../mealApp/components/CategoryGridTile.js';

function renderCategoryItem(itemData){
    return (       
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color} />    
    );
}

function CategoriesScreen() {
    return(<FlatList data={CATEGORIES} 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem} />);
}

export default CategoriesScreen;