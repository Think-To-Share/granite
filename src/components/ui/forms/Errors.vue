<template>
    <div v-if="errors" class="flex flex-col gap-y-2">
        <div class="bg-rose-500 text-white text-sm font-light px-3 py-2 rounded-md" v-for="(error, index) in errors" :key="index">{{error}}</div>
    </div>
</template>

<script>
export default {
    props: ['errors']
}
</script>