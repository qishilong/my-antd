import InternalMenu from './Menu';
import Item from './Item';
import SubMenu from './SubMenu';


type MenuType = typeof InternalMenu;
interface MenuInterface extends MenuType {
  Item: typeof Item;
  SubMenu: typeof SubMenu;
}

const Menu = InternalMenu as MenuInterface;
Menu.Item = Item;
Menu.SubMenu = SubMenu;

export default Menu;
