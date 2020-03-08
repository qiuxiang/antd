import * as React from 'react';
import { SizeType } from '../config-provider/SizeContext';
export interface ButtonGroupProps {
    size?: SizeType;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
}
declare const ButtonGroup: React.SFC<ButtonGroupProps>;
export default ButtonGroup;
