import React from "react";
import { Formik, useField } from "formik";
import { View, Button, StyleSheet } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 13,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name); // 'field' la info del campo, 'meta' metainfo, 'helpers' para actualizar el campo
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  console.log(errors);

  return errors;
};

export default function LogInPage() {
  return (
    <Formik
      validate={validate}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log in" />
          </View>
        );
      }}
    </Formik>
  );
}
