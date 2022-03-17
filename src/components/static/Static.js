import React from 'react';
import {useSelector} from "react-redux";

const Static = () => {
    const staticState = useSelector(state => state.game);


    if (staticState.name) {
        return (
            <div className="container pt-4">
                <h2 className="text-white">Статистика</h2>
                <ul>
                    <li> Вверных ответов: <b>{staticState.success.length}</b></li>
                    <li>Неверных ответов: <b>{staticState.not.length}</b></li>
                    <li>Сумма баллов: <b>{staticState.summa}</b></li>
                </ul>
            </div>
        );
    }

    return <h1 className="text-white text-center">Введите имя перед началом игры</h1>
};

export default Static;