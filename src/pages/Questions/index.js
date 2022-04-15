import { Box, Button, CircularProgress, Text } from "@chakra-ui/react"
import useAxios from "../../hooks/useAxios"
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { handleExplainChange, handleScoreChange } from "../../redux/actions"

const getRandomInt=(max)=>{
  return Math.floor(Math.random()*Math.floor(max));
}
// console.log(getRandomInt(3))
const Questions = () => {
  const {question_category,question_category1,question_category2,score,explain}=useSelector((state)=>state)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  let apiUrl='/api.php?amount=5'
  // let apiUrl1='/api.php?amount=5'
  // let apiUrl2='/api.php?amount=5'
  if(question_category){
    apiUrl=apiUrl.concat(`&category=${question_category}`)
  }
  // if(question_category1){
  //   apiUrl1=apiUrl2.concat(`&category=${question_category1}`)
  // }
  // if(question_category2){
  //   apiUrl2=apiUrl2.concat(`&category=${question_category2}`)
  // }
  const {res,loading}=useAxios({url:apiUrl})
  // console.log(res)
  const [questionIndex, setQuestionIndex]=useState(0)
  const [options,setOptions]=useState([])
  const [showAnswer,setShowAnswer]=useState(false)
  const [explains,setExplains]=useState(false)
  // console.log(options)
  useEffect(()=>{
    if(res?.results.length){
      const question=res.results[questionIndex]
      let answers=[...question.incorrect_answers]
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
    }
  },[res,questionIndex])
  if(loading){
    return(
      <Box>
        <CircularProgress/>
      </Box>
    )
  }
  console.log(res)
  const changeExplain=(e)=>{
    if(e.target.textContent===res.results[questionIndex].correct_answer){
      if(questionIndex){
        dispatch(handleExplainChange(`${res.results[questionIndex].correct_answer}`))
        return explain
      }else{
        return ''
      }
    }
  }
  
  const handleClickAnswer=(e)=>{
    if(!showAnswer){
      if(e.target.textContent===res.results[questionIndex].correct_answer){
        dispatch(handleScoreChange(score+1))
        // dispatch(handleExplainChange(`${res.results[questionIndex].correct_answer}`))
      }
      setExplains(true)
    }
    setShowAnswer(true)
  }
  const handleClickNext=(e)=>{
    if(questionIndex+1<res.results.length){
      setQuestionIndex(questionIndex+1)
    }else{
      navigate('/score')
    }
    setShowAnswer(false)
    setExplains(false)
  }
  const handleChangeColor=()=>{
    setShowAnswer(!showAnswer)
  }
  // console.log(res.results)
  // console.log(res)
  return (
    <Box margin='50px 0'>
      <Text variant="h3">
        Questions {questionIndex+1}
      </Text>
      <Text variant="h3">
        {res.results[questionIndex].question}
      </Text>
      {
        options.map((datas,id)=>{
        const question=res.results[questionIndex]
        return(
        <Box margin='30px 0' key={id}>
        <Button
         style={{
          ...(showAnswer? (datas===question.correct_answer?   
            { background: 'green', color:'#fff'}
            : { background: 'red', color:'#fff'}) : ""),
        }} 
        onChange={handleChangeColor}
        onClick={handleClickAnswer} 
        background='blue.200' >{datas}</Button>
        </Box>
      )
        // onClick={handleClickAnswer}
      })}
      
      <Box margin='30px 0'>
        Score: {score}/{res.results.length}
        <Button 
        background='red.400' 
        color='#fff' 
        marginLeft='30px' 
        onClick={handleClickNext}>Next Answers</Button>
      </Box>
      <Box margin='30px 0'>
      {(explains===true?<>{res.results[questionIndex].correct_answer}</>:null)}
        {/* Nếu Api có phần explain thay correct_answer */}
      </Box>
    </Box>
  )
}

export default Questions