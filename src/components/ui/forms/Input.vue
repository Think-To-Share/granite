<template>
    <input type="text" class="border-gray-300 text-gray-600 placeholder:text-gray-400 rounded-lg shadow-sm transition-colors duration-100 ease-in"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue']
    }
</script>
