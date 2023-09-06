interface PasswordValidator {
    isValid: boolean;
    errors: String[] | undefined;
}

export default function passwordValidator(password: string): PasswordValidator {
    let isValid = true;
    let errorsArr: String[] = [];

    if(password.length < 5 || password.length > 15) {
        isValid = false;
        errorsArr.push("Password must be within 5 and 15 characters")
    }
    return {"isValid": isValid, "errors": errorsArr } as PasswordValidator
}