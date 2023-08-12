import { useEffect, useReducer, useRef } from "react";
import { useAuthContext } from "../../contexts/useAuthContext";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const initialState = {
  enteredEmail: "",
  enteredPassword: "",
  passwordIsValid: "",
  emailIsValid: "",
  formIsValid: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return {
        ...state,
        enteredEmail: action.payload.email,
        emailIsValid: action.payload.validateEmail,
      };
    case "validateEmail":
      return {
        ...state,
        emailIsValid: action.payload.validateEmail,
      };
    case "password":
      return {
        ...state,
        enteredPassword: action.payload.password,
        passwordIsValid: action.payload.validatePassword,
      };
    case "validatePassword":
      return {
        ...state,
        passwordIsValid: action.payload.validatePassword,
      };
    case "validateForm":
      return {
        ...state,
        formIsValid: action.payload.validateForm,
      };
    default:
      throw new Error("Unknown Action!");
  }
}

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loginHandler } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    enteredEmail,
    enteredPassword,
    emailIsValid,
    passwordIsValid,
    //formIsValid,
  } = state;

  useEffect(
    function () {
      const timer = setTimeout(function () {
        dispatch({
          type: "validateForm",
          payload: {
            validateForm: emailIsValid && passwordIsValid,
          },
        });
      }, 500);

      return function () {
        clearTimeout(timer);
      };
    },
    [emailIsValid, passwordIsValid],
  );

  const emailChangeHandler = (event) => {
    dispatch({
      type: "email",
      payload: {
        email: event.target.value,
        validateEmail: event.target.value.includes("@"),
      },
    });
  };

  const passwordChangeHandler = (event) => {
    dispatch({
      type: "password",
      payload: {
        password: event.target.value,
        validatePassword: event.target.value.trim().length > 6,
      },
    });
  };

  const validateEmailHandler = () => {
    dispatch({
      type: "validateEmail",
      payload: {
        validateEmail: enteredEmail.includes("@"),
      },
    });
  };

  const validatePasswordHandler = () => {
    dispatch({
      type: "validatePassword",
      payload: {
        validatePassword: enteredPassword.trim().length > 6,
      },
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!emailIsValid) return emailRef.current.activate();
    if (!passwordIsValid) return passwordRef.current.activate();
    loginHandler(enteredEmail, enteredPassword);
  };

  return (
    <Card className="mx-auto my-8 w-[90%] max-w-2xl p-8">
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          id="email"
          label="E-Mail"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailIsValid}
        />

        <Input
          ref={passwordRef}
          type="password"
          id="password"
          label="Password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
        />
        <div className="text-center">
          {/* <Button type="submit" className="" disabled={!formIsValid}>
            Login
          </Button> */}
          <Button type="submit" className="">
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
