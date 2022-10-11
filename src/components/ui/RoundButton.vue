<template>
    <button
        :class="btn_class"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: ['is_active'],

    computed: {
        btn_class() {
            return {
                filled: this.is_active,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        @apply bg-white rounded-full md:p-6 p-4 md:text-base text-sm text-primary-500 font-medium md:border-[6px] border-[4px] border-gray-200 hover:bg-primary-500 hover:text-white hover:border-primary-700 transition-colors duration-500 ease-in-out;

        &.filled {
            @apply bg-primary-500 text-white border-primary-700;
        }
    }
</style>