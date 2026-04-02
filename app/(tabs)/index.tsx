import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TelaAcesso() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email.includes('@') && senha.length > 6) {
      console.log("✅ Acesso autorizado para: " + email + ", Usando a senha: " + senha);
    } else {
      console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source = {require('../../assets/images/logo.png')}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>Acesso ao Sistema</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>

        <TextInput
          style={styles.input}
          placeholder="exemplo@email.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha (min. 6 caracteres)"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={handleLogin}>
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#068e8eff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#71ff97ff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#ffffffff',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#5f12cbff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
