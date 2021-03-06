import React, {useState, useRef} from 'react';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordInput = useRef();

  function handleSubmit() {
    // SAGA(email, password)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => passwordInput.current.focus()}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          ref={passwordInput}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
