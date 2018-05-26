import {InputControlType} from "../InputControlType";
import {SelectOption} from "../SelectOption";

export interface BaseInputParams {
    label?: string;
    value?: string;
    selectOptions?: SelectOption[];
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    order?: number;
    controlType?: InputControlType;
}
