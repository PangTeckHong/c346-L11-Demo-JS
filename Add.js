import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
          onPress={()=>{
              let myData = JSON.parse(route.params.datastr);
              let item = {name:name};
              myData.push(item);
              fetch('https://jsonhost.com/json/4fe72bd5d20b8c93ebeb5eeb4007bbdc', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'ncjvcz9d0td3r5yco9vatifjt6jjgxnj'
                  },
                  body: JSON.stringify(myData),
              })
                .then((response) =>{
                    navigation.navigate('Home');
                })
          }
          }
      />
    </View>
  );
};

export default Add;
