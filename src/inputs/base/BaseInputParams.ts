import {InputControlType} from "../InputControlType";
import {SelectOption} from "../SelectOption";

export interface BaseInputParams {
    label?: string;
    value?: string;
    selectOptions?: SelectOption[];
    required?: boolean;
    order?: number;
    controlType?: InputControlType;
}
