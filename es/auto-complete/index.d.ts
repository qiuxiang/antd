/**
 * TODO: 4.0
 * - remove `dataSource`
 * - `size` not work with customizeInput
 * - customizeInput not feedback `ENTER` key since accessibility enhancement
 */
import * as React from 'react';
import { InternalSelectProps, OptionType } from '../select';
export interface DataSourceItemObject {
    value: string;
    text: string;
}
export declare type DataSourceItemType = string | DataSourceItemObject;
export interface AutoCompleteProps extends Omit<InternalSelectProps<string>, 'inputIcon' | 'loading' | 'mode' | 'optionLabelProp' | 'labelInValue'> {
    dataSource?: DataSourceItemType[];
}
declare const RefAutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<unknown>>;
declare type RefAutoCompleteWithOption = typeof RefAutoComplete & {
    Option: OptionType;
};
declare const _default: RefAutoCompleteWithOption;
export default _default;
