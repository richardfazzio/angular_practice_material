export interface RandomInterface {
    aOptionalFunction?: (val: boolean) => void;
    aOptionalFunction2?: (value: string) => void;
    aRequiredFunction: (num: number) => void;
    value: string;
    opt?: boolean;
}