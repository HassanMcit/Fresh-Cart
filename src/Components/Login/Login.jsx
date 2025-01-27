import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Tkn } from "../../Context/AuthContext/AuthContext";

export default function Login() {
  const [password, setPassword] = useState(false);
  const [pressed, setPressed] = useState(false);
  const navigate = useNavigate();

  const {token, setToken} = useContext(Tkn);
  
  

  const sample = Joi.object({
    email: Joi.string()
      .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.pattern.base": "Invalid email format",
      }),
    password: Joi.string()
      .pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required()
      .messages({
        "string.empty": "Password is required",
        "string.pattern.base":
          "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({ resolver: joiResolver(sample) });

  async function formSubmit(value) {
    setPressed(true);
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        value
      );
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      reset();
      setToken(data.token);
      localStorage.setItem('token', data.token)
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      Swal.fire({
        title: message,
        icon: "error",
        confirmButtonColor: `#F27474`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
    setPressed(false);
  }

  function handlePassword() {
    setPassword(!password);
  }

  return (
    <div className="pb-20">
      {pressed && <Loading />}
      <h1 className="text-5xl text-center text-secondary mt-10 mb-24">Login</h1>

      <form
        className="max-w-lg mx-10 md:mx-auto"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="relative z-0 w-full mb-5 group">
          <div
            className={`text-lg ${
              errors.email ? "text-red-700" : "text-secondary"
            } absolute end-0 top-3`}
          >
            <i className="fa-solid fa-envelope"></i>
          </div>
          <input
            autoComplete="new-user"
            type="email"
            id="email"
            className={`block py-2.5 px-0 w-full text-sm ${
              errors.email
                ? "text-red-900 border-red-300 dark:text-red-700 dark:focus:border-red-500 focus:border-red-600"
                : "text-gray-900 border-gray-300 dark:text-white dark:focus:border-green-500 focus:border-green-600"
            } bg-transparent border-0 border-b-2  appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0  peer`}
            placeholder=" "
            {...register("email", {
              onBlur: () => trigger("email"),
              onChange: () => trigger("email"),
            })}
          />
          <label
            htmlFor="email"
            className={`${
              errors.email
                ? "text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500"
                : "text-gray-500 dark:text-gray-400 peer-focus:text-green-600 peer-focus:dark:text-green-500"
            } peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Email
          </label>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <div
            onClick={handlePassword}
            className={`text-lg ${
              errors.password ? "text-red-700" : "text-secondary"
            } absolute end-0 top-3`}
          >
            <i
              className={`fa-solid ${password ? "fa-eye" : "fa-eye-slash"}`}
            ></i>
          </div>
          <input
            type={`${password ? "text" : "password"}`}
            autoComplete="new-password"
            id="password"
            className={`block py-2.5 px-0 w-full text-sm ${
              errors.password
                ? "text-red-900 border-red-300 dark:text-red-700 dark:focus:border-red-500 focus:border-red-600"
                : "text-gray-900 border-gray-300 dark:text-white dark:focus:border-green-500 focus:border-green-600"
            } bg-transparent border-0 border-b-2  appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0  peer`}
            placeholder=" "
            {...register("password", {
              onBlur: () => trigger("password"),
              onChange: () => trigger("password"),
            })}
          />
          <label
            htmlFor="password"
            className={`${
              errors.password
                ? "text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500"
                : "text-gray-500 dark:text-gray-400 peer-focus:text-green-600 peer-focus:dark:text-green-500"
            } peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Password
          </label>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span>{" "}
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
          <Link to="/forgetpassword" className="text-xl text-secondary hover:text-blue-600 hover:underline">Forget Password</Link>
        </div>
      </form>
    </div>
  );
}
