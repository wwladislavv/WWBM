import validate from 'game/utility/validate-config';

describe('validate config', () => {
    test('questions amount', () => {
        const config = [
            {
                question: '',
                award: 0,
                answers: [],
            },
        ];
        expect(validate(config)).toEqual({
            0: 'Exactly 12 questions are required',
        });
    });

    test('question', () => {
        const config = [
            {
                question: '',
                award: 0,
                answers: [],
            },
        ].concat(new Array(11).fill({}));
        expect(validate(config)).toEqual({ 0: 'Question is required' });
    });

    test('award', () => {
        const config = [
            {
                question: 'What is the capital of France?',
                award: 0,
                answers: [],
            },
        ].concat(new Array(11).fill(null));
        expect(validate(config)).toEqual({ 0: 'Award must be greater than 0' });
    });

    test('answers amount', () => {
        const config = [
            {
                question: 'What is the capital of France?',
                award: 100,
                answers: [],
            },
        ].concat(new Array(11).fill(null));
        expect(validate(config)).toEqual({
            0: 'At least 4 answers are required',
        });
    });
});
