import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/features";
import { toast } from "react-toastify";

export default function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const addBasket = () => {
    toast.success('Product successfully added')
    dispatch(addToBasket({ id, title, image, price, rating }));
  };
  return (
    <Grid container>
      <Box
        sx={{
          boxShadow: 2,
          width: 300,
          height: 400,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
         
          p: 1,
          m: 1,
          transition: "0.3s ease-in-out",
          borderRadius: 2,
          textAlign: "center",
          ":hover": {
            transform: "scale(1.05,1.05);",
            transition: "0.3s ease-in-out",
          },
        }}
      >
        <Box
          component={"img"}
          src={image}
          sx={{
            height: 200,
          }}
          alt="product"
        />

        <Typography>{title}</Typography>

        <Box marginTop={1}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon key={i} />
            ))}
        </Box>

        <Typography marginY={3}>{`${price} 000 sum`}</Typography>

        <Button variant="contained" onClick={addBasket}>Add to basket</Button>
      </Box>
    </Grid>
  );
}
