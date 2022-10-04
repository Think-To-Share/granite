<template>
    <div class="flex gap-3 items-center">
        <div class="w-1/12 text-center">
            <label class="text-gray-700 text-sm">Piece <br>
                <span class=" text-xl font-semibold">{{ indexLetter }}</span> 
            </label>
        </div>

        <div class="w-4/12">
            <input placeholder="2500mm" type="text" class="w-full" v-model="dimension.length">
        </div>
        <div class="w-1/12 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div class="w-4/12">
            <input placeholder="600mm" type="text" class="w-full" v-model="dimension.width"> 
        </div>
        <div class="w-2/12">
            <button class="bg-red-500 p-2 rounded-full text-white transition-colors duration-300 ease-in-out hover:bg-red-600" @click="remove()" v-if="has_minus_btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>

            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';

export default {
    props: ['dimension', 'has_minus_btn', 'index'],

    methods: {
        ...mapActions(useQuoteProfileStore, ['removeDimension']),

        remove() {
            this.removeDimension(this.index)
        },
    },

    computed: {
        indexLetter() {
            // First letter ASCII value
            const A = 'A'.charCodeAt(0)

            return String.fromCharCode(A + this.index)
        }
    }
}
</script>
