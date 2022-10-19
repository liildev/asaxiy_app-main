import * as React from "react";
import logo from "../assets/logo.png";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../store/features";
import { getBasketTotal } from "../utils/getTotal";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  AppBar,
  Box,
  Toolbar,
  InputBase,
  Button,
  Menu,
  Typography,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  left: 200,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const products = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const total = getBasketTotal(products);

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 64,
          }}
          alt="logo"
          src={logo}
        />

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseEnter={handleClick}
          sx={{ marginLeft: "auto" }}
        >
          <ShoppingBasketIcon sx={{ width: 45, height: 45 }} />
        </Button>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            padding: 1.2,
            width: 15,
            height: 15,
            right: 47,
            top: 28,
            borderRadius: 50,
            background: "white",
            fontSize: "13px",
          }}
        >
          {products.length}
        </Typography>
      </Toolbar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >
        {products?.map((product) => (
          <Box margin={2}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: 2,

                padding: 1,
              }}
            >
              <Box component={"img"} src={product.image} width={35} />
              <Typography width={"50%"}>{product.title}</Typography>
              <Typography
                fontWeight={"bold"}
              >{`${product.price} 000 sum`}</Typography>

              <Button onClick={() => dispatch(removeFromBasket(product.id))}>
                <CancelIcon />
              </Button>
            </Box>
          </Box>
        ))}
        {total !== 0 && (
          <Typography sx={{ textAlign: "center", marginTop: 2 }}>
            Total: {`${total} 000 sum`}
          </Typography>
        )}
      </Menu>
    </AppBar>
  );
}
