<template>
    <button
        class="granite-round-btn"
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
    .granite-round-btn {
        font-family: var(--primary-font);
        padding: 2%;
        border-radius: 60%;
        transition: all 0.5s ease 0s;
        background-color: #fff;
        border: 6px solid #ddd;
        color: #888;

        &.filled {
            background-color: #3c7c8e;
            border: 6px solid #244a55;
            color: #fff;
        }

        &:last-child {
            margin: 2%;
        }

        &:hover {
            background-color: #3c7c8e;
            border: 6px solid #244a55;
            color: #fff;
        }
    }
</style>