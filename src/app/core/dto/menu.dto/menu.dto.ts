import { MenuItemDTO } from "./menu-item.dto";
import { MenuListDTO } from "./menu-list.dto";

export interface MenuDTO {
    menuLoadError: string;
    menuList: MenuListDTO[];
    currentMenu: string | null;
}