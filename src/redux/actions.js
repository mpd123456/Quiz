export const handleCategoryChange=(category)=>{
    return {
        type:'CHANGE_CATEGORY',
        payload: category
    }
}
export const handleCategoryChange1=(category1)=>{
    return {
        type:'CHANGE_CATEGORY1',
        payload: category1
    }
}
export const handleCategoryChange2=(category2)=>{
    return {
        type:'CHANGE_CATEGORY2',
        payload: category2
    }
}
export const handleExplainChange=(explain)=>{
    return {
        type:'CHANGE_EXPLAIN',
        payload:explain
    }
}
export const handleScoreChange=(score)=>{
    return{
        type:'CHANGE_SCORE',
        payload: score
    }
}

// action creater => funcion