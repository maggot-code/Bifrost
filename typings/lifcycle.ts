/*
 * @Author: maggot-code
 * @Date: 2021-07-14 13:31:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-14 15:30:22
 * @Description: file content
 */
export enum StateMarker {
    // 表单状态
    FORM_INIT = 'onFormInit',
    FORM_MOUNT_START = 'onFormMountStart',
    FORM_MOUNT_RUN = 'onFormMountRun',
    FORM_MOUNT_END = 'onFormMountEnd',
    FORM_MOUNT_SUCCESS = 'onFormMountSuccess',
    FORM_MOUNT_FAIL = 'onFormMountFail',
    FORM_CHECK_START = 'onFormCheckStart',
    FORM_CHECK_RUN = 'onFormCheckRun',
    FORM_CHECK_END = 'onFormCheckEnd',
    FORM_CHECK_SUCCESS = 'onFormCheckSuccess',
    FORM_CHECK_FAIL = 'onFormCheckFail',
    FORM_SUBMIT_START = 'onFormSubmitStart',
    FORM_SUBMIT_RUN = 'onFormSubmitRun',
    FORM_SUBMIT_END = 'onFormSubmitEnd',
    FORM_SUBMIT_SUCCESS = 'onFormSubmitSuccess',
    FORM_SUBMIT_FAIL = 'onFormSubmitFail',
    FORM_RESET_START = 'onFormResetStart',
    FORM_RESET_RUN = 'onFormResetRun',
    FORM_RESET_END = 'onFormResetEnd',
    FORM_RESET_SUCCESS = 'onFormResetSuccess',
    FORM_RESET_FAIL = 'onFormResetFail',

    // 字段状态
    FIELD_INIT = 'onFieldInit',
    FIELD_VALUE_CHANGE_START = 'onFieldValueChangeStart',
    FIELD_VALUE_CHANGE_RUN = 'onFieldValueChangeRun',
    FIELD_VALUE_CHANGE_END = 'onFieldValueChangeEnd',
    FIELD_VALUE_CHANGE_SUCCESS = 'onFieldValueChangeSuccess',
    FIELD_VALUE_CHANGE_FAIL = 'onFieldValueChangeFail',
    FIELD_BASE_VALUE_CHANGE_START = 'onFieldBaseValueChangeStart',
    FIELD_BASE_VALUE_CHANGE_RUN = 'onFieldBaseValueChangeRun',
    FIELD_BASE_VALUE_CHANGE_END = 'onFieldBaseValueChangeEnd',
    FIELD_BASE_VALUE_CHANGE_SUCCESS = 'onFieldBaseValueChangeSuccess',
    FIELD_BASE_VALUE_CHANGE_FAIL = 'onFieldBaseValueChangeFail',
    FIELD_CHECK_START = 'onFieldCheckStart',
    FIELD_CHECK_RUN = 'onFieldCheckRun',
    FIELD_CHECK_END = 'onFieldCheckEnd',
    FIELD_CHECK_SUCCESS = 'onFieldCheckSuccess',
    FIELD_CHECK_FAIL = 'onFieldCheckFail'
}