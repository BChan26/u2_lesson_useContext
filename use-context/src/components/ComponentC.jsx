import ComponentD from "./ComponentD"
import { useContext } from "react";
import { DataContext } from "../DataContext";

export default function ComponentC() {

    const { userInfo, setUserInfo } = useContext(DataContext);

    return (
        <div className="ComponentC">
            <h2>I am Component C</h2>
            <p>{userInfo.name}'s favorite movie is {userInfo.favMovie}</p>.

            <button onClick={() =>
            setUserInfo({
            ...userInfo,
            favColor: "aqua",
            favFood: "Tofu"
            })}>
            Change to Aqua & Tofu</button>

            <button
            onClick={() =>
            setUserInfo({
            ...userInfo,
            favColor: "purple",
            favMovie: "X-Men"
            })}>
            Change to Purple & X-Men
            </button>



            <ComponentD/>
        </div>
    )
}