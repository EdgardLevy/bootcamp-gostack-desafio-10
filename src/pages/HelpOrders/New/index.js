import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {Container, Answer} from './styles';
import Button from '~/components/Button';

export default function NewHelpOrder() {
  const [loading, setLoading] = useState(false);
  function handleSend() {}
  return (
    <Background>
      <Container>
        <Answer placeholder="Inclusa seu pedido de auxilio" />
        <Button loading={loading} onPress={handleSend}>
          Enviar pedido
        </Button>
      </Container>
    </Background>
  );
}

NewHelpOrder.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
