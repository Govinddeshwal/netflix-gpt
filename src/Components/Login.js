import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isShow, setIsShow] = useState(true);

  const toggleSignInForm = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg"
          alt="bg-img"
        />
      </div>

      <form className="w-3/12 absolute h-3/12 p-12 bg-black text-white my-40 mx-auto right-0 left-0 rounded-xl opacity-80">
        <h1 className="text-3xl font-bold py-2">
          {" "}
          {isShow ? "Sign In" : " Sign Up"}
        </h1>
        {!isShow && (
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700 p-4 my-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <input
          type="Password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <button className="bg-red-700 p-4 my-6 w-full rounded-xl">
          {isShow ? "Sign In" : " Sign Up"}
        </button>
        <h1
          className="p-1 cursor-pointer hover:text-blue-500 "
          onClick={toggleSignInForm}
        >
          {isShow
            ? "New to Sign In? Sign Up Now."
            : " Already Registered? Sign In Now."}
        </h1>
      </form>
    </div>
  );
};

export default Login;
