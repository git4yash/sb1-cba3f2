import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import VideoCard from '../components/VideoCard';

const dummyVideos = [
  { id: '1', url: 'https://example.com/video1.mp4', likes: 1000, user: 'user1' },
  { id: '2', url: 'https://example.com/video2.mp4', likes: 2000, user: 'user2' },
  { id: '3', url: 'https://example.com/video3.mp4', likes: 1500, user: 'user3' },
];

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for you</Text>
      <FlatList
        data={dummyVideos}
        renderItem={({ item }) => <VideoCard video={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Feed;