import React from 'react'
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import { CastItem } from './';

//Componente que carga los detalles de las películas
export const MovieDetails = ({ movieFull, cast }) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

            {/* Recibe los parámetros movieFull y cast a través de props, y rellena la ficha con los datos */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name="star-outline"
                        color="grey"
                        size={ 16 }
                    />

                    <Text> { movieFull.vote_average }</Text>

                    <Text style={{ marginLeft: 5 }}>
                         - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16 }}>
                    { movieFull.overview }
                </Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    { currencyFormatter.format( movieFull.budget, { code:'USD' }) }
                </Text>
                

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100   }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                    Actores
                </Text>

                {/* Hace una lista renderizando el componente CastItem con las fichas de los actores del reparto */}
                <FlatList 
                    data={ cast }
                    keyExtractor={ (item, index ) => item.id.toString() + index }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
                />
                

            </View>

        </>
    )
}