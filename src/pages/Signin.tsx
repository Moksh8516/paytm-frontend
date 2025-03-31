import { useState } from "react";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend_URL } from "../utils/constant";
import { toast } from "react-toastify";

function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit() {
    try {
      const response = await axios.post(`${Backend_URL}/user/login`, {
        userName: name,
        password,
      });
      localStorage.setItem("token", response?.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  }

  return (
    <div className=" h-screen w-full flex justify-center items-center bg-slate-600">
      <div className="min-w-80 flex flex-col p-4 rounded-xl shadow-lg bg-slate-100 border-slate-300 border">
        <Heading>SignIn</Heading>
        <InputBox
          placeholder="username/email"
          onChange={(e) => setName(e.target.value)}
          label="username/email"
        />
        <InputBox
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
        />
        <Button variant="dark" onClick={handleSubmit} className="my-3">
          Signin
        </Button>
        <div className="flex gap-2 text-slate-500 text-xs text-center items-center justify-center">
          <p>you dont't have an account?</p>
          <Link className="hover:underline font-medium text-sm" to={"/signup"}>
            signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
