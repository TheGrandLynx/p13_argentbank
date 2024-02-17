import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from "../../redux/actions/user.actions.js";
import User from "../../components/User/User";
import Account from "../../components/Account/Account";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//import NotConnected from "../../components/NotConnected/NotConnected.jsx";
import accountData from "../../data/accountData.json";

function UserProfile() {
  const token = useSelector((state) => state.auth.token);
  let isConnected = useSelector((state) => state.auth.token);
  //const navigate = useNavigate();

  const dispatch = useDispatch();
  //soutenance 5
  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();

            const userData = {
              createdAt: data.body.createdAt,
              updatedAt: data.body.updatedAt,
              id: data.body.id,
              email: data.body.email,
              firstname: data.body.firstName,
              lastname: data.body.lastName,
              username: data.body.userName,
            };
            //Return user data in redux state
            dispatch(userProfile(userData));
          } else {
            console.log("error while retrieving profile");
          }
        } catch (error) {
          console.error(error);
        }
      };
      userData();
    }
  }, [dispatch, token]);
  return (
    <div className="profile-page">
      <Header />

      {isConnected ? (
        <main className="bg-dark">
          <User />
          {accountData.map((data) => (
            <Account
              key={data.id}
              title={data.title}
              amount={data.amount}
              description={data.description}
            />
          ))}
        </main>
      ) : (
        <Navigate to="/login" />
      )}
      <Footer />
    </div>
  );
}

export default UserProfile;
