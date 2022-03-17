import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {gameAdd, nullClose, nullText, question} from "../../redux/gameSlice";

const Game = () => {
    const [num] = useState([1892, 4483, 88, 218]);
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.game);

    useEffect(() => {
        if (gameState.gameData.length < 4) {
            num.map(category_id => {
                return new Promise((resolve, reject) => {
                    fetch(`https://jservice.io/api/category?id=${category_id}`)
                        .then(response => response.json()).then(data => {
                        dispatch(gameAdd({data}));
                    });
                });
            });
        }
    }, []);

    const btnModal = (val, title) => {
        dispatch(question({obj: val, title: title}))
        dispatch(nullText())
    }

    const btnClose = () => {
        dispatch(nullClose())
    }

    const btnStart = () => {
        if (gameState.gameData.length < 4) {
            num.map(category_id => {
                return new Promise((resolve, reject) => {
                    fetch(`https://jservice.io/api/category?id=${category_id}`)
                        .then(response => response.json()).then(data => {
                        dispatch(gameAdd({data}));
                    });
                });
            });
        }
    }

    if (gameState.name) {
        return (
            <div className="container">
                <div className="bg-table">
                    {gameState.gameData.map((item, index) => {
                        return <div key={index}>
                            <div className="textCategory">{item.title}</div>
                            <span className="text d-flex">
                    {item.clues.slice(0, 5).map(val => {
                        return <div key={val.id}> {!val.invalid_count ?
                            <button onClick={() => btnModal(val, item.title)}
                                    data-bs-toggle="modal"
                                    data-bs-target={val.value === "верно" ? "#df" : "#exampleModal"}
                                    key={val.id} type="button" className="btn btn-success"> {val.value}</button>
                            : <button type="button" className="btn btn-danger">Не верно</button>
                        }
                        </div>
                    })}
                </span></div>
                    })}
                </div>
                <div className="d-flex justify-content-end">
                    <div onClick={btnStart} className="m-4"><b className="text-white">
                        <button className="btn btn-primary">
                            Старт игры
                        </button>
                    </b></div>
                    <div onClick={btnClose} className="m-4"><b className="text-white">
                        <button className="btn btn-danger">
                            Закончить игру!
                        </button>
                    </b></div>
                    <div className="m-4"><b className="text-white">Счет: {gameState.summa}</b></div>

                </div>
            </div>
        );
    }

    return <h1 className="text-white text-center">Введите имя перед началом игры</h1>
};

export default Game;