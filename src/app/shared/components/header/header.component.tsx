import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { DialogType } from "src/app/core/constant/dialog.type";
import { DialogComponent } from "src/app/shared/components";
import { dialogConfirmInitialStateVO } from "src/app/core/initial-state";
import { HeaderDTO } from "./header.dto";
import { MenuItemDTO } from "src/app/core/dto/menu.dto";

export const HeaderComponent: React.FC<HeaderDTO> = (props) => {
    const { menuItems } = props;
    const [dialogStatus, setDialogStatus] = useState<DialogDTO>(dialogConfirmInitialStateVO);
    const { logout } = useActionsWithEffects();

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Boilerplate
                    </Typography>
                    {
                        menuItems && menuItems.map((item: MenuItemDTO, index) => {
                            return item.action
                                ?
                                <Button key={index} onClick={() => buttonClickHandler(item.action)} color="inherit">{item.label}</Button>
                                :
                                <Button key={index} href={item.link} color="inherit">{item.label}</Button>
                        })
                    }
                    
                </Toolbar>
            </AppBar>
            <DialogComponent {...dialogStatus} onDismiss={logoutCancelHandler} onConfirm={logoutConfirmationHandler} />
        </Box>
    )
}