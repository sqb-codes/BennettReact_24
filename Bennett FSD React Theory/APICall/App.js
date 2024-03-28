import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const API_URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=695e07af402f4b119f0703e9b19f4683";

export default function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL);
      const articles = response.data.articles;
      // console.log(articles);
      setNews(articles);
    } catch (error) {
      console.log("Error :",error);
    }
  }

  const renderItem = ({item}) => (
    <View style={styles.itemWrapper}>
      <Text style={styles.itemTitle}>
        {item.title}
      </Text>
      <Text style={styles.itemDesc}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Data from News API...</Text>
      <FlatList style={styles.listWrapper} data={news} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 30,
    marginTop: 50
  },
  listWrapper: {
    
  },
  itemWrapper: {
    padding: 20,
    borderBottomColor: "red",
    borderBottomWidth: 2,
    width: "95%"
  },
  itemTitle: {
    fontWeight: "bold"
  },
  itemDesc: {

  }
});
