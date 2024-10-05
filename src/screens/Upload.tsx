import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    // Implement file upload logic here
    console.log('Uploading file:', file);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload a Video</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={() => setFile('dummy_file')}>
        <Icon name="upload" size={24} color="#fff" style={styles.uploadIcon} />
        <Text style={styles.uploadButtonText}>Choose a video</Text>
      </TouchableOpacity>
      {file && (
        <TouchableOpacity style={styles.submitButton} onPress={handleUpload}>
          <Text style={styles.submitButtonText}>Upload Video</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  uploadButton: {
    backgroundColor: '#8b5cf6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  uploadIcon: {
    marginRight: 8,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#10b981',
    padding: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Upload;