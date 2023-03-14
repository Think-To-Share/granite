<template>
    <SectionWithTitle>
        <template v-slot:title>Options</template>

        <Card>
            <div class="px-6 py-4">
                <CardTitle :show-info-btn="true">
                    Do you require <strong>Splashback</strong> (in metres)?

                    <template #info>
                        <Heading>Splashbacks</Heading>

                        <!-- <img src="@/assets/images/upstands.jpg" alt="Splashbacks" class=" w-full md:w-auto max-w-full"> -->

                        <Text>Splashbacks are normally used behind the hob to protect your walls from spills and splashes.</Text>
                    </template>
                </CardTitle>

                <div class="flex gap-x-4">
                    <RoundButton :is_active="has_splashback" @click="setHasSplashback(1)">YES</RoundButton>
                    <RoundButton :is_active="has_splashback === 0" @click="setHasSplashback(0)">NO</RoundButton>
                </div>
            </div>
            
            <div class="px-6 py-4 border-t border-gray-200">
                <CardTitle :show-info-btn="true">
                    Do you require <strong>Upstands</strong> (in metres)?

                    <template #info>
                        <Heading>Upstands</Heading>

                        <img src="@/assets/images/upstands.jpg" alt="upstands" class=" w-full md:w-auto max-w-full">

                        <Text>This forms a border between the worktops and the walls, to offer a super visual finish as well as protection from spillages.</Text>
                        <Text>Standard heights are 10cm (4 inches).</Text>
                    </template>
                </CardTitle>

                <div class="flex gap-x-4">
                    <RoundButton :is_active="has_upstand" @click="setHasUpstand(1)">YES</RoundButton>
                    <RoundButton :is_active="has_upstand === 0" @click="setHasUpstand(0)">NO</RoundButton>
                </div>
                <div class="flex md:flex-nowrap flex-wrap items-center gap-4" v-if="has_upstand">
                    <div class="md:w-1/2 w-full">
                        <input type="range" class="w-full" min="0" max="20" step="1" v-model="upstand_metres">
                    </div>
                    <div class="md:w-1/2 w-full">
                        <div class="flex shadow-sm">
                            <input type="text" id="website-admin" class="border-gray-300 rounded-none rounded-l-lg flex-1 min-w-0 w-full" placeholder="0" v-model="upstand_metres">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300">
                                m
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-6 py-4 border-t border-gray-200">
                <CardTitle>Do you require any other <strong>Worktop Options</strong> not mentioned here?</CardTitle>
                <div class="flex gap-x-4">
                    <RoundButton :is_active="has_worktop" @click="setHasWorktop(1)">YES</RoundButton>
                    <RoundButton :is_active="has_worktop === 0" @click="setHasWorktop(0)">NO</RoundButton>
                </div>

                <div class="mt-8" v-if="has_worktop">
                    <textarea class="md:w-8/12 w-full border-gray-300 rounded-lg shadow-sm transition-colors duration-100 ease-in" rows="4" placeholder="Describe Here....." v-model="worktop_option"></textarea>
                </div>  
            </div>    
        </Card>
    </SectionWithTitle>

    
</template>

<script>
import RoundButton from '@/components/ui/RoundButton.vue';
import Card from '@/components/ui/card/Card.vue';
import CardTitle from '@/components/ui/card/Title.vue';
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';
import SectionWithTitle from '@/components/ui/SectionWithTitle.vue';
import Text from '@/components/ui/card/info/Text.vue'
import Heading from '@/components/ui/card/info/Heading.vue'


export default {
    components: { RoundButton, Card, CardTitle, SectionWithTitle, Text, Heading },

    data() {
        return {
            range: 0,
            upstands_required: true,
            worktop_required: null,
        };
    },

    methods: {
        ...mapActions(useQuoteProfileStore, ['setHasUpstand', 'setHasWorktop', 'setHasSplashback'])
    },

    computed: {
        ...mapState(useQuoteProfileStore, ['has_upstand', 'has_worktop', 'has_splashback']),
        ...mapWritableState(useQuoteProfileStore, ['upstand_metres', 'worktop_option'])
    }
}
</script>
