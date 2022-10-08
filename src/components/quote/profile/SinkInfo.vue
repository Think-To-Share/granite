<template>
    <Card>
        <template v-slot:title>Please Choose</template>

        <template v-slot:body>
            <div class="grid grid-cols-3 gap-8">
                <SinkInfoBox image="/src/assets/images/unpolished-cut-outs.jpg" title="Unpolished Cut Outs" v-model="unpolished">
                    <template v-slot:options>
                        <option value="" selected disabled>Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </template>
                </SinkInfoBox>

                <SinkInfoBox image="/src/assets/images/polished-cut-outs.jpg" title="Polished Cut Outs" v-model="polished">
                    <template v-slot:options>
                        <option value="" selected disabled>Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </template>
                </SinkInfoBox>

                <SinkInfoBox image="/src/assets/images/drainer-grooves.jpg" title="Drainer Grooves" v-model="drainer">
                    <template v-slot:options>
                        <option value="No" selected>No</option>
                        <option value="Yes">Yes</option>
                    </template>
                </SinkInfoBox>
                
            </div>
        </template>
    </Card>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import SinkInfoBox from './SinkInfoBox.vue';
import { mapWritableState } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';
export default {
    components: { Card, SinkInfoBox },
    computed: {
        ...mapWritableState(useQuoteProfileStore, ['unpolished', 'polished', 'drainer'])
    }
}
</script>
