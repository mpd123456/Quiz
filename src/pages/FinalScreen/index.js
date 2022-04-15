import { Box, Button, Heading,AspectRatio,Image } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { handleScoreChange } from "../../redux/actions"


const FinalScreen = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {score}=useSelector(state=>state)
  const handleBackSetting=()=>{
    dispatch(handleScoreChange(0))
    navigate('/')
  }
  return (<>

    <Box margin={50}>
      <Heading  as='h3'>Final score: {score}</Heading>
      <Button marginTop='30px' onClick={handleBackSetting} color='red.300'>back to Settings!</Button>
    </Box>
      <AspectRatio 
      maxW='400px' 
      marginRight='auto' 
      marginLeft='auto' 
      ratio={4/3}>
     <Image  boxSize='200px' src='https://media.istockphoto.com/vectors/congratulations-floral-frame-greeting-card-vector-id1145787590' alt='goodLuck' objectFit='cover'/>
     </AspectRatio> 
      </> 
  )
}

export default FinalScreen