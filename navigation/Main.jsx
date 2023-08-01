
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavigation from './HomeNavigation';
import MoviesNavigation from './MoviesNavigation';
import SeriesNavigation from './SeriesNavigation';

const Tab = createBottomTabNavigator();

//Navegación general de la app, aqui se distribuyen las opciones ubicadas las tabs inferiores de la pantalla
const Main = () => {
    return (
        //creamos la barra de navegacion
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
              }}
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: true,
                activeTintColor: "blue",
            }}
        >
            {/*Menu de inico */}
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Movies"
                component={MoviesNavigation}
                options={{
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="movie" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Series"
                component={SeriesNavigation}
                options={{
                    tabBarLabel: 'Series',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="television" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Main