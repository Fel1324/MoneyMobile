import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home/home";
import RegExpense from "./src/screens/reg-expense/reg-expense";

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="expense" component={RegExpense} options={{
            title: "despesa",
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
