import { defineStore } from "pinia";

export const useQuoteStore = defineStore("quote", {
    state: () => {
        return {
            currentScreen: 1,
            quote_id: null,
            product: null,
        };
    },

    actions: {
        changeScreen(screen) {
            this.currentScreen = screen;
        },

        setQuoteId(value) {
            this.quote_id = value
        },

        setProduct(value) {
            this.product = value
        }
    },
});
