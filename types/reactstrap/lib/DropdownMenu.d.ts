import { CSSModule } from '../index';

export interface DropdownMenuProps {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

export const DropdownMenu: React.StatelessComponent<DropdownMenuProps>;
export default DropdownMenu;
