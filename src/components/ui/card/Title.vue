<template>
    <div class="mb-5 flex gap-3 items-center">
        <h4 class="text-[#69b6d5] md:text-xl text-lg font-medium">
            <slot />
        </h4>

        <button v-if="showInfoBtn" class="border border-gray-400 rounded-full w-8 h-8 inline-grid place-items-center" @click="infoBtnClick()">?</button>
    </div>

    <transition name="slide-fade">
        <div class="mb-5 p-2 border border-primary-500 bg-white rounded-md shadow-md" v-if="infoOpen">
            <slot name="info" />
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                infoOpen: false,
            }
        },
        props: ['showInfoBtn'],
        methods: {
            infoBtnClick() {
                this.infoOpen = !this.infoOpen
            }
        }
    }
</script>
