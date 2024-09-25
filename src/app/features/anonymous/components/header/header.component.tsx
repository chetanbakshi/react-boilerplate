import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const HeaderComponent: React.FC = () => {    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Boilerplate
                    </Typography>
                    <Button href="#/anonymous/home" color="inherit">Home</Button>
                    <Button href="#/anonymous/about-us" color="inherit">About Us</Button>
                    <Button href="#/anonymous/contact-us" color="inherit">Contact Us</Button>
                    <Button href="#/anonymous/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}