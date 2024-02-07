import React, { useState } from 'react';
import BlogList from '../pages/BlogList';
import oha from '../images/Oha.jpeg'
import atama from '../images/Atama.jpeg'
import edikaikong from '../images/Edikaikong.jpeg'
import efo from '../images/Eforiro.jpeg'
import cashew from '../images/CashewSoup.jpeg'

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Atama",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam aut fugiat pariatur ex.Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quibusdam, excepturi commodi doloribus enim natus alias aliquid dolore reiciendis doloremque consequatur pariatur ullam provident deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga! Minus, alias nobis adipisci explicabo nostrum provident. Libero, corporis iure.",
            stateOfOrigin: "Awka Ibom",
            img: atama,
            id: 1
        },
        {
            title: "Oha",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam aut fugiat pariatur ex.Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quibusdam, excepturi commodi doloribus enim natus alias aliquid dolore reiciendis doloremque consequatur pariatur ullam provident deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga! Minus, alias nobis adipisci explicabo nostrum provident. Libero, corporis iure.",
            stateOfOrigin: "Abia",
            img: oha,
            id: 2
        },
        {
            title: "Edikaikong",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam aut fugiat pariatur ex.Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quibusdam, excepturi commodi doloribus enim natus alias aliquid dolore reiciendis doloremque consequatur pariatur ullam provident deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga! Minus, alias nobis adipisci explicabo nostrum provident. Libero, corporis iure.",
            stateOfOrigin: "Awka Ibom",
            img: edikaikong,
            id: 3
        },
        {
            title: "Efo",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam aut fugiat pariatur ex.Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quibusdam, excepturi commodi doloribus enim natus alias aliquid dolore reiciendis doloremque consequatur pariatur ullam provident deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga! Minus, alias nobis adipisci explicabo nostrum provident. Libero, corporis iure.",
            stateOfOrigin: "Ijebu",
            img: efo,
            id: 4
        },
        {
            title: "Cashew",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae magnam aut fugiat pariatur ex.Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo quibusdam, excepturi commodi doloribus enim natus alias aliquid dolore reiciendis doloremque consequatur pariatur ullam provident deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga! Minus, alias nobis adipisci explicabo nostrum provident. Libero, corporis iure.",
            stateOfOrigin: "Enugu",
            img: cashew,
            id: 7
        }
    ])

    const handleDelete =(id)=>{
        let deleteBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(deleteBlogs)
    }
    return (
        <div>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );
}

export default Blog;

