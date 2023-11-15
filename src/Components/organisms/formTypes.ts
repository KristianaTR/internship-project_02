export interface CommonFormData {
    email: string;
    password: string;
}

export interface LoginFormDataType extends CommonFormData {}

export interface RegisterFormDataType extends CommonFormData {
    name: string;
    surname: string;
    emailRepeat: string;
    passwordRepeat: string;
};

export type FormData = LoginFormDataType | RegisterFormDataType;
export type AllFormKeys = keyof RegisterFormDataType | keyof LoginFormDataType;