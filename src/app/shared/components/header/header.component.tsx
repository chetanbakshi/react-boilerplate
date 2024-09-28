import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { DialogType } from "src/app/core/types";
import { DialogComponent } from "src/app/shared/components";
import { dialogConfirmInitialStateVO } from "src/app/core/initial-state";
import { HeaderDTO } from "./header.dto";
import { MenuItemDTO } from "src/app/core/dto/menu.dto";
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderComponent: React.FC<HeaderDTO> = (props) => {
    const { menuItems } = props;
    const [dialogStatus, setDialogStatus] = useState<DialogDTO>(dialogConfirmInitialStateVO);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { logout } = useActionsWithEffects();

    const container =  window.document.body;
    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            {menuItems ? menuItems.map((item: MenuItemDTO, index) => (
              item.action ? 
              <ListItem  key={'menu'+index} disablePadding>
                <ListItemButton onClick={() => buttonClickHandler(item.action)} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem> :
              <ListItem key={'menu'+index} disablePadding>
              <ListItemButton href={item.link} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            )): ""}
          </List>
        </Box>
      );

    const buttonClickHandler = (action: string) => {
        if (action === "logout") {
            logoutHandler();
        }
    }

    const logoutHandler = () => {
        setDialogStatus({ ...dialogStatus, open: true, title: "Logout", desciption: "Are you sure you want to logout?", type: DialogType.CONFIRM })
    }
    const logoutConfirmationHandler = () => {
        setDialogStatus(dialogConfirmInitialStateVO);
        setTimeout(() => {
            logout();
        }, 50);
    }
    const logoutCancelHandler = () => {
        setDialogStatus(dialogConfirmInitialStateVO)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} variant="h6" component="div">
                        React Boilerplate
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ m: 1.5, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {
                            menuItems ? menuItems.map((item: MenuItemDTO, index) => {
                                return item.action
                                    ?
                                    <Button key={'menu-button' + index} onClick={() => buttonClickHandler(item.action)} color="inherit">{item.label}</Button>
                                    :
                                    <Button key={'menu-button' + index} href={item.link} color="inherit">{item.label}</Button>
                            }) : ''
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
            <DialogComponent {...dialogStatus} onDismiss={logoutCancelHandler} onConfirm={logoutConfirmationHandler} />
        </Box>
    )
}