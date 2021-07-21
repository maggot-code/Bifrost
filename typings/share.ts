/*
 * @Author: maggot-code
 * @Date: 2021-07-14 13:30:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 15:54:23
 * @Description: 共享类型
 */
export type ValueType = any

export type AnyFunction = (...args: any[]) => any

export type StringOrNumber = string | number

export enum SizeType {
    MEDIUM = 'medium',
    SMALL = 'small',
    MINI = 'mini'
}