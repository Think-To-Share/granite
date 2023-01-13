<template>
    <Header />

    <main class="p-5 w-full xl:w-2/3 mx-auto mb-20">
        <div class="grid grid-cols-4 gap-2 lg:gap-5 mb-20 select-none">
            <div class=" flex flex-col items-center text-center">
                <img src="@/assets/images/icon-step1.svg" class="hidden lg:block" alt="Step 1">

                <span class="z-10 bg-primary-500 rounded-full h-8 w-8 sm:h-10 sm:w-10 grid place-items-center text-white font-medium text-sm sm:text-lg ring-2 ring-offset-4 ring-primary-400 mb-4 mt-10">1</span>
                <h5 class="text-sm sm:text-lg text-primary-500">Choose Range</h5>
                <p class="text-xs text-gray-400 hidden lg:block">Start by choosing the range you want your quote estimate in.</p>
            </div>

            <div class=" flex flex-col items-center text-center relative has-line">
                <img src="@/assets/images/icon-step2.svg" class="hidden lg:block" alt="Step 2">

                <span class="z-10 bg-primary-500 rounded-full h-8 w-8 sm:h-10 sm:w-10 grid place-items-center text-white font-medium text-sm sm:text-lg ring-2 ring-offset-4 ring-primary-400 mb-4 mt-10">2</span>
                <h5 class="text-sm sm:text-lg text-primary-500">Installation</h5>
                <p class="text-xs text-gray-400 hidden lg:block">Confirm the installation post code.</p>
            </div>

            <div class=" flex flex-col items-center text-center relative has-line">
                <img src="@/assets/images/icon-step3.svg" class="hidden lg:block" alt="Step 3">

                <span class="z-10 bg-primary-500 rounded-full h-8 w-8 sm:h-10 sm:w-10 grid place-items-center text-white font-medium text-sm sm:text-lg ring-2 ring-offset-4 ring-primary-400 mb-4 mt-10">3</span>
                <h5 class="text-sm sm:text-lg text-primary-500">Profile & Measurements</h5>
                <p class="text-xs text-gray-400 hidden lg:block">Choose your edge finish and your worktop sizes, upload a plan or your approximate kitchen size.</p>
            </div>

            <div class=" flex flex-col items-center text-center relative has-line">
                <img src="@/assets/images/icon-step4.svg" class="hidden lg:block" alt="Step 4">

                <span class="z-10 bg-primary-500 rounded-full h-8 w-8 sm:h-10 sm:w-10 grid place-items-center text-white font-medium text-sm sm:text-lg ring-2 ring-offset-4 ring-primary-400 mb-4 mt-10">4</span>
                <h5 class="text-sm sm:text-lg text-primary-500">Your Details</h5>
                <p class="text-xs text-gray-400 hidden lg:block">Confirm you name, email and phone number to receive your quote estimate within 5 minutes during working hours.</p>
            </div>
        </div>

        <Transition name="fade" mode="out-in">
            <KeepAlive>
                <component :is="`screen${currentScreen}`" />
            </KeepAlive>
        </Transition>
    </main>

    <Footer />
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapState } from "pinia"
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { defineAsyncComponent } from '@vue/runtime-core';

export default {
    components: {
        "screen1": defineAsyncComponent(() => import('@/components/quote/Screen1.vue')),
        "screen2": defineAsyncComponent(() => import('@/components/quote/Screen2.vue')),
        "screen3": defineAsyncComponent(() => import('@/components/quote/Screen3.vue')),
        "screen4": defineAsyncComponent(() => import('@/components/quote/Screen4.vue')),
        Footer,
        Header
    },

    computed:{
        ...mapState(useQuoteStore, ['currentScreen'])
    }
};
</script>

<style lang="scss" scoped>
    .has-line {
        &::before {
            content: "";
            height: 1px;
            left: -54%;
            width: 100%;
            position: absolute;
            top: 55px;
            z-index: 0;
            @apply bg-primary-500;

            @media (min-width: 640px) {
                top: 60px;
            }

            @media (min-width: 1024px) {
                top: 162px;
            }
        }
    }
</style>
