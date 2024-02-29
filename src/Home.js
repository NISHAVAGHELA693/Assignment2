import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
import { BG1} from './assests';
import Scale from './Scale';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    }
     catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardBody}>{item.body}</Text>
    </View>
  );
  const addNewItem = (newItem) => {
    setData([...data, newItem]);
  };

  return (
    <ImageBackground source={BG1}  style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
     <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItemForm', { addNewItem })}
      >
        <Text style={styles.buttonText}>Add New Item</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F6FDDF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:"center",
    marginTop:Scale(20),
    color:"#DD5D"
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  itemTitle: {
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  itemBody: {
    fontSize: Scale(16),
    marginTop: 8,
  },
  addButton: {
    color: '#DD5D',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: Scale(5),
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    marginBottom:Scale(16),
    marginTop:Scale(10),
  },
  
  cardTitle: {
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  
  cardBody: {
    fontSize: Scale(16),
    marginTop: Scale(8),
  },
  buttonText:{
    fontSize:18,
    color:"#DD5D",
    textAlign:"center",
    justifyContent:"center"
  }
});

export default Home;
