<template>
    <button class="layout-grid" :class="{active}">
        <div class="min-h-[100px] " :class="{invisible: !has_left}">B</div>
        <div class="" :class="{invisible: !has_middle}">{{ middleAlpha }}</div>
        <div class="min-h-[100px] " :class="{invisible: !has_right}">C</div>
        <div class="col-span-3">A</div>
    </button>
</template>

<script>
    export default {
        props: ['has_left', 'has_middle', 'has_right', 'active'],

        computed: {
            middleAlpha() {
                if(! this.has_left) {
                    return 'B'
                }
                
                if(! this.has_right) {
                    return 'C'
                }

                return 'D'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout-grid {
        @apply w-full bg-white grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto] gap-2 items-center justify-between border border-gray-200 p-3 rounded-md transition-colors duration-200 ease-in-out;

        div {
            @apply bg-gray-400 text-white py-3 px-4 font-semibold text-sm text-center transition-colors duration-200 ease-in-out;
        }

        &:hover, 
        &.active {
            @apply bg-primary-400;

            div {
                @apply bg-white text-primary-400;
            }
        }
    }
</style>
