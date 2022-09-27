import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quote", {
    state: () => {
        return {
            currentScreen: 1,
            quote_id: null,
        };
    },

    actions: {
        changeScreen(screen) {
            this.currentScreen = screen;
        },
    },
});
