import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    console.log("Editing completed");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      console.log("result : ", response);
      setResults(response.data.businesses);
    } catch (error) {
      console.log("error : ", error);
      Alert.alert("Oops !", `${error}`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
        {
          text: "Retry",
          onPress: () => searchApi(searchTerm),
          style: "default",
        },
      ]);
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>SearchScreen</Text>
      <Text>
        Found {results.length} results for your search "{term}" !
      </Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
