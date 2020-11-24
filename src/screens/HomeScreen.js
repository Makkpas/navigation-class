import React, {useEffect} from 'react'
import { View, Text, Pressable, StyleSheet, FlatList, ScrollView} from 'react-native'

import { Feather } from '@expo/vector-icons'; 

import axios from '../utils/axios';

import constants from '../utils/constants';

import Movie from '../components/Movie'
import { fontsName } from '../utils/fonts';

export const HomeScreen = ({navigation}) => {

    const [movies, setMovies] = React.useState([]);
    const [activeTab, setActiveTab] = React.useState('popular');

    useEffect(() => {
        axios.get(`movie/popular?api_key=${constants.API_KEY}&language=es-ES`)
        .then((res) =>{
            setMovies(res.data.results);
        })
        .catch((err) => console.log(err)); 
    },[setMovies]);


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Movies</Text>
                <Feather name="search" size={18} color="black" />
            </View>
            <ScrollView style={styles.tabstop} horizontal={true}>
				<Pressable style={styles.tab} onPress={() => setActiveTab('popular')}>
					<Text
						style={[
							styles.tabText,
							{
								color:
									activeTab === 'popular'
										? constants.COLORS.TEXT_COLOR
										: constants.COLORS.TEXT_COLOR2,
							},
						]}
					>
						Now Popular
					</Text>
					{/* {activeTab === 'popular' && <ActiveIndicator />} */}
				</Pressable>
				<Pressable style={styles.tab} onPress={() => setActiveTab('upcoming')}>
					<Text
						style={[
							styles.tabText,
							{
								color:
									activeTab === 'upcoming'
										? constants.COLORS.TEXT_COLOR
										: constants.COLORS.TEXT_COLOR2,
							},
						]}
					>
						The Upcoming
					</Text>
					{/* {activeTab === 'upcoming' && <ActiveIndicator />} */}
				</Pressable>
			</ScrollView>
            <FlatList
            style={styles.list}
                data={movies}
                renderItem={({ item }) => <Movie {...{ movie: item , navigation: navigation}} />}
                keyExtractor = {(item) =>`${item.id}`}
            
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        marginTop: 32,

    },
    list: {
        paddingHorizontal: 25,
    },
    titleContainer:{
        paddingHorizontal:25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        marginBottom: 8,
    },
    title:{
        fontFamily: fontsName.ETHNOCENTRIC,
        fontSize: 24,
    },
	tabstop: {
		marginVertical: 8,
		marginLeft: 25,
	},
	tab: {
		marginRight: 25,
	},
	tabText: {
		fontSize: 14,
		fontFamily: fontsName.BOLD,
	},
});
