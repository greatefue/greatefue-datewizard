declare type DateInstructionsOptions = {
    [key: string]: boolean;
};
export declare const DateInstructions: {
    year: boolean;
    month: boolean;
    day: boolean;
    hour: boolean;
    minute: boolean;
    second: boolean;
    time: boolean;
    date: boolean;
};
export declare function DaysAgo(value: string | number | Date, DateInstructions?: DateInstructionsOptions): string | number | Date;
export {};
