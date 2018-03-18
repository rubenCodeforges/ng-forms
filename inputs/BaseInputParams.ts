import {InputControlType} from "./InputControlType";

export interface BaseInputParams {
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: InputControlType;
}
