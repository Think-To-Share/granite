<template>
    <section>
        <Card>
            <template v-slot:body>
                <div class="w-full bg-gray-200 px-3 py-4 mb-5">
                    <h2 class=" font-medium text-2xl text-gray-500 text-center">Quartz</h2>
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
            </template>
        </Card>
    </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions } from "pinia"
import Card from '../ui/card/Card.vue'

export default {
    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"]),
        selectProduct(product_id) {
            this.axios.post("/request-quote-product", {
                "product_id": product_id
            }).then(res => {
                // Set Quote Id to State 
            });
            this.changeScreen(2);
        }
    },
    components: { Card }
}
</script>

<style lang="scss" scoped>

</style>