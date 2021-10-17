import React from 'react'
import { Button } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"


export const Settings = () => {
let isAdmin = true;

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
        </div>
    )
}
