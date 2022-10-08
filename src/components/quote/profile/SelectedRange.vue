<template>
    <Card>
        <template v-slot:title>White Diamond Quartz</template>

        <template v-slot:body>
            <button class="bg-primary-500 text-white px-3 py-2 rounded-sm mb-5 border border-primary-500">20mm Polished</button>

            <div class="">
                <img src="@/assets/images/IceWhite.jpg" class="img-fluid">
            </div>
        </template>
    </Card>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
export default {
    components: { Card }
}
</script>
