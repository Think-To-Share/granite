<template>
    <section class="profile-part">
        <selected-range />
        <project-type />
        <measurements />
        <sink-info />
        <options />
    </section>
</template>

<script>
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

}
</script>

<style>

</style>