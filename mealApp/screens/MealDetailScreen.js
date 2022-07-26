import {Image, View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import {useLayoutEffect} from 'react';
import IconButton from '../components/IconButon';

function MealDetailScreen({route, navigation}){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){
        console.log('pressed');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton icon='star'
                color='white'
                onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]
    );

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}}
            style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability} 
            textStyle={styles.detailText} />

            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
            </View>
            </View>


        </ScrollView>
    )

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'25%'
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:'5%',
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    rootContainer:{
        marginBottom:'12%'
    }

})