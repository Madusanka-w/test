import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Navod')
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        setName('Madusanka')
        setAge(30)
    }


    return ( 
        <div className="hom">
            <h2>Home Page</h2>
            <p>{ name } is { age } old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;