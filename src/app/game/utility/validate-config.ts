import type { Config, ConfigErrors } from '../types';

export default function validate(config: Config) {
    const errors: ConfigErrors = {};

    if (config.length !== 12) {
        errors[0] = 'Exactly 12 questions are required';
        return errors;
    }

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < 12; i++) {
        const { question, award, answers } = config[i];
        if (!question.length) {
            errors[i] = 'Question is required';
            break;
        }
        if (award <= 0) {
            errors[i] = 'Award must be greater than 0';
            break;
        }
        if (answers.length < 4) {
            errors[i] = 'At least 4 answers are required';
            break;
        }
        if (answers.filter((a) => a.correct).length < 1) {
            errors[i] = 'At least one correct answer is required';
            break;
        }
        if (answers.some((a) => !a.value.length)) {
            errors[i] = 'All answers must have a value';
        }
    }

    return errors;
}
