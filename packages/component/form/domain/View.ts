/*
 * @Author: maggot-code
 * @Date: 2021-07-14 15:44:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 16:41:50
 * @Description: file content
 */
import { default as ViewProps } from '#/view'

class View {
    constructor(props: ViewProps) {
        console.log(props);
    }
}

export interface createView {
    (props: ViewProps): View
}