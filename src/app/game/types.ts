export type Answer = { value: string; correct: boolean };

type ConfigItem = {
    question: string;
    answers: Answer[];
    award: number;
};

export type Config = ConfigItem[];

export enum Status {
    SUCCESS = 'success',
    ERROR = 'error',
    SELECTED = 'selected',
}
