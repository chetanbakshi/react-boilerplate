import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { DialogTypes } from "src/app/core/types/dialog.types";

export const dialogInitialStateVO: DialogDTO = {
    type: DialogTypes.INFO,
    isInProgress: false,
    error: "",
    desciption: "",
    title: "",
    open: false,
    onDismiss: () => { }
}