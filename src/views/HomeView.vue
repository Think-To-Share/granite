<template>
    <Header />

    <main class="p-5 w-full lg:w-2/3 mx-auto mb-20">
        <Transition name="fade" mode="out-in">
            <component :is="`screen${currentScreen}`" />
        </Transition>
    </main>

    <Footer />
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapState } from "pinia"
import Screen1 from "@/components/quote/Screen1.vue";
import Screen2 from "@/components/quote/Screen2.vue";
import Screen3 from "@/components/quote/Screen3.vue";
import Screen4 from "@/components/quote/Screen4.vue";
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    components: {
        "screen1": Screen1,
        "screen2": Screen2,
        "screen3": Screen3,
        "screen4": Screen4,
        Footer,
        Header
    },

    computed:{
        ...mapState(useQuoteStore, ['currentScreen'])
    }
};
</script>
