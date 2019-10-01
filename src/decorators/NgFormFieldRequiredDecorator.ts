import {META_DATA_KEYS} from './META_DATA_KEYS';
import * as _ from 'lodash';

export function NgFormRequired(required: boolean = true): (target: any, propertyKey: string) => void {

    return (target: any, propertyKey: string) => {
        let metadata = _.setWith({}, propertyKey, required);

        if (_.hasIn(target, META_DATA_KEYS.NG_FORM_FIELD_REQUIRED)) {
            metadata = _.get(target, META_DATA_KEYS.NG_FORM_FIELD_REQUIRED);
            metadata[propertyKey] = required;
        }
        _.setWith(target, META_DATA_KEYS.NG_FORM_FIELD_REQUIRED, metadata);
    };
}
