import 'reflect-metadata';
import {META_DATA_KEYS} from './META_DATA_KEYS';
import {FormFieldType} from '../models/FormFieldType';
import {LabelValueKeysNotDefinedException} from '../exceptions/LabelValueKeysNotDefinedException';
import {NgFormFieldOptions} from './NgFormFieldOptions';
import * as _ from 'lodash';

/**
 * Adds metadata to decorated Class field
 */

export function NgFormField(options: NgFormFieldOptions): (target: any, propertyKey: string) => void {

    if (hasNoRequiredFields(options)) {
        throw new LabelValueKeysNotDefinedException();
    }

    return (target: any, propertyKey: string) => {
        let metadata = _.setWith({}, propertyKey, options);
        if (_.hasIn(target, META_DATA_KEYS.NG_FORM_FIELD)) {
            metadata = _.get(target, META_DATA_KEYS.NG_FORM_FIELD);
            metadata[propertyKey] = options;
        }
        _.setWith(target, META_DATA_KEYS.NG_FORM_FIELD, metadata);
    };
}

function hasNoRequiredFields(options: NgFormFieldOptions) {
    return options.fieldType === FormFieldType.SELECT && !options.selectOptionKeys
        || options.fieldType === FormFieldType.RADIO && !options.selectOptionKeys;
}
