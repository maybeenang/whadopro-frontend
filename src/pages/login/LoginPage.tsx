import { Navigate, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormInput>();

  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      toast
        .promise(
          axiosInstance.post("api/v1/login", data),
          {
            pending: "Loading...",
            success: {
              render() {
                return `Login success`;
              },
            },
            error: "Login failed",
          },
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored",
          }
        )
        .then((res) => {
          signIn({
            token: res.data.token,
            expiresIn: 60 * 60 * 24 * 3,
            tokenType: "Bearer",
            authState: {
              email: res.data.email,
              name: res.data.name,
              id: res.data.id,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAuthenticated() && <Navigate to="/dashboard" />}
      <main className="w-screen h-screen bg-dark flex p-4">
        <div className="flex flex-col items-center justify-center h-full flex-1">
          <h1 className="text-white text-4xl font-semibold">Login</h1>
          <p className="text-white text-lg mb-8">
            Don't have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
          <form
            className="flex flex-col gap-4 w-1/2 px-[16px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="px-4 py-2 rounded-sm bg-white"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-white text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="px-4 py-2 rounded-sm bg-white"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex items-end justify-end">
              <p className="text-blue-400">Forgot Password?</p>
            </div>
            <button className="px-4 py-2 rounded-sm bg-secondary text-white mt-8">
              Login
            </button>
          </form>
        </div>
        <div className="flex-1 bg-secondary rounded-xl hidden lg:block"></div>
      </main>
    </>
  );
};

export default LoginPage;
