

import React, { useState } from "react";
import Layout from "../common/Layout";
import Input from "../custom/Input";
import Button from "../custom/Button";
import { validateUserData } from "../../services/validation/signInValidater";
import { signInService } from "../../services/API/Auth/auth_API";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthData } from "../../contexts/AuthContext/authContext";
import Logo from "../common/Logo";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialErrors = {
    passwordError: { message: "", error: false },
    emailError: { message: "", error: false },
  };
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false)

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

  console.log(userData)

  return (
    <Layout>
      <div className="flex justify-center items-center ">
        <div className="border rounded-xl shadow h-[55vh] flex flex-col gap-5 px-5 py-2 ">

          <div className="px-10">
            <Logo />
          </div>
          <div className="flex flex-col gap-5">
            <Input
              inputInfo={{
                type: "text",
                label: "Name",
                callback: getUserData,
                value: userData.name,
                name: "name",
                error: error.emailError
              }}
              style="border border-gray-500 px-1 py-2 rounded "
            />
            <Input
              inputInfo={{
                type: "email",
                label: "Email",
                callback: getUserData,
                value: userData.email,
                name: "email",
                error: error.emailError
              }}
              style="border border-gray-500 px-1 py-2 rounded "
            />
            <div className="relative">
              <Input
                inputInfo={{
                  type: showPassword ? "text" : "password",
                  label: "Password",
                  callback: getUserData,
                  value: userData.password,
                  name: "password",
                  error: error.passwordError
                }}
                style="border border-gray-500 px-1 py-2 rounded"
              />
              <div className="absolute top-9 right-5">
                {
                  showPassword ? <AiFillEyeInvisible className="text-xl hover:text-sky-800 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className="text-xl hover:text-sky-800 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)} />

                }
              </div>
            </div>


            <Button
              title={!loading ? "Sign up" : "Logging In"}
              callback={userSignIn}
              style="border border-indigo-500 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100 px-5 py-1 rounded-full hover:bg-indigo-200 shadow"
            />

            <p >Already have an account ? <Link to="/signup"><span className="text-sky-700" onClick={() => navigate(-1)} > Login</span></Link> </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
