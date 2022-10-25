import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, title, img_url, details, id, author} = category;
    // console.log(category.author.img);
    return (
        <div className="">
            <div>
            <img src={img_url} alt="" />
            </div>
        </div>
    );
};

export default Category;

