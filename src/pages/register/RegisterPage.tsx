import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen bg-dark flex p-4">
      <div className="flex-1 bg-secondary rounded-xl hidden lg:block"></div>
      <div className="flex flex-col items-center justify-center h-full flex-1">
        <h1 className="text-white text-4xl font-semibold">Register</h1>
        <p className="text-white text-lg mb-8">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
        <form className="flex flex-col gap-4 w-1/2 px-[16px]">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-sm">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="px-4 py-2 rounded-sm bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="px-4 py-2 rounded-sm bg-white"
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
            />
          </div>

          <button className="px-4 py-2 rounded-sm bg-secondary text-white mt-4">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
