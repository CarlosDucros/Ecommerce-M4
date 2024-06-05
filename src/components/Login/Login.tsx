"use client";
import { useFormik } from "formik";
import Input from "../Input/Input";
import { loginValidations } from "@/helpers/validations";
import { UserLoginDto } from "@/dto/userDto";
import { postUserLogin } from "@/helpers";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartProvider";
import { IUser, IUserNoCredentials } from "@/types";
const Login: React.FC = () => {
  const router = useRouter();
  const { setCart } = useCart();
  const { setToken, setUserData } = useAuth();

  const signIn = async (user: UserLoginDto) => {
    try {
      await postUserLogin(user).then((res) => {
        setCart([]);
        localStorage.setItem("token", res.token);
        const userRes: IUser = res.user;
        console.log(userRes);

        const userFilter = Object.keys(userRes)
          .filter((item) => item !== "credential")
          .reduce((obj: IUserNoCredentials, item: string) => {
            obj[item] = userRes[item];
            return obj;
          }, {});

        localStorage.setItem("user", JSON.stringify(userFilter[0]));

        setToken(res.token);
        setUserData(res.user);
        router.push("/profile");
      });
      formik.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: signIn,
    validate: loginValidations,
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
        className="flex flex-col items-center ">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
