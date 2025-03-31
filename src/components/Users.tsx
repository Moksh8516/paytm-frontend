import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_URL } from "../utils/constant";
import Subheading from "./Subheading";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useDebouncing } from "../hooks/useDebounce";

function Users() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebouncing(inputValue, 300);
  console.log("debound:" + debouncedValue);
  async function getfriends(filterValue: string) {
    try {
      const response = await axios.get(
        `${Backend_URL}/user/bulk?filter=${filterValue}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUsers(response?.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getfriends(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
      <div className="mt-3 text-lg font-bold">Users</div>
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded-md border border-slate-300 bg-slate-200 shadow-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-slate-300"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="mt-6 ">
          {users &&
            users.map((user, index) => <User user={user} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Users;

interface UserProps {
  user: {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
  };
}

function User({ user }: UserProps) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center mx-3 px-2 m-1 bg-slate-100 shadow-md rounded-md ">
        <div className="flex gap-2 items-center p-1">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-slate-200 text-lg text-slate-400 text-center font-bold ">
            {user.firstName[0].toUpperCase()}
          </div>
          <Subheading>{user.firstName}</Subheading>
          <Subheading>{user.lastName}</Subheading>
        </div>
        <Button
          variant="dark"
          value={user.id}
          onClick={() =>
            navigate("/send?id=" + user.id + "&name=" + user.firstName)
          }
        >
          Send Money
        </Button>
      </div>
    </>
  );
}
