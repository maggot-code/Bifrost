/*
 * @Author: maggot-code
 * @Date: 2021-07-14 15:45:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 16:31:32
 * @Description: file content
 */
import {
    StringOrNumber,
    SizeType
} from '#/share'

enum LabelPositionType {
    RIGHT = 'right',
    LEFT = 'left'
}

interface IFormUIBaseProps {
    readonly showMessage: boolean // true
    readonly inlineMessage: boolean // false
    labelPosition?: LabelPositionType // LEFT
    labelWidth?: StringOrNumber  // 120
    size?: SizeType // SMALL
}

export interface IFormUIProps extends IFormUIBaseProps {
    readonly inline: boolean // false
    readonly hideRequiredAsterisk: boolean // true
    readonly statusIcon: boolean, // false
    gutter?: number, // 20
}

export interface IFormItemUIProps extends IFormUIBaseProps {
    span?: number // 24
}

enum InputType {
    TEXT = 'text',
    TEXTAREA = 'textarea',
    EMAIL = 'email',
    HIDDEN = 'hidden',
    PASSWORD = 'password',
    SEARCH = 'search',
    TEL = 'tel',
    URL = 'url'
}

interface IInputAutoSize {
    minRows?: number, // 3
    maxRows?: number // 6
}

export interface IInputUIProps {
    readonly autocomplete: string, // off
    type?: InputType // TEXT
    maxlength?: number // Infinity
    minlength?: number // 0
    showWordLimit?: boolean, // false
    clearable?: boolean, // true
    showPassword?: boolean, // true
    size?: SizeType, // SMALL
    prefixIcon?: string, // ''
    suffixIcon?: string, // ''
    rows?: number, // 3
    autosize?: IInputAutoSize
}

export default interface ViewProps extends
    IFormUIProps,
    IFormItemUIProps,
    IInputUIProps { }