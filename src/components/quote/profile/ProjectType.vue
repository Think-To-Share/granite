<template>
    <SectionWithTitle>
        <template v-slot:title>Project Type</template>

        <Card>
            <template v-slot:body>
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div class="bg-primary-500 border border-primary-500 p-5 rounded-md flex flex-col items-center">
                        <img src="@/assets/images/icon-kitchen-worktops-selected.png" alt="Kitchen worktops" class="w-15">
                        <h5 class="text-white mt-7 text-lg font-medium">Kitchen Worktops</h5>
                    </div>
                </div>
            </template>
        </Card>
    </SectionWithTitle>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import SectionWithTitle from '@/components/ui/SectionWithTitle.vue';
export default {
    components: { Card, SectionWithTitle }
}
</script>
