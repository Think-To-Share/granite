<template>
    <section class="profile-part">
        <Errors class="mb-8" :errors="error_messages" />

        <selected-range class="mb-10" />
        <project-type class="mb-10" />
        <measurements class="mb-10" />
        <sink-info class="mb-10" />
        <options class="mb-10" />

        <div class="text-right">
            <button type="button" @click="nextButtonClick()" class="inline-block bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-200 ease-in-out">NEXT</button>
        </div>
    </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions, mapState } from "pinia"
import Measurements from "@/components/quote/profile/Measurements.vue";
import SinkInfo from "@/components/quote/profile/SinkInfo.vue";
import SelectedRange from "@/components/quote/profile/SelectedRange.vue";
import ProjectType from "@/components/quote/profile/ProjectType.vue";
import Options from "@/components/quote/profile/Options.vue";
import { useQuoteProfileStore } from '../../stores/quote-profile';
import Errors from '../ui/forms/Errors.vue';

export default {
    components: {
    "measurements": Measurements,
    "sink-info": SinkInfo,
    "selected-range": SelectedRange,
    "project-type": ProjectType,
    "options": Options,
    Errors
},

    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"]),
        ...mapActions(useQuoteProfileStore, ["submitData"]),

        nextButtonClick() {
            // this.submitData(this.quote_id).then(_ => {
            //     console.log(this.errors)
            //     if(this.error_messages.length) {
            //         window.scrollTo(0,0)
                    
            //         return;
            //     }

            //     this.changeScreen(4)
            // })

            this.changeScreen(3);
        }
    },

    computed: {
        ...mapState(useQuoteStore, ['quote_id']),
        ...mapState(useQuoteProfileStore, ['errors', 'error_messages'])
    }
}
</script>

<style>

</style>