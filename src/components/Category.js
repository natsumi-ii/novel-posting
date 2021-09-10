import React from 'react';

import classes from './Category.module.css';

const Category = props => {
    const selectedCategoryHandler = event => {
        props.onCategory(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div >
            <select onChange={selectedCategoryHandler} className={classes.select} >
                <option value='white'>--ジャンル選択--</option>
                <option　value='yellow'>ファンタジー</option>
                <option value='aqua'>SF</option>
                <option value='mediumpurple'>ミステリー</option>
                <option value='pink'>恋愛</option>
            </select>
        </div>
    )
};

export default Category;