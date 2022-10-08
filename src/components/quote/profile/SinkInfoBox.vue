<template>
    <div class="border p-5">
        <h4 class=" text-primary-500 text-center font-medium text-lg mb-5">{{ title }}</h4>
        <img class="w-full mb-5" :src="image" :alt="title">

        <select class="border-gray-300 w-full rounded-lg shadow-sm transition-colors duration-100 ease-in" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
            <slot name="options">
                <option selected>Choose</option>
            </slot>
        </select>
    </div>
</template>

<script>
export default {
    props: ['image', 'title', 'modelValue'],
    emits: ['update:modelValue'],
}
</script>
