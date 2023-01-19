<template>
    <SectionWithTitle>
        <template v-slot:title>Sink Information</template>

        <Card>
            <template v-slot:title>Please Choose</template>

            <template #info>
                <Heading>Unpolished Cut Outs</Heading>
                <Text>These cut outs apply to Hob and Standard Inset / Top-mounted sinks.</Text>
                <Text>These cut outs are often called “unpolished” since the worktop edge of the cut out is not seen once the appliance has been fitted.</Text>

                <Heading>Polished Cut Outs</Heading>
                <Text>These are often referred to as Undermount cut outs. Cut out to the exacting shape of the sink, the worktop edges are visible and are therefore polished.</Text>

                <Heading>Drainer Grooves</Heading>
                <Text>Often accompanied with undermount sinks, these grooves are processed (carved) into the stone to allow water drainage as well as a wonderful finish not found on other standard worktops.</Text>
            </template>

            <template v-slot:body>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    <SinkInfoBox title="Unpolished Cut Outs" v-model="unpolished">
                        <template v-slot:image>
                            <img class="w-full mb-5" src="@/assets/images/unpolished-cut-outs.jpg" alt="Unpolished Cut Outs">
                        </template>

                        <template v-slot:options>
                            <option value="" selected disabled>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </template>
                    </SinkInfoBox>

                    <SinkInfoBox title="Polished Cut Outs" v-model="polished">
                        <template v-slot:image>
                            <img class="w-full mb-5" src="@/assets/images/polished-cut-outs.jpg" alt="Polished Cut Outs">
                        </template>

                        <template v-slot:options>
                            <option value="" selected disabled>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </template>
                    </SinkInfoBox>

                    <SinkInfoBox image="/src" title="Drainer Grooves" v-model="drainer">
                        <template v-slot:image>
                            <img class="w-full mb-5" src="@/assets/images/drainer-grooves.jpg" alt="Drainer Grooves">
                        </template>

                        <template v-slot:options>
                            <option value="No" selected>No</option>
                            <option value="Yes">Yes</option>
                        </template>
                    </SinkInfoBox>
                    
                </div>
            </template>
        </Card>
    </SectionWithTitle>

    
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import SinkInfoBox from './SinkInfoBox.vue';
import { mapWritableState } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';
import SectionWithTitle from '@/components/ui/SectionWithTitle.vue';
import Heading from '@/components/ui/card/info/Heading.vue'
import Text from '@/components/ui/card/info/Text.vue'

export default {
    components: { Card, SinkInfoBox, SectionWithTitle, Heading, Text },
    computed: {
        ...mapWritableState(useQuoteProfileStore, ['unpolished', 'polished', 'drainer'])
    }
}
</script>
