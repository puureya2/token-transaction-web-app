import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Text1 from "../../components/text/Text1";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


const Sell = () => {

  const theme = useTheme();


  //////////////////////////////////////////////////////////////////////////////////////////////

  const contractDetailsDB = useSelector((state: RootState) => state.contractDB.contractDetailsDB);
    if (!contractDetailsDB) {
      console.log("Error fetching static contract details:");
    }
  const { 
    offer_id, offer_token, buyer_id, rate_of_return, offer_yield,
    difference, official_price, asked_price, difference_2, stock, seller_wallet_address 
  } = contractDetailsDB;
  
  const contractDetails = useSelector((state: RootState) => state.contract.contractDetails);
  if (!contractDetails) {
    return <p>No contract details available</p>;
  }
  const { 
    contract_address, creator, deployment_timestamp, network 
  } = contractDetails;

  //////////////////////////////////////////////////////////////////////////////////////////////
  

  return (
    <Box>
      <Box
        sx={{
          padding: "100px 80px 50px",
          [theme.breakpoints.up("sm")]: { maxWidth: "1400px" },
          width: "calc(100vw - 6px)",
          margin: "auto",
          textAlign: "left"
        }}
      >
        <Box>
          <Box
            sx={{
              height: "52px",
              background: "#00dbe3",
              fontSize: "36px",
              lineHeight: "60px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
              textAlign: "center"
            }}
          >
            SELL
          </Box>
          <Box sx={{ position: "relative", width: "100%" }}>
            <img
              alt="sell"
              src="/images/sell.jpg"
              style={{ width: "100%", display: "block" }}
            />
            <Box
              sx={{
                background: "#00dbe3",
                borderRadius: "6px",
                width: "367px",
                textAlign: "center",
                position: "absolute",
                right: "-10%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Box
                sx={{
                  fontSize: "36px",
                  lineHeight: "60px",
                  color: "#173039",
                  fontWeight: 700
                }}
              >
                Original Offer
              </Box>
              <Box sx={{ padding: "2px" }}>
                <Table sx={{ background: "white" }}>
                  <TableBody>
                    <TableRow
                      hover
                      sx={{
                        "& td": {
                          padding: "0px 5px",
                          borderRight: "2px solid #00dbe3",
                          width: "110px",
                          height: "110px"
                        },
                        "& td:last-child": { borderRight: "0px" }
                      }}
                    >
                      <TableCell align="center">
                        <Text1>Yield</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>{offer_yield}%</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>----</Text1>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                      sx={{
                        "& td": {
                          padding: "0px 5px",
                          borderRight: "2px solid #00dbe3",
                          width: "110px",
                          height: "110px"
                        },
                        "& td:last-child": { borderRight: "0px" }
                      }}
                    >
                      <TableCell align="center">
                        <Text1>Price</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>${official_price}</Text1>
                      </TableCell>
                      <TableCell align="center">
                        <Text1>NaN</Text1>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "52px",
              background: "#173039",
              fontSize: "30px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <PlaceIcon sx={{ color: "#2dd8c8" }} />
            20550 Townsen Blvd Bldg 2 unit 101
            <span style={{ color: "#2dd8c8" }}>&nbsp; Humble Tx 77338</span>
          </Box>
        </Box>
        <Box sx={{ padding: "40px 150px" }}>
          <Box
            sx={{
              borderRadius: "6px",
              backgroundColor: "#173039",
              textAlign: "center",
              width: "352px",
              padding: "10px"
            }}
          >
            <Typography
              sx={{
                fontSize: "36px",
                lineHeight: "60px",
                color: "#23a2bb",
                fontWeight: 700
              }}
            >
              Offer Number
            </Typography>
            <Typography
              sx={{ fontSize: "30px", color: "#fff", fontWeight: 400 }}
            >
              {offer_id || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ paddingLeft: "20px" }}>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Offer Token Name
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {offer_token || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Buyer Token Name
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {buyer_id || "N/A"}/
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Seller Address
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {seller_wallet_address || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Contract Address
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {contract_address || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Creator
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {creator || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Timestamp
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {deployment_timestamp || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Network
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                {network || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Quantity
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                149.888441
              </Typography>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#00dbe3", fontWeight: 600 }}
              >
                Price
              </Typography>
              <Typography
                sx={{ fontSize: "20px", color: "#162f38", fontWeight: 400 }}
              >
                1 Property Token name = Given Crypto name Quantity
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23a2bb",
              borderRadius: "6px",
              width: "100%",
              height: "64px",
              fontSize: "24px",
              lineHeight: "60px",
              textTransform: "uppercase",
              color: "#ffffff",
              fontWeight: 700,
              gap: "20px"
            }}
          >
            Cart
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: "32px", color: "#00dbe3" }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sell;
