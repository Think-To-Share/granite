<template>
    <Card>
        <template v-slot:body>
            <div class="grid grid-cols-4">
                <div class="bg-primary-500 border border-primary-500 p-5 rounded-md flex flex-col items-center">
                    <img src="@/assets/images/icon-kitchen-worktops-selected.png" alt="Kitchen worktops" class="w-15">
                    <h5 class="text-white mt-7 text-lg font-medium">Kitchen Worktops</h5>
                </div>
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
