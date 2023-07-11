export const validateUserData = (userData, validateForSignUp = false) => {
  let success = true;
  let errors = {};

  if (userData.email === "") {
    errors = {
      ...errors,
      emailError: { status: true, error: "Email id can not be Empty" },
    };
    success = false;
  }

  if (!userData.email.includes("@") || !userData.email.includes(".")) {
    errors = {
      ...errors,
      emailError: { status: true, error: "Invalid Email id" },
    };
    success = false;
  }

  if (userData.password.length === 0) {
    errors = {
      ...errors,
      passwordError: {
        status: true,
        error: "password can not be empty",
      },
    };
    success = false;
  }

  if (userData.password.length < 8) {
    errors = {
      ...errors,
      passwordError: {
        status: true,
        error: "password should have atleast 8 character",
      },
    };
    success = false;
  }

  if (validateForSignUp) {
    if (userData.name === "") {
      errors = {
        ...errors,
        nameError: { status: true, error: "Name can not be Empty" },
      };

      success = false;
    }

    if (userData.name.length < 3) {
      errors = {
        ...errors,
        nameError: {
          status: true,
          error: "Name should have atleast 3 character",
        },
      };

      success = false;
    }

    if (!(userData.password === userData.confirmed_password)) {
      errors = {
        ...errors,
        confirmPasswordError: {
          status: true,
          error: "passsword and confirm password should be same",
        },
      };
      success = false;
    }

    if (userData.confirmed_password === "") {
      errors = {
        ...errors,
        confirmPasswordError: {
          status: true,
          error: "confirm password can not be empty",
        },
      };
      success = false;
    }
  }

  return { success, errors };
};

export const validateTaskData = (taskData) => {
  let success = true;
  let errors = {};

  if (taskData.title === "") {
    errors = {
      ...errors,
      titleError: {
        status: true,
        error: "Title can not be empty",
      },
    };
    success = false;
  }

  if (typeof taskData.title === "number") {
    errors = {
      ...errors,
      titleError: { status: true, error: "Title can not be a number" },
    };
    success = false;
  }

  if (taskData.description === "") {
    errors = {
      ...errors,
      descriptionError: {
        status: true,
        error: "Description can not be empty",
      },
    };

    success = false;
  }

  return { success, errors };
};
