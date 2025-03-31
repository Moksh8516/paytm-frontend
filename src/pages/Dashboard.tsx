import { AppBar } from "../components/AppBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_URL } from "../utils/constant";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState("");

  async function getBalance() {
    try {
      const response = await axios.post(
        `${Backend_URL}/account/balance`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBalance(response?.data.currentBalance);
      setUser(response?.data.userName);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getBalance();
  }, []);

  let value = balance.toFixed(2);
  return (
    <div className="mx-3">
      <AppBar userName={user} />
      <div className="m-8">
        <Balance value={value} />
      </div>
      <Users />
    </div>
  );
}

export default Dashboard;
