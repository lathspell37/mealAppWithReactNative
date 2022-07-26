import { StyleSheet, Button, Text, StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
{           headerStyle:{ backgroundColor:'#351401' },
            headerTintColor: 'white',
            contentStyle:{ backgroundColor:'#3f2f25' }}
        }>
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }} />
          <Stack.Screen name="MealOverview" component={MealsOverviewScreen}
           />
           <Stack.Screen name="MealDetail" component={MealDetailScreen} 
           options={
{           headerRight: () => { 
            return <Button title='Tap me!' />}
           }
           }/>
        </Stack.Navigator>        
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
