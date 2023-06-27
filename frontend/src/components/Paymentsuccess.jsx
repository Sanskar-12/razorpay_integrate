import { Box, Heading, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {useSearchParams} from "react-router-dom"

const Paymentsuccess = () => {
    const searchQuery=useSearchParams()[0]

    const referenceid=searchQuery.get("reference")
  return (
    <Box>
        <Stack h={"100vh"} justifyContent={"center"} alignItems={"center"}>
            <Heading textTransform={"uppercase"}>Order Successful</Heading>
            <Text>Reference no:{referenceid}</Text>
        </Stack>
    </Box>
  )
}

export default Paymentsuccess
