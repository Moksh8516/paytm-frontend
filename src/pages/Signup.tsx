import { useState } from "react";
import { Button } from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend_URL } from "../utils/constant";
function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  async function HandleSubmit() {
    try {
      await axios.post(`${Backend_URL}/user/signup`, {
        firstName: firstname,
        userName,
        lastName: lastname,
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorData = error.message;
        setErrors(errorData);
        console.log(errorData);
      }
    }
  }
  return (
    <div className=" h-screen w-full flex justify-center items-center bg-slate-600">
      <div className="min-w-80 flex flex-col p-4 rounded-xl shadow-lg bg-slate-100 border-slate-300 border">
        <Heading>Signup</Heading>
        <InputBox
          placeholder="username"
          onChange={(e) => setuserName(e.target.value)}
          label="username"
        />
        <div className="flex gap-3 items-center">
          <InputBox
            placeholder="firstname"
            label="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <InputBox
            placeholder="lastname"
            label="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <InputBox
          placeholder="email"
          label="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          placeholder="password"
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="dark" onClick={HandleSubmit} className="my-3">
          Signup
        </Button>
        <div className="flex gap-2 text-slate-500 text-xs text-center items-center justify-center">
          <p>Already have an account?</p>
          <Link className="hover:underline font-medium text-sm" to={"/"}>
            signin
          </Link>
        </div>
        {errors && <span className="text-red-500 text-xs">{errors}</span>}
      </div>
    </div>
  );
}

export default Signup;
