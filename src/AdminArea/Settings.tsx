import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Input,
   Heading,
   Button ,
 Textarea,
 Switch
  } from "@chakra-ui/react"




export const Settings = () => {
let isAdmin = false;

if (isAdmin){
    return (
        <div>


        <Heading>
            In 
            Process
            Of 
            Making 
            stuff
           
            
        </Heading>
         <Button variant="primary">Button</Button>
         </div>
    )
}
else
    return (
        <div>
            <Heading>You are not admin. Why are you here ?</Heading>
            <Select placeholder="Select option">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>

<FormControl id="email">
  <FormLabel>Send Text To Trash Box</FormLabel>
  <Textarea variant="filled" colorScheme="colors.primary" placeholder="text placeholder" />
</FormControl>


<FormControl display="flex" alignItems="center">
  <FormLabel htmlFor="email-alerts" mb="0">
    Enable email alerts?
  </FormLabel>
  <Switch id="email-alerts" />
</FormControl>

        </div>
    )
}
