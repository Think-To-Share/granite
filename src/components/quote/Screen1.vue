<template>
    <section>
        <Card>
            <template v-slot:body>
                <div class="w-full bg-gray-200 px-3 py-4 mb-5">
                    <h2 class=" font-medium text-2xl text-gray-500 text-center">Quartz</h2>
                </div>

                <div class="grid gap-x-2 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
                    <a v-for="product in products" :key="product.id" class="relative hover:scale-110 transition-transform" href="#" @click.prevent="selectProduct(product)">
                        <img
                            class="w-full"
                            src="@/assets/images/AlpineGrey1-206x206.jpg"
                        />
                        <h3 class="absolute w-full bottom-0 left-0 px-2 py-4 bg-primary-400 text-center font-semibold text-md text-white">{{ product.attributes.name }}</h3>
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
    data: () => {
        return {
            products: [],
        }
    },

    mounted() {
        this.axios.get('http://127.0.0.1:8000/products').then(({data}) => {
            this.products = data.data
        })
    },

    methods: {
        ...mapActions(useQuoteStore, ["changeScreen", "setQuoteId", "setProduct"]),

        selectProduct(product) {
            this.axios.post("http://127.0.0.1:8000/request-quote-product", {
                "product_id": product.id
            }).then(({data}) => {
                this.setQuoteId(data.id)
                this.setProduct(product)

                this.changeScreen(2);
            });
        }
    },
    components: { Card }
}
</script>

<style lang="scss" scoped>

</style>