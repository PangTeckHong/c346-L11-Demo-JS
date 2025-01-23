import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://jsonhost.com/json/4fe72bd5d20b8c93ebeb5eeb4007bbdc")
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            setMyData(myJson);
        })
  }, []);

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
