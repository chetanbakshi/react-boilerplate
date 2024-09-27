import { MenuItemDTO } from "./menu-item.dto";

export interface MenuListDTO {
    menuName: string;
    menuItems: MenuItemDTO[];
}