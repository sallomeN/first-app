import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');

  const handleCreateAccount = () => {
    if (phone) {
      Alert.alert("Success");
      setModalVisible(false);
    } else {
      Alert.alert("Error", "Please enter verification code.");
    }
  };

  const handleResendCode = () => {
    if (phone) {
      Alert.alert( "A new verification code has been sent to your phone number.");
    } else {
      Alert.alert( "A new verification code has been sent to your phone number.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Username" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Repeat Password" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
      </View>
      
      <TouchableOpacity style={styles.createButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or create account using social media</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-instagram" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bubble design */}
      <View style={styles.bubbleTopLeft}></View>
      <View style={styles.bubbleBottomRight}></View>

      {/* Create Account Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>We sent verification code on your phone number</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter 6-digit code"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleCreateAccount}>
              <Text style={styles.modalButtonText}>verify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleResendCode}>
            <Text style={styles.modalButtonText}>Resend</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#058ad4',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  createButton: {
    backgroundColor: '#058ad4',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#058ad4',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
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
    marginTop:10
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
