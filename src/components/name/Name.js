import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {nameHandler} from "../../redux/gameSlice";

const Name = () => {
    const nameState = useSelector(state => state.game.name)
    const {push} = useHistory();
    const dispatch = useDispatch();
    const startBtn = (e) => {
        push("/category")
        e.preventDefault();
    }

        return (
            <div className="container">
                <form onSubmit={startBtn}>
                    <div className="mt-5">
                        <input onChange={(e) => dispatch(nameHandler({text: e.target.value}))} required type="text"
                               className="form-control " placeholder="Введите свое Имя для игры" value={nameState}/>
                    </div>
                    <div className="mt-3">
                        <input type="submit" className="btn btn-outline-success form-control"/>
                    </div>
                </form>
            </div>
        );
};

export default Name;