

import React, { useState } from "react";
import Layout from "../common/Layout";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { validateUserData } from "../../services/validation/signInValidater";
import { signInService } from "../../services/API/Auth/auth_API";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialErrors = {
    passwordError: { message: "", error: false },
    emailError: { message: "", error: false },
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const { signUpUser, token } = useAuthData()
  const getUserData = (e) => {
    setError(initialErrors);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userSignIn = async (e) => {
    e.preventDefault();
    const { success, errors } = validateUserData(userData);

    if (success) {

      setLoading(true);

      signUpUser(userData)
    } else {

      setLoading(false);
      setError({ ...error, ...errors });
    }
  };



  return (
    <Layout>
      <div className="signinouter">
        <div className="signinner">
          <h2 className="signup">Grosers</h2>
          <div className="signinform">
            <Input
              inputInfo={{
                type: "text",
                label: "Name",
                callback: getUserData,
                name: "name",
                error: error.emailError
              }}
              style={""}
            />
            <Input
              inputInfo={{
                type: "email",
                label: "Email",
                callback: getUserData,
                name: "email",
                error: error.emailError
              }}
              style={""}
            />
            <Input
              inputInfo={{
                type: "password",
                label: "Password",
                callback: getUserData,
                name: "password",
                error: error.passwordError
              }}
              className={""}
            />


            <Button
              title={!loading ? "Sign Up" : "Logging In"}
              callback={userSignIn}
              style={"signinbtn"}
            />

            <p className="signinNewAccount">Already have a account? <span onClick={() => {
              navigate(-1)
            }}>Log In</span></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
