interface PasswordValidator {
    isValid: boolean;
    errors: String[] | undefined;
}

export default function passwordValidator(passwordStr: string): PasswordValidator {
    let isValid = true;
    let errorsArr: String[] = [];
    let password = passwordStr.split('');

    if(passwordStr.length < 5 || passwordStr.length > 15) {
        isValid = false;
        errorsArr.push("Password must be within 5 and 15 characters")
    }
    else if(!(password.includes("/\d/"))) {
        isValid = false;
        errorsArr.push("Password must contain a digit")
    }
    return {"isValid": isValid, "errors": errorsArr } as PasswordValidator
}