import {InputControlType} from "./BaseInput";

export interface BaseInputParams {
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: InputControlType;
}
