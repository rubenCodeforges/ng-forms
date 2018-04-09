export class LabelValueKeysNotDefinedException extends Error {
    constructor() {
        super('labelValueKeys are not defined for NgFormField of type Select');
    }
}
