import {BaseInput} from "../inputs/BaseInput";
import * as _ from "lodash";
import {TextInput} from "../inputs/TextInput";

export class FormAwareDto {
    public dtoToBaseInputs(): BaseInput<any>[] {
        return <BaseInput<any>[]> _.mapKeys(this, (value, key) => {
            if (typeof value === 'string') {
                return new TextInput();
            } else if (typeof value === 'boolean') {
                return;
            }

            if (_.isArray(value)) {
                return;
            }
        });
    }
}
