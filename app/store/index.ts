import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
    state: () => ({
        example: {} as unknown,
    }),
    actions: {
        saveExample(example: unknown) {
            this.example = example;
        },
    },
});
