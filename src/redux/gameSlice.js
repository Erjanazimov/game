import {createSlice} from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameData: [],
        questionData: {
            answer: "",
            category_id: "",
            question: "",
            id: "",
            value: "",
            title: "",
        },
        success: [],
        not: [],
        summa: 0,
        textOtvet: "",
        name: ""
    },
    reducers: {
        gameAdd(state, action) {
            state.gameData.push(action.payload.data);
        },
        question(state, action){
            state.questionData.answer = action.payload.obj.answer;
            state.questionData.category_id = action.payload.obj.category_id;
            state.questionData.question = action.payload.obj.question;
            state.questionData.id = action.payload.obj.id;
            state.questionData.value = action.payload.obj.value;
            state.questionData.title = action.payload.title;
        },
        successYes(state, action){
            state.success.push(action.payload.success);
            state.summa += action.payload.success.value;
            const not = state.gameData.find(item => item.title === action.payload.success.title);
            const not2 = not.clues.find(id => id.id === action.payload.success.id);
            not2.value = "верно";
        },
        wrong(state, action){
            state.not.push(action.payload.wrong);
            state.summa -= action.payload.wrong.value;
            const not = state.gameData.find(item => item.title === action.payload.wrong.title);
            const not2 = not.clues.find(id => id.id === action.payload.wrong.id);
            not2.invalid_count = true
        },
        textHandler(state, action){
            state.textOtvet = action.payload.text;
        },
        nullText(state){
            state.textOtvet = "";
        },
        nullClose(state){
            state.gameData = []
        },
        nameHandler(state, action){
            state.name = action.payload.text
        }
    }
})

export const {gameAdd, question, successYes, wrong, textHandler, nullText, nullClose, nameHandler} = gameSlice.actions;

export default gameSlice.reducer;