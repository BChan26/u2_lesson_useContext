import { useContext } from "react";
import { DataContext } from "../DataContext";

export default function ComponentD() {

    const { userInfo, setUserInfo } = useContext(DataContext);

    return (
        <div className="ComponentD">
            <h2>I am Component D</h2>

            <p>{userInfo.name}'s favorite food is </p>
        <p style={{ color: userInfo.favColor }}>
            {userInfo.favFood}
            </p>.
   
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "brown"
          })
        }
      >
        Change to Brown
      </button>
      
      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favMovie: "Big Lebowski"
          })
        }
      >
        Change Movie 
      </button>



        </div>
    )
}