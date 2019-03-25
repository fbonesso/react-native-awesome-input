import React from "react";
import PropTypes from "prop-types";

import {
  View,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";

import { TextInputMask } from 'react-native-masked-text';
import { Icon } from 'expo';

const AwesomeInput = props => {
  const {
    title,
  } = props;

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, {
        backgroundColor: props.iconBackgroundColor,
        borderTopLeftRadius: props.borderRadius,
        borderBottomLeftRadius: props.borderRadius
      }]}>
        <Icon.FontAwesome
          style={styles.icon}
          name={props.iconName}
          size={22}
        />
      </View>
      {props.type == "default" ?
        <TextInput
          style={styles.input}
          {...props}
        />
      :null}
      {props.type == "phone" ?
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
      {props.type == "cpf" ?
        <TextInputMask
          type={'cpf'}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
      {props.type == "cnpj" ?
        <TextInputMask
          type={'cnpj'}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
      {props.type == "money" ?
        <TextInputMask
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: '',
            suffixUnit: ''
          }}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
      {props.type == "number" ?
        <TextInputMask
          type={'only-numbers'}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
      {props.type == "cep" ?
        <TextInputMask
          type={'zip-code'}
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      :null}
    </View>
  );
};

AwesomeInput.propTypes = {
  borderRadius: PropTypes.number,
  iconName: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  type: PropTypes.string,
};

AwesomeInput.defaultProps = {
  borderRadius: 5,
  iconName: "pencil",
  iconBackgroundColor: "#333",
  type: "default",
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 20,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  iconContainer: {
    width: 50,
    margin: -10,
    height: 50,
    marginRight: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff'
  },
  input: {
    paddingLeft: 10,
    height: 50,
    width: Dimensions.get("window").width - 70,
  }
});

export default AwesomeInput;
