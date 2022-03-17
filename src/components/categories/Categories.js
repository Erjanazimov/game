import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Categories = () => {
    const staticState = useSelector(state => state.game);


    if (staticState.name) {
        return (
            <div className="container">
                <div className="mt-5 d-flex justify-content-center">
                    <button className="btn btn-outline-primary">
                        <Link to="/gameStart">Игра </Link></button>
                    <button className="btn btn-outline-primary mx-3">
                        <Link to="/static">Статистика </Link></button>
                </div>
            </div>
        );

    }

    return <h1 className="text-white text-center">Введите имя перед началом игры</h1>
};

export default Categories;