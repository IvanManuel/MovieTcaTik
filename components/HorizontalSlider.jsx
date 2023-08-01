import React from 'react'
import { FlatList, Text, View } from 'react-native';

import { MoviePoster } from './';

//Componente slider horizontal para la renderización de las pelis y series
export const HorizontalSlider = ({ title, movies }) => {

    return (
        <View style={{ 
            height: ( title ) ? 260 : 220
        }}>

            {
                title && <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>{ title }</Text>
            }

            <FlatList
                data={ movies }
                renderItem={ ({ item }) => (
                    <MoviePoster movie={ item } width={ 140 } height={ 200 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />

        </View>
    )
}