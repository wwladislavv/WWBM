import validate from '../src/app/game/utility/validate-config';

describe('validate config', () => {
    test('question', () => {
        const config = [
            {
                question: '',
                award: 0,
                answers: [],
            },
        ];
        expect(validate(config)).toEqual({ 0: 'Question is required' });
    });

    test('award', () => {
        const config = [
            {
                question: 'What is the capital of France?',
                award: 0,
                answers: [],
            },
        ];
        expect(validate(config)).toEqual({ 0: 'Award must be greater than 0' });
    });

    test('answers', () => {
        const config = [
            {
                question: 'What is the capital of France?',
                award: 100,
                answers: [],
            },
        ];
        expect(validate(config)).toEqual({
            0: 'At least two answers are required',
        });
    });
});
