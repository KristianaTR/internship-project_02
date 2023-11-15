export interface InputProps {
    label: string,
    inputType?: string,
    id: string,
    placeholder: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}