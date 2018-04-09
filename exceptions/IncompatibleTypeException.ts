export class IncompatibleTypeException extends Error {
    constructor() {
        super('The types of class field is not compatible with FormFieldType');
    }
}
