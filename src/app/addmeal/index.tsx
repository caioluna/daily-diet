import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { Header } from '@/components/Header';
import {
  ButtonTitle,
  Container,
  CreateMealButton,
  Form,
  FormInput,
  FormText,
} from './styles';
import theme from '@/theme';

export default function AddMeal() {
  const [meal, setMeal] = useState({
    id: '',
    name: '',
    description: '',
    date: '',
    time: '',
    diet: '',
  });

  const changeInput = (
    key: string,
    value: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setMeal({ ...meal, [key]: value });
  };

  return (
    <Container>
      <Header link="/" color={theme.colors.gray_2} title="Nova refeição" />
      <Form>
        <View>
          <View>
            <FormText>Nome</FormText>
            <FormInput
              onChange={(text) => changeInput('name', text)}
              value={meal.name}
            />
          </View>

          <View>
            <FormText>Descrição</FormText>
            <FormInput
              style={{ height: 120 }}
              multiline
              maxLength={255}
              onChange={(text) => changeInput('description', text)}
              value={meal.description}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <FormText>Data</FormText>
              <FormInput
                onChange={(text) => changeInput('date', text)}
                value={meal.date}
              />
            </View>

            <View style={{ flex: 1 }}>
              <FormText>Hora</FormText>
              <FormInput
                onChange={(text) => changeInput('time', text)}
                value={meal.time}
              />
            </View>
          </View>

          <View>
            <FormText>Está dentro da dieta?</FormText>
            <FormInput
              onChange={(text) => changeInput('diet', text)}
              value={meal.diet}
            />
          </View>
        </View>

        <CreateMealButton onPress={() => {}}>
          <ButtonTitle>Cadastrar refeição</ButtonTitle>
        </CreateMealButton>
      </Form>
    </Container>
  );
}
