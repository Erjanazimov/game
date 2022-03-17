import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import { successYes, textHandler, wrong} from "../../redux/gameSlice";

const Modal = () => {
    const questionState = useSelector(state => state.game.questionData);
    const textState = useSelector(state => state.game.textOtvet);

    const dispatch = useDispatch();

    const btnSend = (e) => {
        e.preventDefault();
        if (questionState.answer === textState){
            toast.success("Верно");
            dispatch(successYes({success: questionState}));

        } else {
            toast.error("Не верно")
            dispatch(wrong({wrong: questionState}))
        }
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{questionState.question}?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={btnSend}>
                    <div className="modal-body">
                       <div className="">
                           <label htmlFor="exampleInputText" className="form-label">Ваш ответ к задаче?</label>
                           <input onChange={(e) => dispatch(textHandler({text: e.target.value}))}
                                  required
                                  type="text" className="form-control" id="exampleInputText" value={textState}/>
                       </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary form-control"
                                data-bs-dismiss="modal" aria-label="Close">Ответить</button >
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;