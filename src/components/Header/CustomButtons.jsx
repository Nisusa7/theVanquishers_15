import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from "../Login/LoginDialog";
import { useState, useContext } from "react";

import { DataContext } from '../context/DataProvider'
import Profile from "./Profile";




const OuterBox = styled(Box)`
    display:flex;
    margin-left:20px;
    // margin-top: 15px;
`
const InnerBox = styled(Box)`
    margin-right: 20px;
`
const ShoppingCart = styled(ShoppingCartIcon)`
    // background: #fff;
    font-size:30px;
`
const AccountButton = styled(Button)`
    text-transform: none;
    font-family: 'Source Serif Pro', serif;
    font-weight: bold;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const openDialogue = () => {
        setOpen(true);
    }

    const {account}= useContext(DataContext);

    return (
        <OuterBox>
            {
                account? <Profile account={account}/>
                       : <InnerBox><AccountButton AccountButton variant="contained" color="success" onClick={openDialogue}>LogIn</AccountButton></InnerBox> 
            }
           
            <Box>
                <ShoppingCart />
            </Box>
            <LoginDialogue open={open} setOpen={setOpen} />
        </OuterBox>
    )
}
export default CustomButtons;