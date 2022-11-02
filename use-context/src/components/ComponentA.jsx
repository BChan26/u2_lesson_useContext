import ComponentB from "./ComponentB"
import { useContext } from 'react'
import { DataContext } from '../DataContext'


export default function ComponentA() {

    const data = useContext(DataContext)

    return (
        <div className="ComponentA">
            <h2>I am Component A</h2>


            <p>
                <span>
                    {data.userInfo.name}'s favorite color is  
                </span>

                <span style={{color: data.userInfo.favColor}}>
                    {data.userInfo.favColor}
                {/* the span style will render the color on screen with in-line styling, while 20 is displaying the text */}
                </span>
            </p>


            <ComponentB/>
        </div>
    )
}