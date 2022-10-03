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
        @apply bg-white px-7 py-8 text-gray-500 border-[6px] border-gray-200 hover:bg-primary-500 hover:text-white hover:border-primary-700 transition-colors duration-500 ease-in-out;

        &.filled {
            @apply bg-primary-500 text-white border-primary-700;
        }
    }
</style>