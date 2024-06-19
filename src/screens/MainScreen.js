import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from '../features/content/contentSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.content.items);
    const status = useSelector((state) => state.content.status);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchContent(1));
    }, [dispatch]);

    const handleLoadMore = () => {
        if (status !== 'loading') {
            dispatch(fetchContent());
        }
    };

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: `https://test.create.diagnal.com/images/${item['poster-image']}` }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={30} color="#fff" />
                <Text style={styles.text}>Romantic Comedy</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#fff"
                    onChangeText={setSearchTerm}
                />
            </View>
            <FlatList
                data={filteredItems}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                numColumns={3}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={status === 'loading' ? <ActivityIndicator size="large" color="#fff" /> : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
        paddingTop: 50,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        color: '#fff',
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        marginTop: 5,
        fontFamily: 'TitilliumWeb-Regular',
        alignSelf:'flex-start',
    },
    text: {
        color: '#fff',
        marginTop: 5,
        fontFamily: 'TitilliumWeb-Regular', 
        fontSize:20
    }
});

export default MainScreen;