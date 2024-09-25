import { DialogTypes } from "../types/dialog.types";

export interface DialogDTO {
    type: DialogTypes;
    isInProgress: boolean;
    error: string;
    desciption: string;
    title: string;
    open: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onDismiss?: () => void;
}