<template>
    <section>
        <div class="w-full p-4 shadow-md border border-gray-200 rounded-md">
            <div class="w-full bg-gray-200 px-3 py-4 mb-5">
                <h2 class=" font-bold text-2xl text-gray-500">Quartz</h2>
            </div>

            <div class="grid grid-cols-8">
                <a class="relative hover:scale-110 transition-transform" href="#" @click.prevent="selectProduct(1)">
                    <img
                        class="w-full"
                        src="@/assets/images/AlpineGrey1-206x206.jpg"
                    />
                    <h3 class="absolute w-full bottom-0 left-0 px-2 py-4 bg-primary-400 text-center font-semibold text-md text-white">Viscon White</h3>
                </a>  
            </div>
        </div>
    </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions } from "pinia"

export default {
    methods:{
        ...mapActions(useQuoteStore, ['changeScreen']),

        selectProduct(product_id) {
            this.axios.post('/request-quote-product', {
                'product_id': product_id
            }).then(res => {
                // Set Quote Id to State 
            })

            this.changeScreen(2)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>