import {NgFormsMetadataKeys} from "./NgFormsMetadataKeys";

export function NgFormRequired(required: boolean = true): (target: any, propertyKey: string) => void {

    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(
            NgFormsMetadataKeys.NG_FORM_FIELD_REQUIRED,
            required,
            target,
            propertyKey
        );
    };
}
