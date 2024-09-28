import { DialogDTO } from "src/app/core/dto/dialog.dto";
import { DialogType } from "src/app/core/types/dialog.type";

export const dialogInfoInitialStateVO: DialogDTO = {
    type: DialogType.INFO,
    isInProgress: false,
    error: "",
    desciption: "",
    title: "",
    open: false,
    onConfirm: () => { }

}