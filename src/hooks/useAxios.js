import React, { useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL="https://opentdb.com/" 
const useAxios = ({url}) => {
    const [res,setRes]=React.useState(null)
    const [error,setError]=React.useState("")
    const [loading,setLoading]=React.useState(true)
    useEffect(()=>{
        const fetchData=()=>{
            axios
                .get(url,)
                .then(res=>setRes(res.data))
                .catch(err=>setError(err))
                .finally(()=>setLoading(false))
        }
        fetchData()
    },[url])
  return {res,error,loading}
    
  
}

export default useAxios