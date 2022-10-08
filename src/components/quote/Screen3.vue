<template>
    <section class="profile-part">
        <selected-range class="mb-10" />
        <project-type class="mb-10" />
        <measurements class="mb-10" />
        <sink-info class="mb-10" />
        <options class="mb-10" />

        <div class="text-right">
            <button type="button" class="inline-block bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-200 ease-in-out" @click.prevent="changeScreen(4)">NEXT</button>
        </div>
    </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions } from "pinia"
import Measurements from "@/components/quote/profile/Measurements.vue";
import SinkInfo from "@/components/quote/profile/SinkInfo.vue";
import SelectedRange from "@/components/quote/profile/SelectedRange.vue";
import ProjectType from "@/components/quote/profile/ProjectType.vue";
import Options from "@/components/quote/profile/Options.vue";

export default {
    components: {
        "measurements": Measurements,
        "sink-info": SinkInfo,
        "selected-range": SelectedRange,
        "project-type": ProjectType,
        "options": Options,
    },

    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"])
    },
}
</script>

<style>

</style>