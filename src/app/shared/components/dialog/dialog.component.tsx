import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogDTO } from 'src/app/core/dto/dialog.dto';
import { DialogType } from 'src/app/core/types/dialog.type';



export const DialogComponent = (props: DialogDTO) => {
    const { onDismiss, onConfirm } = props;
    const [open, setOpen] = React.useState<boolean>(false);    

    const confirmationHandler = () => {
        setOpen(false);
        if (onConfirm) {
            setTimeout(() => {
                onConfirm();
            }, 100);
        }
    }

    const handleClose = () => {
        setOpen(false);

        if (onDismiss) {
            setTimeout(() => {
                onDismiss();
            }, 100);
        }

    };

    React.useEffect(() => {
        if (props.open) {
            setOpen(props.open);
        }
    }, [props]);



    return (
        <Dialog
            open={open}
            onClose={handleClose}
            // PaperComponent={PaperComponent}
        >
            <DialogTitle id="draggable-dialog-title">
                {props.title ? props.title : ""}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.desciption ? props.desciption : null}
                </DialogContentText>
            </DialogContent>
            {!props.isInProgress ? <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    {props.type === DialogType.INFO ? 'Close' : 'Cancel'}
                </Button>
                {props.type === DialogType.CONFIRM ? <Button onClick={confirmationHandler}>Yes</Button> : ""}
            </DialogActions> : ""}
        </Dialog>

    );
}
