import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName] = useState('Mario');

    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'lsflsfjsla sfssf', author: 'Mario', id: 1},
        {title: 'My New Project', body: 'my new blog sflafslfj', author: 'Madusanka', id: 2},
        {title: 'New web page', body: 'new web page .....', author: 'Mario', id: 3}
    ])
    
    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }

    useEffect(() => {
        console.log('UseEffect ran');
        console.log(name);
    }, [name])


    return ( 
        <div className="hom">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
           <button onClick={() => setName('Hesh')}>Change Name</button>
           <p>{ name }</p>
        </div>
     );
}
 
export default Home;