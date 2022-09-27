import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quote", {
    state: () => {
        return {
            currentScreen: 1,
        };
    },

    actions: {
        changeScreen(screen) {
            this.currentScreen = screen;
        },
    },
});
