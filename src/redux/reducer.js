const initialState={
    question_category:'',
    question_category1:'',
    question_category2:'',
    score:0,
    explain: `` 
}

const reducers=(state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                question_category:action.payload,
            }
        case 'CHANGE_CATEGORY1':
            return {
                ...state,
                question_category1:action.payload,
            }
        case 'CHANGE_CATEGORY2':
            return {
                ...state,
                question_category2:action.payload,
            }
        case 'CHANGE_SCORE':
            return {
                ...state,
                score: action.payload,
            }
        case 'CHANGE_EXPLAIN':
            return {
                ...state,
                explain: action.payload,
            }
            
        default: return state;
    }
}
export default reducers