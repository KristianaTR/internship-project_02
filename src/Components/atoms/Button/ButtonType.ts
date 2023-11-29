export interface ButtonProps {
    text: string;
    backgroundColor?: '#363636' | '#D9D9D9' | 'transparent';
    color?: '#000000' | '#FFFFFF';
    cursor?: 'pointer' | 'not-allowed';
    boxShadow?: 'none';
    icon?:string;
    onClick?: () => void;
}