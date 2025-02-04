import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');

  const handleForgotPassword = () => {
    if (input) {
      Alert.alert("Success", "One-time code sent to your " + (input.includes('@') ? 'email' : 'phone number'));
      setModalVisible(false);
    } else {
      Alert.alert("Error", "Please enter your email or phone number.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello</Text>
      <Text style={styles.subHeader}>Sign in to your account</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="gray" />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="gray" secureTextEntry />
      </View>
      
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Logged In!')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Create</Text>
        </TouchableOpacity>
      </View>


      {/* Bubble design */}
      <View style={styles.bubbleTopLeft}></View>
      <View style={styles.bubbleBottomRight}></View>

      {/* Forgot Password Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enter Email or Phone Number</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Email or Phone Number"
              value={input}
              onChangeText={setInput}
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleForgotPassword}>
              <Text style={styles.modalButtonText}>Send Code</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModal}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#058ad4',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  forgotPassword: {
    color: '#058ad4',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#058ad4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomText: {
    color: 'gray',
  },
  linkText: {
    color: '#058ad4',
    fontWeight: 'bold',
  },
  
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#058ad4',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeModal: {
    color: '#058ad4',
    marginTop: 10,
  },
  bubbleTopLeft: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 100,
    height: 100,
    backgroundColor: '#058ad4',
    borderRadius: 50,
  },
  bubbleBottomRight: {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 100,
    height: 100,
    backgroundColor: '#ff7f50',
    borderRadius: 50,
  },
});
