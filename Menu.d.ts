import * as React from 'react';
import { CSSMotionProps } from 'rc-motion';
import SubPopupMenu from './SubPopupMenu';
import { noop } from './util';
import { RenderIconType, SelectInfo, SelectEventHandler, DestroyEventHandler, MenuMode, OpenAnimation, MiniStore, BuiltinPlacements, TriggerSubMenuAction, MenuClickEventHandler } from './interface';
export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onSelect'> {
    defaultSelectedKeys?: string[];
    defaultActiveFirst?: boolean;
    selectedKeys?: string[];
    defaultOpenKeys?: string[];
    openKeys?: string[];
    mode?: MenuMode;
    getPopupContainer?: (node: HTMLElement) => HTMLElement;
    onClick?: MenuClickEventHandler;
    onSelect?: SelectEventHandler;
    onOpenChange?: (openKeys: React.Key[]) => void;
    onDeselect?: SelectEventHandler;
    onDestroy?: DestroyEventHandler;
    subMenuOpenDelay?: number;
    subMenuCloseDelay?: number;
    forceSubMenuRender?: boolean;
    triggerSubMenuAction?: TriggerSubMenuAction;
    level?: number;
    selectable?: boolean;
    multiple?: boolean;
    activeKey?: string;
    prefixCls?: string;
    builtinPlacements?: BuiltinPlacements;
    itemIcon?: RenderIconType;
    expandIcon?: RenderIconType;
    overflowedIndicator?: React.ReactNode;
    /** Menu motion define */
    motion?: CSSMotionProps;
    /** Default menu motion of each mode */
    defaultMotions?: Partial<{
        [key in MenuMode | 'other']: CSSMotionProps;
    }>;
    /** @deprecated Please use `motion` instead */
    openTransitionName?: string;
    /** @deprecated Please use `motion` instead */
    openAnimation?: OpenAnimation;
    /** direction of menu */
    direction?: 'ltr' | 'rtl';
    inlineCollapsed?: boolean;
    /** SiderContextProps of layout in ant design */
    siderCollapsed?: boolean;
    collapsedWidth?: string | number;
}
export interface MenuState {
    switchingModeFromInline: boolean;
}
declare class Menu extends React.Component<MenuProps, MenuState> {
    static defaultProps: {
        selectable: boolean;
        onClick: typeof noop;
        onSelect: typeof noop;
        onOpenChange: typeof noop;
        onDeselect: typeof noop;
        defaultSelectedKeys: any[];
        defaultOpenKeys: any[];
        subMenuOpenDelay: number;
        subMenuCloseDelay: number;
        triggerSubMenuAction: string;
        prefixCls: string;
        className: string;
        mode: string;
        style: {};
        builtinPlacements: {};
        overflowedIndicator: JSX.Element;
    };
    constructor(props: MenuProps);
    isRootMenu: boolean;
    store: MiniStore;
    innerMenu: typeof SubPopupMenu;
    inlineOpenKeys: string[];
    prevOpenKeys: string[];
    componentDidMount(): void;
    componentDidUpdate(prevProps: MenuProps): void;
    updateOpentKeysWhenSwitchMode(prevProps: MenuProps): void;
    updateMenuDisplay(): void;
    onSelect: (selectInfo: SelectInfo) => void;
    onClick: MenuClickEventHandler;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>, callback: any) => void;
    onOpenChange: (event: any) => void;
    onDeselect: (selectInfo: SelectInfo) => void;
    getRealMenuMode(): MenuMode;
    getInlineCollapsed(): boolean;
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onTransitionEnd: (e: React.TransitionEvent<HTMLDivElement>) => void;
    restoreModeVerticalFromInline(): void;
    setInnerMenu: (node: any) => void;
    updateMiniStore(): void;
    render(): JSX.Element;
}
export default Menu;