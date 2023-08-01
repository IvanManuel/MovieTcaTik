import React, { useState } from 'react';
import { Text } from 'react-native';

import { VStack, Button, Input, NativeBaseProvider, Icon, Center, ScrollView } from 'native-base';

import { HorizontalSlider } from '../components/';
import { useMovies, useSeries, useSearch } from '../hooks';

//Screen princinpal de la aplicación
const HomeScreen = () => {

  {/* sección de hooks y funciones */}
  const [search, setSearch] = React.useState();
  const [query, setQuery] = useState()

  const { stateSearch } = useSearch(query);
  const { popular } = useMovies();
  const { topRated} = useSeries();

  {/* esta función maneja la petición 'buscar' luego de que el usuario lo solicita */}
  const onSubmit = () => {
    if(!!stateSearch){
      setQuery('');
    }
    setQuery( search );
  };

    return (
      <NativeBaseProvider>
        <ScrollView style={{ marginTop: 70 }}>
        <Center >

        {/* Buscador */}

        <VStack width="90%" maxW="300px">
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Movie TcaTik App</Text>
        <Input placeholder="Type the Movie or Serie" onChangeText={value => setSearch({
          ...search,
          name: value
        })} />
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Search Movies & Series
        </Button>
  
        {
          stateSearch.length > 1
          ? (
            <HorizontalSlider title="Search Result" movies={ stateSearch } />
          )
          : (null)
        }
  
        {/* Películas más buscadas */}
        <HorizontalSlider title="Most Popular Movies" movies={ popular } />

        {/* Series más vistas */}
        <HorizontalSlider title="Top Rated Series" movies={ topRated } />
  
      </VStack>
        </Center>
        </ScrollView>
      </NativeBaseProvider>
    )
}

export default HomeScreen;