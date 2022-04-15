import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCategoryChange, handleCategoryChange1, handleCategoryChange2 } from '../../redux/actions'

const SelectField = ({label,options}) => {
    const [value,setValue]=React.useState("")
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setValue(e.target.value)
        switch(label){
            case 'Topic':
                dispatch(handleCategoryChange(e.target.value))
                break
            case 'Topic1':
                dispatch(handleCategoryChange1(e.target.value))
                break
            case 'Topic2':
                dispatch(handleCategoryChange2(e.target.value))
                break
        }
    }
  return (
    <Box display='flex' justifyContent='center'>
        <FormControl width='50%'>
        <FormLabel htmlFor='email'>{label}</FormLabel>
            <Select 
            textAlign="center"
            margin='30px 0'
            value={value}
            // label={label}
            onChange={handleChange}
            >
            {options.map(({id,name})=>(
                <option key={id} value={id}>{name}</option>
                // console.log(name)
            ))}
            
            
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField