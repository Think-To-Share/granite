<template>
    <Card>
        <div class="px-6 py-4">
            <CardTitle>Do you require <strong>Upstands</strong> (in metres)?</CardTitle>

            <div class="flex gap-x-4">
                <RoundButton :is_active="has_upstand" @click="setHasUpstand(true)">YES</RoundButton>
                <RoundButton :is_active="has_upstand === false" @click="setHasUpstand(false)">NO</RoundButton>
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
                <RoundButton :is_active="has_worktop" @click="setHasWorktop(true)">YES</RoundButton>
                <RoundButton :is_active="has_worktop === false" @click="setHasWorktop(false)">NO</RoundButton>
            </div>

            <div class="mt-8" v-if="has_worktop">
                <textarea class="md:w-8/12 w-full border-gray-300 rounded-lg shadow-sm transition-colors duration-100 ease-in" rows="4" placeholder="Describe Here....." v-model="worktop_option"></textarea>
            </div>  
        </div>    
    </Card>
</template>

<script>
import RoundButton from '@/components/ui/RoundButton.vue';
import Card from '@/components/ui/card/Card.vue';
import CardTitle from '@/components/ui/card/Title.vue';
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useQuoteProfileStore } from '@/stores/quote-profile';

export default {
    components: { RoundButton, Card, CardTitle },

    data() {
        return {
            range: 0,
            upstands_required: true,
            worktop_required: null,
        };
    },

    methods: {
        ...mapActions(useQuoteProfileStore, ['setHasUpstand', 'setHasWorktop'])
    },

    computed: {
        ...mapState(useQuoteProfileStore, ['has_upstand', 'has_worktop']),
        ...mapWritableState(useQuoteProfileStore, ['upstand_metres', 'worktop_option'])
    }
}
</script>
