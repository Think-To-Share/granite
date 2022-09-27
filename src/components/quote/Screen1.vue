<template>
    <section class="quartz-granite-part">
        <div class="quartz-heading-main">
            <h2 class="quartz-heading">Quartz</h2>
        </div>

        <div class="quartz-img-main">
            <div class="quartz-main" @click.prevent="selectProduct(1)">
                <div class="quartz-img-container">
                    <img
                        class="quartz-img"
                        src="./src/images/Viscon_White.jpg"
                    />
                    <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>  
        </div>
        <div class="granite-heading-main">
            <h2 class="granite-heading">Granite</h2>
        </div>
        <div class="granite-img-main">
            <div class="granite-main" @click.prevent="selectProduct(1)">
                <div class="granite-img-container">
                    <img
                        class="granite-img"
                        src="./src/images/Viscon_White.jpg"
                    />
                    <h3 class="granite-name">Viscon White</h3>
                </div>
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