import { DialogType } from "../constant/dialog.type";

export interface DialogDTO {
    type: DialogType;
    isInProgress: boolean;
    error: string;
    desciption: string;
    title: string;
    open: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onDismiss?: () => void;
}