import type { Config, ConfigErrors } from '../types';

export default function validate(config: Config) {
    const errors: ConfigErrors = {};
    config.forEach(({ question, award, answers }, index) => {
        if (!question.length) {
            errors[index] = 'Question is required';
            return;
        }

        if (award <= 0) {
            errors[index] = 'Award must be greater than 0';
            return;
        }

        if (answers.length < 2) {
            errors[index] = 'At least two answers are required';
            return;
        }
        if (answers.filter((a) => a.correct).length < 1) {
            errors[index] = 'At least one correct answer is required';
            return;
        }
        if (answers.some((a) => !a.value.length)) {
            errors[index] = 'All answers must have a value';
        }
    }, []);

    return errors;
}
