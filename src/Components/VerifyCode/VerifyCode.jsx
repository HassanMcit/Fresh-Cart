import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

export default function VerifyCode() {
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [pressed, setPressed] = useState(false);

  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function submit(value) {
    setPressed(true)
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        value
      );
      setMessage(null);
      navigate("/ForgetPassword/ResetPassword");
    } catch ({
      response: {
        data: { message },
      },
    }) {
      setMessage(message);
      console.log(message);
    }
    setPressed(false)
  }

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Check Your Mail",
    });
  }, []);

  return (
    <div className="fixed w-full h-full pt-10   space-y-14 z-40 bg-primary">
        {pressed && <Loading/>}
      <h1 className="text-4xl text-secondary text-center">Verify Code</h1>
      {message && (
        <div
          className="p-4 mb-4 w-fit font-semibold capitalize mx-auto text-sm text-white rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          {message}.
        </div>
      )}
      <form
        className=" md:w-1/3 mx-10 md:mx-auto"
        onSubmit={handleSubmit(submit)}
      >
        <div className="relative z-0 w-full mb-5 group">
          <div
            className={`text-lg ${
              errors.resetCode ? "text-red-700" : "text-secondary"
            } absolute end-0 top-3`}
          >
            <i className="fa-solid fa-hashtag"></i>
          </div>
          <input
            autoComplete="new-user"
            type="text"
            id="resetCode"
            className={`block py-2.5 px-0 w-full text-sm ${
              errors.resetCode
                ? "text-red-900 border-red-300 dark:text-red-700 dark:focus:border-red-500 focus:border-red-600"
                : "text-gray-900 border-gray-300 dark:text-white dark:focus:border-green-500 focus:border-green-600"
            } bg-transparent border-0 border-b-2  appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0  peer`}
            placeholder=" "
            {...register("resetCode", {
              required: { value: true, message: "resetCode Required" },
              pattern: {
                value: /^\d+$/,
                message: "Enter Valid resetCode",
              },
              onBlur: () => trigger("resetCode"),
              onChange: () => trigger("resetCode"),
            })}
          />
          <label
            htmlFor="resetCode"
            className={`${
              errors.resetCode
                ? "text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500"
                : "text-gray-500 dark:text-gray-400 peer-focus:text-green-600 peer-focus:dark:text-green-500"
            } peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Reset Code
          </label>
          {errors.resetCode && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span>{" "}
              {errors.resetCode.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
