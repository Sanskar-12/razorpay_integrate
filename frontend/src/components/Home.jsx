import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import image from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {data:{key}}= await axios.get("http://localhost:4000/api/key")
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Sanskars ORG",
      description: "Tutorial razorpay",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentvalidation",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contat: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
   
      razor.open();
    
  };
  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card amount={5000} img={image} checkoutHandler={checkoutHandler} />
        <Card amount={3000} img={image2} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  );
};

export default Home;
