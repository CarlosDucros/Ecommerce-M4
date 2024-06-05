"use client";
import { useFormik } from "formik";
import Input from "../Input/Input";
import Toastify from "toastify-js";
import { registerValidations } from "@/helpers/validations";

import { UserRegisterDto } from "@/dto/userDto";
import { postUserRegister } from "@/helpers";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router = useRouter();

  const signUp = async (user: UserRegisterDto) => {
    try {
      await postUserRegister(user);
      formik.resetForm();
      Toastify({
        duration: 2500,
        text: "Accounted created. \n Click here to login!",
        newWindow: true,
        close: true,
        position: "right",
        gravity: "bottom",
        backgroundColor: "linear-gradient(to right, #3c096c,#7B2CBF)",
        stopOnFocus: true,
        onClick: function () {
          router.push("/login");
        },
      }).showToast();
    } catch (err) {
      console.error(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
    },
    onSubmit: signUp,
    validate: registerValidations,
  });

  const getProps = (name: string) => {
    return {
      name: name,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values[name],
    };
  };
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center container">
        <Input
          label="Name"
          type="text"
          placeholder="John Doe"
          {...getProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <p className=" text-red-600 font-medium text-center w-3/4">
            <>{formik.errors.name}</>
          </p>
        )}
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@mail.com"
          {...getProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <p className=" text-red-600 font-medium text-center w-3/4">
            <>{formik.errors.email}</>
          </p>
        )}
        <Input
          label="Address"
          type="text"
          placeholder="Evergreen 123"
          {...getProps("address")}
        />
        {formik.touched.address && formik.errors.address && (
          <p className=" text-red-600 font-medium text-center w-3/4">
            <>{formik.errors.address}</>
          </p>
        )}
        <Input
          label="Phone"
          type="text"
          placeholder="44444444"
          {...getProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className=" text-red-600 font-medium text-center w-3/4">
            <>{formik.errors.phone}</>
          </p>
        )}
        <Input
          label="Password"
          type="password"
          placeholder="*******"
          {...getProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <p className=" text-red-600 font-medium text-center w-3/4">
            <>{formik.errors.password}</>
          </p>
        )}
        <button
          type="submit"
          disabled={formik.isValid ? false : true}
          className={`bg-dark-purple  ${
            !formik.isValid && " bg-purple-900"
          } text-soft-purple p-2 rounded-md m-5 shadow-lg ${
            formik.isValid && "hover:bg-purple-500"
          }`}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
