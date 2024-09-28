import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { DialogType } from "src/app/core/types/dialog.type";

export const dialogConfirmInitialStateVO: DialogDTO = {
    type: DialogType.CONFIRM,
    isInProgress: false,
    error: "",
    desciption: "",
    title: "",
    open: false,
    onConfirm: () => { }
}