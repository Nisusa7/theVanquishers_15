import { Box, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    return (
        <Box style={{margin:'5%'}}>
            <Box style={{ display:'flex', alignContent: 'center', alignItems: 'center'}}>
                <Typography style={{margin: '3px 15px'}}>Home</Typography>
                <Typography style={{margin: '3px 15px'}}>About</Typography>
                <Typography style={{margin: '3px 15px'}}>FAQs</Typography>
                <Box style={{ display:'flex', alignContent: 'center', alignItems: 'center', marginLeft: '70%'}}>
                    <TwitterIcon style={{margin: '3px 15px'}}/>
                    <FacebookIcon style={{margin: '3px 15px'}}/>
                    <InstagramIcon style={{margin: '3px 15px'}}/>
                </Box>
            </Box>
            <hr></hr>
            <Box style={{textAlign: 'center'}}>
                <Typography>&copy; TheFolklore : All Rights Reserved 2022</Typography>
            </Box>
        </Box>
    )
}
export default Footer;