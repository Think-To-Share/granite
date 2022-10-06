<template>
    <div class="shadow-md border border-gray-200 rounded-md">
        <div class="px-6 py-4">
            <CardTitle>Do you know your Project Sizes?</CardTitle>
            <div class="flex gap-x-4">
                <RoundButton :is_active="has_project_size" @click="setHasProjectSize(true)">YES</RoundButton>
                <RoundButton :is_active="has_project_size === false" @click="setHasProjectSize(false)">NO</RoundButton>
            </div>
        </div>
        <div v-if="has_project_size">
            <div class="px-6 py-4 border-t border-gray-200">
                <CardTitle>What Layout is your kitchen?</CardTitle>

                <div class="grid grid-cols-3 grid-rows-2 items-center gap-4">
                    <KitchenLayout
                        title="L Shape / Gallery"
                        :has_left="true"
                        :active="project_layout === 'l'"
                        @click="changeLayout('l', 2)"
                    />
                    <KitchenLayout
                        title="U Shape & Island"
                        :has_left="true"
                        :has_middle="true"
                        :has_right="true"
                        :active="project_layout === 'u_i'"
                        @click="changeLayout('u_i', 4)"
                    />
                    <KitchenLayout
                        title="U Shape"
                        :has_left="true"
                        :has_right="true"
                        :active="project_layout === 'u'"
                        @click="changeLayout('u', 3)"
                    />
                    <KitchenLayout
                        title="L Shape & Island"
                        :has_left="true"
                        :has_middle="true"
                        :active="project_layout === 'l_i'"
                        @click="changeLayout('l_i', 3)"
                    />
                    <KitchenLayout
                        title="Straight & Island"
                        :has_middle="true"
                        :active="project_layout === 's_i'"
                        @click="changeLayout('s_i', 2)"
                    />
                    <button
                        title="Custom Sizes"
                        class="text-gray-500 font-medium min-h-full border border-gray-200 p-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-primary-400 hover:text-white"
                        :class="{ 'bg-primary-400 text-white': project_layout === 'custom', 'bg-white': project_layout !== 'custom' }"
                        @click="changeLayout('custom', 1)"
                    >
                        Custom Sizes
                    </button>
                </div>
            </div>

            <div class="px-6 py-4 border-t border-gray-200" v-if="project_layout">
                <CardTitle>What are the Sizes for each piece in mm(millimetres)?</CardTitle>

                <div class="flex gap-x-3 items-center mb-3">
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-primary-500 text-xl">
                        <p>LENGTH</p>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-primary-500 text-xl">
                        <p>WIDTH</p>
                    </div>
                    <div class="w-2/12"></div>
                </div>

                <TransitionGroup tag="div" class=" flex flex-col gap-y-2">
                    <dimensions
                        v-for="(dimension, index) in project_dimensions"
                        :key="index"
                        :index="index"
                        :has_minus_btn="project_layout === 'custom' && index > 0"
                        :dimension="dimension"
                    />
                </TransitionGroup>

                <button
                    class="inline-block outline-none font-medium text-white bg-primary-500 px-4 py-3 mt-8 rounded-md hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-200 ease-in-out"
                    :disabled="project_dimensions.length >= 26"
                    v-if="project_layout === 'custom'"
                    @click="pushDimension()"
                >
                    Add Another Piece
                </button>

                <p class="text-base mt-5 text-slate-500 select-none">
                    The estimated worktop profile is
                    <span class="font-bold">0 mm</span>
                    based on measurement entered above
                </p>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200" v-if="has_project_size === false">
            <CardTitle>Do you have a Project Plan?</CardTitle>

            <div class="flex gap-x-4">
                <RoundButton :is_active="has_project_plan" @click="setHasProjectPlan(true)">YES</RoundButton>
                <RoundButton :is_active="has_project_plan === false" @click="setHasProjectPlan(false)">NO</RoundButton>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200" v-if="has_project_plan !== null">
            <div class="mb-6" v-if="has_project_plan">
                <p class="text-sm text-slate-400">
                    Please attached your Kitchen Plan here and we will work out your sizes
                </p>
                <button class="inline-block outline-none font-medium text-lg text-white bg-primary-500 px-6 py-4 mt-2 rounded-md hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-200 ease-in-out">Upload a Kitchen Plan</button>
            </div>

            <CardTitle>How would you describe the Size of your Project?</CardTitle>

            <div class="flex gap-x-4">
                <SquareButton :is_active="project_plan_size === 's'" @click="setProjectPlanSize('s')">S</SquareButton>
                <SquareButton :is_active="project_plan_size === 'm'" @click="setProjectPlanSize('m')">M</SquareButton>
                <SquareButton :is_active="project_plan_size === 'l'" @click="setProjectPlanSize('l')">L</SquareButton>
                <SquareButton :is_active="project_plan_size === 'xl'" @click="setProjectPlanSize('xl')">
                    XL
                </SquareButton>
            </div>
        </div>
    </div>
</template>

<script>
import Dimensions from '@/components/quote/profile/Dimensions.vue'
import RoundButton from '@/components/ui/RoundButton.vue'
import { mapActions, mapState } from 'pinia'
import { useQuoteProfileStore } from '@/stores/quote-profile'
import SquareButton from '@/components/ui/SquareButton.vue'
import CardTitle from '@/components/ui/card/Title.vue'
import KitchenLayout from '@/components/quote/profile/KitchenLayout.vue'

export default {
    data() {
        return {
            project_plan: null,
        }
    },

    components: {
        dimensions: Dimensions,
        RoundButton: RoundButton,
        SquareButton,
        CardTitle,
        KitchenLayout,
    },

    methods: {
        ...mapActions(useQuoteProfileStore, [
            'setHasProjectSize',
            'setHasProjectPlan',
            'setNDimensions',
            'pushDimension',
            'setProjectLayout',
            'setProjectPlanSize',
        ]),

        changeLayout(layout, dimensions) {
            if (this.project_layout === layout) {
                return
            }

            this.setProjectLayout(layout), this.setNDimensions(dimensions)
        },
    },

    computed: {
        ...mapState(useQuoteProfileStore, [
            'has_project_size',
            'has_project_plan',
            'project_dimensions',
            'project_layout',
            'project_plan_size',
        ]),
    },
}
</script>
