import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DATA_LEVEL_OVERVIEW} from '../consts/lessons';

const LessonsList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA_LEVEL_OVERVIEW}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                switch (item) {
                  case 'Lesson0':
                    navigation.navigate('Lesson 0');
                    break;
                  default:
                    alert(console.log(item));
                }
              }}
            >
              <Text style={styles.lessonTitle}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lessonTitle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default LessonsList;
