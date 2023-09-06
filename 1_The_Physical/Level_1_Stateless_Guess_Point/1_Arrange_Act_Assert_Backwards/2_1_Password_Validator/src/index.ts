interface PasswordValidator {
    isValid: boolean;
    errors: String[] | undefined;
}

export default function passwordValidator(password: string): PasswordValidator {
    let isValid = false;
    if(password.length >= 5 && password.length <= 15) {
        isValid = true;
    }
    return {"isValid": isValid, "errors": [] } as PasswordValidator
}