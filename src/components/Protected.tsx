// import axios from "axios";
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Backend_URL } from "../utils/constant";

// function Protected() {
//   const [isAuthenticate, setIsAuthenticate] = React.useState(false);
//   const navigate = useNavigate();
//   const protectedRoute = async () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       await axios
//         .get(`${Backend_URL}/user/get-user`, {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         })
//         .then((response) => {
//           if (response.status === 200) {
//             setIsAuthenticate(true);
//           }
//           navigate("/dashboard");
//         })
//         .catch((error) => {
//           console.error(error);
//           navigate("/signin");
//         });
//     } else {
//       navigate("/signin");
//     }
//   };
//   useEffect(() => {
//     protectedRoute();
//   }, []);
//   return <div>Protected</div>;
// }

// export default Protected;
