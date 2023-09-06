interface PasswordValidator {
    isValid: boolean;
    errors: String[] | undefined;
}

export default function passwordValidator(password: string): PasswordValidator {
    return {"isValid": true, } as PasswordValidator
}