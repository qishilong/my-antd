import { createContext } from 'react';
export type MenuMode = 'vertical' | 'horizontal' | 'inline';

export interface MenuContextProps {
  mode: MenuMode;
  inlineIndent: number;
  level: number;
  selectedKeys?: Array<string>;
  openKeys?: Array<string>;
  onSelect?: Function;
  onOpenChange?: Function;
  onClick?: Function;
}

export default createContext<MenuContextProps>({
  level: 0,
  mode: 'vertical',
  inlineIndent: 24,
})