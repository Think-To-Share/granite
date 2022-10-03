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

<style lang="scss" scoped>
@import "rfs/scss";

.measurements-card{
    box-shadow : 0px 1px 5px 1px rgb(209 207 207 / 85%);
    border-bottom : 3px solid rgb(209 207 207 / 85%);
    border-radius : 0%;
    border : none;
    margin : 10;

    .mmcalculator{
        margin-bottom: 10px;
        .piece-box{
            align-items: center;
            display: grid;
            span{
                text-align: center;
                @include font-size(1.9rem);
                font-weight: 400;
            }
        }
        .mesaure-box__label{
            display: block;
            text-align: center;
            font-family: var(--primary-font);
            @include font-size(1rem);
            font-weight: 600;
            span{
                display: block;
                text-align: center;
                font-weight: 600;
                font-family: var(--primary-font);
                @include font-size(1.5rem)

            } 
        }
        .mesaure-box__input{
            .input-box{
                input{
                    padding: 1em 0.5em;
                }
            }
        }
    }
    .length-width-part{
        text-align: center;
        font-family: var(--primary-font);
        color:#3C7C8E;
        font-weight: 600;
        @include font-size(1.2rem);
    }
    .minus-btn{
        border-radius: 100%;
        height: 40px;
        width: 40px;
        border: none;
        background-color: #D9534F;
        svg{
            height: 20px;
            width: 20px;
            fill: #fff;
        }
    }
}

</style>