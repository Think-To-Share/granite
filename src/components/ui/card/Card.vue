<template>
    <div class="shadow-md border border-gray-200 rounded-md">
        <div class="w-full p-4" v-if="$slots.title || $slots.body">
            <Title v-if="$slots.title" @set-open="setInfoOpen($event)" :show-info-btn="$slots.info ? true : false">
                <slot name="title" />

                <template #info>
                    <slot name="info" />
                </template>
            </Title>

            <slot name="body" />
        </div>

        <!-- Fallback -->
        <slot />
    </div>
</template>

<script>
import Title from './Title.vue';

export default {
    components: { Title },
    data() {
        return {
            infoOpen: false,
        }
    },

    methods: {
        setInfoOpen(value) {
            this.infoOpen = value
        }
    }
}
</script>

<style>

</style>