import { ILoginFormErrors, IRegisterFormErrors } from "@/types";

export async function registerValidations(
  values: any
): Promise<IRegisterFormErrors> {
  const errors: IRegisterFormErrors = {};
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  try {
    // Name Validations
    if (!values.name) {
      errors.name = "Please enter the name";
    } else if (!regexName.test(values.name)) {
      errors.name = "The name can only contain letters and spaces";
    }

    // Email Validations
    if (!values.email) {
      errors.email = "Please enter the email";
    } else if (!regexEmail.test(values.email)) {
      errors.email =
        "The email can only contain letters, numbers, dots, hyphens and underscores";
    }
    // } else if (users.some((user: IUser) => user.email === values.email)) {
    //   errors.email = "The email is already in use";
    // }

    // Address Validations
    if (!values.address) {
      errors.address = "Please enter the address";
    }

    // Phone Validations
    if (!values.phone) {
      errors.phone = "Please enter the phone";
    } else if (isNaN(Number(values.phone))) {
      errors.phone = "The phone can only contain numbers";
    }

    // Password Validations
    if (!values.password) {
      errors.password = "Please enter the password";
    } else if (values.password.length < 5) {
      errors.password = "The password must be longer than 5 characters";
    }

    return errors;
  } catch (error) {
    console.error(error);
    return errors;
  }
}

export const loginValidations = async (values: any) => {
  try {
    const errors: ILoginFormErrors = {};
    if (!values.email) {
      errors.email = "Please enter the email";
    }
    if (!values.password) {
      errors.password = "Please enter the password";
    }

    return errors;
  } catch (error) {
    console.error(error.message);
  }
};
