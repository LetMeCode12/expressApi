import React, { Component } from "react";
import "./Login.scss";
import { Button } from "reactstrap";
import MyInput from "../../components/input/Input";
import { Formik, Form, Field } from "formik";
import { fetchLogin } from "./LoginUtils";

class Login extends Component {
  onSubmit = (value) => {
    const { history } = this.props;
    fetchLogin(value,history);
  };

  onValid = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Pole wymagane";
    }
    if (!values.password) {
      errors.password = "Pole wymagane";
    }

    return errors;
  };

  render() {
    return (
      <div className="Login">
        <h2>Logowanie</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={this.onSubmit}
          validate={this.onValid}
        >
          <Form>
            <div className="my-3">
              <Field
                name="username"
                label="Nazwa użytkownika:"
                component={MyInput}
              />
              <Field
                name="password"
                type="password"
                label="Hasło:"
                component={MyInput}
              />
            </div>
            <Button type="submit" color="primary">Login</Button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Login;
