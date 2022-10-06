<template>
    <main class="p-5 w-2/3 mx-auto">
        <Transition name="fade" mode="out-in">
            <component :is="`screen${currentScreen}`" />
        </Transition>
    </main>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapState } from "pinia"
import Screen1 from "@/components/quote/Screen1.vue";
import Screen2 from "@/components/quote/Screen2.vue";
import Screen3 from "@/components/quote/Screen3.vue";
import Screen4 from "@/components/quote/Screen4.vue";

export default {
    components: {
        "screen1": Screen1,
        "screen2": Screen2,
        "screen3": Screen3,
        "screen4": Screen4,
    },

    computed:{
        ...mapState(useQuoteStore, ['currentScreen'])
    }
};
</script>
