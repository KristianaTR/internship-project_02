export interface ButtonProps {
    text?: string;
    backgroundColor?: '#363636' | '#D9D9D9';
    color?: '#000000' | '#FFFFFF';
    cursorAction?: 'cursor: pointer' | 'cursor:not-allowed';
    icon?:string;
    onClick?: () => void;
}