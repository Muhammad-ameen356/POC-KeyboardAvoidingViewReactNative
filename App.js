import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import FormInput from './src/components/FormInput';
import HeaderTop from './src/components/Header';
import {mockFormData} from './src/__fixtures__/app';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <SafeAreaView>
        <HeaderTop />
      </SafeAreaView>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView>
          <ScrollView>
            {mockFormData.map(({placeholder, label}) => (
              <FormInput label={label} placeholder={placeholder} />
            ))}
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="useless placeholder"
              // keyboardType="numeric"
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
