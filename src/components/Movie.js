import React from 'react'
import { View, StyleSheet, Image, Pressable} from 'react-native';
import {DateTime} from 'luxon';

import constants from '../utils/constants';

import { FontAwesome } from '@expo/vector-icons';
import Text from '../components/TextCustom';

const Luxon = DateTime.local().setLocale('es');

const imageWidth = 99;
const imageMargin = imageWidth  + 24;

const imageHeight = 133;
const cardTop = imageHeight  / 2 - 10;

let iconName = 'star';



const Movie = ({ movie , navigation}) => {

    const { title, vote_average, poster_path, popularity, release_date } = movie;

    const date = DateTime.fromISO(release_date).setLocale('es').toFormat('MMM, y');

    const loadMovie = () => {
        navigation.navigate(constants.SCREEN.DETAILS, {movie});
    }

    return (
        <Pressable style={styles.card} onPress={loadMovie}>
            <Image 
                style={styles.poster}
                source={{uri:`https://image.tmdb.org/t/p/original/${poster_path}`}} />
            <View style={{flex: 1, marginLeft: imageMargin}}>
            <View style={styles.titleContainer}>
					<Text fontFamily="bold" numberOfLines={1} style={styles.title}>
						{title}
					</Text>
					<Text fontFamily="bold" style={styles.votes}>
						{vote_average}
					</Text>
                    <FontAwesome 
                        name={iconName} 
                        size={18} 
                        color={constants.COLORS.WARNING}
                    />
				</View>
				<Text style={styles.popularity}>{popularity.toFixed(0)}</Text>
				<Text style={styles.release_date}>{date}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: constants.COLORS.LIGHT,
        marginTop: cardTop,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 30,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "flex-end",
        position:"relative",
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    title: {
        color: constants.COLORS.TEXT_COLOR,
        fontWeight: "bold",
        flexGrow: 1,
        flexWrap: "wrap",
        flexShrink: 2,
        marginRight: 4,
    },
    votes: {
        color: constants.COLORS.WARNING,
        fontWeight: "bold",
        marginRight:5,
    },
    popularity: {
        color: constants.COLORS.PRIMARY,
        borderColor: constants.COLORS.PRIMARY,
        borderWidth: 2,
        padding: 2,
        width: 50,
        borderRadius: 5,
        textAlign: "center",
        marginBottom: 8,
        marginTop: 8,
        fontWeight: "bold",
        fontSize: 10,
    },
    release: {
        fontSize: 12,
        textTransform: "capitalize"
    },
    poster: {
        width: imageWidth,
        height: 133,
        borderRadius: 16,
        position: "absolute",
        bottom: 20,
        left: 20,
    }
});

export default Movie;


// para cargar imagenes: https://image.tmdb.org/t/p/original/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg
// para cargar imagenes de fondo: https://image.tmdb.org/t/p/original//lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg
