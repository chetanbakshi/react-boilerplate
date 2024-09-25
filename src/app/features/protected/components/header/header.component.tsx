import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { useActionsWithEffects } from "src/app/core/hooks/use-actions-with-effects";
import { DialogTypes } from "src/app/core/types/dialog.types";
import { DialogComponent } from "src/app/shared/components";

export const HeaderComponent: React.FC = () => {
    const dialogInitialState: DialogDTO = {
        type: DialogTypes.CONFIRM,
        isInProgress: false,
        error: "",
        desciption: "",
        title: "",
        open: false,

        onConfirm: () => { }
    }
    const [dialogStatus, setDialogStatus] = useState<DialogDTO>(dialogInitialState);
    const { logout } = useActionsWithEffects()
    const logoutHandler = () => {
        setDialogStatus({...dialogStatus, open: true, title: "Logout", desciption: "Are you sure you want to logout?"})
    }
    const logoutConfirmationHandler = () => {
        logout();
    }
    const logoutCancelHandler = () => {
        setDialogStatus(dialogInitialState)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React Boilerplate
                    </Typography>
                    <Button href="#/protected/dashboard" color="inherit">Dashboard</Button>
                    <Button href="#/protected/settings" color="inherit">Settings</Button>
                    <Button onClick={logoutHandler} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <DialogComponent {...dialogStatus} onDismiss={logoutCancelHandler} onConfirm={logoutConfirmationHandler} />
        </Box>
    )
}