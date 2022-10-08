<template>
    <div class="shadow-md border border-gray-200 rounded-md">
        <div class="w-full p-4" v-if="$slots.title || $slots.body">
            <Title v-if="$slots.title">
                <slot name="title" />
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
    components: { Title }
}
</script>

<style>

</style>