import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TelaAcesso() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const emailValido = email.includes('@');
    const senhaValida = senha.length > 6;

    if (emailValido && senhaValida) {
      console.log("✅ Acesso autorizado para:", email);
      console.table({ email, senha });
    } else {
      console.log("❌ Falha no login: Verifique os critérios de validação");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
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
        
        {email.length > 0 && (
          <Text style={styles.botaoTexto}>
            Logando como: <Text style={styles.botaoTexto}>{email}</Text>
          </Text>
        )}

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha (min. 7 caracteres)"
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
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
    color: '#ffffff',
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
  },
  textoAjuda: {
    color: '#71ff97ff',
    fontSize: 12,
    marginTop: 5,
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
});