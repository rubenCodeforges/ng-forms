import {BaseInput, InputControlType} from "./BaseInput";
import {BaseInputParams} from "./BaseInputParams";

export class SelectInput<T> extends BaseInput<string> {
    public controlType: InputControlType = 'select';
    public options: T[];

    constructor(options: T[], params?: BaseInputParams) {
        super(params);
        this.options = options;
    }
}
