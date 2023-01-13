<template>
    <Card>
        <template v-slot:title>{{ product.attributes.name }}</template>

        <template v-slot:body>
            <!-- <button class="bg-primary-500 text-white px-3 py-2 rounded-sm mb-5 border border-primary-500">20mm Polished</button> -->

            <div class="">
                <img src="@/assets/images/IceWhite.jpg" class="img-fluid">
            </div>
        </template>
    </Card>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import { useQuoteStore } from '@/stores/quote'
import { mapState } from 'pinia';

export default {
    components: { Card },
    computed: {
        ...mapState(useQuoteStore, ["product"])
    }
}
</script>
