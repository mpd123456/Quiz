import { Box, Button, CircularProgress,Text } from "@chakra-ui/react"
import SelectField from "../../components/SelectField"
import useAxios from "../../hooks/useAxios"
import {Link} from 'react-router-dom'
const Settings = () => {
  const {res,error,loading}=useAxios({url:"/api_category.php"})
 
  // console.log(res)
  if(loading){
    return(
      <Box>
        <CircularProgress 
        value={50} color='orange.400'
        />
      </Box>
    )
  }
  if(error){
    return(
      <Text color='red'>
        Some Went Wrong!
      </Text>
    )
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      
  }
  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={res.trivia_categories} label='Topic1'/>
      <SelectField options={res.trivia_categories} label='Topic2'/>
      <SelectField options={res.trivia_categories} label='Topic3'/>
      <Box>
        <Button background='blue.200' type="submit" ><Link to="/questions">Get Started</Link></Button>
      </Box>
    </form>
  )
}

export default Settings