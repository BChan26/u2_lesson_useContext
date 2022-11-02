import { useContext } from 'react';
import { DataContext } from '../DataContext';


export default function ComponentB() {

        const {userInfo, setUserInfo} = useContext(DataContext)

    return (
        <div className="ComponentB">
            <h2>I am Component B</h2>

            <p>
                <span>
                    {userInfo.name}'s favorite color is  
                </span>

                <span style={{color: userInfo.favColor}}>
                    {userInfo.favColor}
                {/* the span style will render the color on screen with in-line styling, while 20 is displaying the text */}
                {/* values kept in state, no props being passed */}
                </span>
            </p>


            <button onClick={() => 
            setUserInfo({
                ...userInfo,
                favColor: "orange"
            })}>
            Make Orange </button>

            <button onClick={() => 
            setUserInfo({
                ...userInfo,
                favColor: "Pink"
            })}>
                Make Pink
            </button>

        </div>
    )
}