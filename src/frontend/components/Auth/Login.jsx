import React, { useState } from "react";
import Layout from "../common/Layout";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { validateUserData } from "../../services/validation/signInValidater";


import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
const LogIn = () => {

  const { loginUser, token } = useAuthData()
  const initialErrors = {
    passwordError: { message: "", error: false },
    emailError: { message: "", error: false },
  };
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(initialErrors);
  const [loading, setLoading] = useState(false);

  const getUserData = (e) => {
    setError(initialErrors);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userSignIn = async (e) => {
    e.preventDefault();
    const { success, errors } = validateUserData(userData);

    if (success) {
      loginUser(userData)
    } else {

      setLoading(false);
      setError({ ...error, ...errors });
    }
  };




  const signInAsGuest = (guestData) => {
    const { success, errors } = validateUserData(guestData);

    if (success) {
      loginUser(guestData)
    } else {

      setLoading(false);
      setError({ ...error, ...errors });
    }
  }



  return (
    <Layout>
      <div className="signinouter">
        <div className="signinner">

          <h2 className="signup">Grosers</h2>
          <div className="signinform">
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
              title={!loading ? "Log In" : "Logging In"}
              callback={userSignIn}
              style={"signinbtn"}
            />
            <Button
              title={"Sign In as Guest"}
              callback={() => signInAsGuest({
                email: "rohitbahuguna.work@gmail.com",
                password: "iamrohitbahuguna",
              })}
              style={"signinguest"}
            />
            <p className="signinNewAccount">New here? <Link to="/signup"><span>Create account</span></Link> </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LogIn;
