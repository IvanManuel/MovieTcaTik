
import { View, Text, ScrollView, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

//Screen de la sección de películas
const MoviesScreen = () => {

  {/* Traemos la información de todas las películas a través del customhook useMovies */}
  const { nowPlaying, popular, topRated, upcoming } = useMovies();

  return (
    <ScrollView>
      <View>
      <Text>Movie</Text>

      {/* Carrusel Principal con la data nowPlaying */}
      <View style={{ marginTop: 20, height: 440 }}>
                        <Carousel 
                            data={ nowPlaying }
                            renderItem={ ({ item }) => <MoviePoster movie={ item } /> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}                            
                        />
                    </View>

      {/* Películas populares */}
      <HorizontalSlider title="Popular" movies={ popular } />

      {/* Películas mejor valoradas */}
      <HorizontalSlider title="Top Rated" movies={ topRated } />

      {/* Películas por estrenar próximamente */}
      <HorizontalSlider title="Upcoming" movies={ upcoming } />

    </View>
    </ScrollView>
  )
}

export default MoviesScreen;

