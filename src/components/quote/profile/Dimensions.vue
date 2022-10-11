<template>
    <div class="grid grid-cols-12 gap-3 items-center">
        <div class="lg:col-span-1 col-span-12 lg:text-center text-left">
            <label class="text-slate-600 text-sm select-none inline-flex items-center lg:flex-col gap-x-1">Piece
                <span class=" text-xl font-semibold">{{ indexLetter }}</span> 
            </label>
        </div>

        <div class=" col-span-4">
            <Input placeholder="2500mm" class="w-full" v-model="dimension.length" />
        </div>
        <div class=" lg:col-span-1 col-span-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div class=" col-span-4">
            <Input placeholder="600mm" class="w-full" v-model="dimension.width" /> 
        </div>
        <div class=" col-span-2">
            <button class="bg-rose-500 p-2 outline-none rounded-full text-white transition-colors duration-300 ease-in-out hover:bg-rose-600 focus:bg-rose-600 focus:ring-2 focus:ring-rose-500/25" @click="remove()" v-if="has_minus_btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';
import Input from '@/components/ui/forms/Input.vue';

export default {
    props: ["dimension", "has_minus_btn", "index"],
    methods: {
        ...mapActions(useQuoteProfileStore, ["removeDimension"]),
        remove() {
            this.removeDimension(this.index);
        },
    },
    computed: {
        indexLetter() {
            // First letter ASCII value
            const A = "A".charCodeAt(0);
            return String.fromCharCode(A + this.index);
        }
    },
    components: { Input }
}
</script>
