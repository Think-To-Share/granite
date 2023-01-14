<template>
    <div class="shadow-md border border-gray-200 rounded-md">
        <div class="px-6 py-4">
            <CardTitle>Do you know your Project Sizes?</CardTitle>
            <div class="flex gap-x-4">
                <RoundButton :is_active="has_project_size" @click="setHasProjectSize(1)">YES</RoundButton>
                <RoundButton :is_active="has_project_size === 0" @click="setHasProjectSize(0)">NO</RoundButton>
            </div>
        </div>
        <div v-if="has_project_size">
            <div class="px-6 py-4 border-t border-gray-200">
                <CardTitle>What Layout is your kitchen?</CardTitle>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4">
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
                        class="text-gray-500 font-medium md:min-h-full min-h-[140px] border border-gray-200 p-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-primary-400 hover:text-white"
                        :class="{ 'bg-primary-400 text-white': project_layout === 'custom', 'bg-white': project_layout !== 'custom' }"
                        @click="changeLayout('custom', 1)"
                    >
                        Custom Sizes
                    </button>
                </div>
            </div>

            <div class="px-6 py-4 border-t border-gray-200" v-if="project_layout">
                <CardTitle>What are the Sizes for each piece in mm(millimetres)?</CardTitle>

                <div class="flex gap-x-3 items-center mb-2">
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-slate-500 text-lg tracking-wide">
                        <p>Length</p>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-slate-500 text-lg tracking-wide">
                        <p>Width</p>
                    </div>
                    <div class="w-2/12"></div>
                </div>

                <TransitionGroup tag="div" class="flex flex-col gap-y-2" name="fade">
                    <dimensions
                        v-for="(dimension, index) in project_dimensions"
                        :key="dimension.uuid"
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

                <!-- <p class="text-base mt-5 text-slate-500 select-none">
                    The estimated worktop profile is
                    <span class="font-bold">0 mm</span>
                    based on measurement entered above
                </p> -->
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200" v-if="has_project_size === 0">
            <CardTitle>Do you have a Project Plan?</CardTitle>

            <div class="flex gap-x-4">
                <RoundButton :is_active="has_project_plan" @click="setHasProjectPlan(1)">YES</RoundButton>
                <RoundButton :is_active="has_project_plan === 0" @click="setHasProjectPlan(0)">NO</RoundButton>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200" v-if="has_project_plan !== ''">
            <div class="mb-6" v-if="has_project_plan">
                <p class="text-sm text-slate-400">
                    Please attached your Kitchen Plan here and we will work out your sizes
                </p>

                <div class="relative mt-2 inline-block">
                    <input type="file" class="hidden invisible" ref="project_plan_file" v-on:change="setProjectPlanFile($event.target.files[0])">
                    <button @click="$refs.project_plan_file.click()" class="inline-block outline-none font-medium md:text-lg text-base text-white bg-primary-500 md:px-6 md:py-4 px-5 py-3 rounded-md hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-200 ease-in-out">Upload a Kitchen Plan</button>

                    <Transition>
                        <div class="pt-[7px]" v-if="project_plan_file">
                            <p class="inline-flex bg-primary-200 text-primary-600 gap-x-2 p-2 text-sm items-center rounded-md relative after:absolute after:left-2 after:top-0 after:border-[6px] after:border-transparent after:border-b-primary-200 after:mt-[-11px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <span class="">{{ project_plan_file.name }}</span>
                            </p>
                        </div>
                    </Transition>
                </div>
                
            </div>

            <CardTitle>How would you describe the Size of your Project?</CardTitle>

            <div class="flex flex-wrap gap-4 md:justify-start justify-center">
                <SquareButton :is_active="project_plan_size === 's'" @click="setProjectPlanSize('s')">S</SquareButton>
                <SquareButton :is_active="project_plan_size === 'm'" @click="setProjectPlanSize('m')">M</SquareButton>
                <SquareButton :is_active="project_plan_size === 'l'" @click="setProjectPlanSize('l')">L</SquareButton>
                <SquareButton :is_active="project_plan_size === 'xl'" @click="setProjectPlanSize('xl')">XL</SquareButton>
            </div>
        </div>
    </div>
</template>

<script>
import Dimensions from '@/components/quote/profile/Dimensions.vue'
import RoundButton from '@/components/ui/RoundButton.vue'
import { mapActions, mapState, mapWritableState } from 'pinia'
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
        RoundButton,
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
            'setProjectPlanFile',
        ]),

        changeLayout(layout, dimensions) {
            if (this.project_layout === layout) {
                return
            }

            this.setProjectLayout(layout)
            this.setNDimensions(dimensions)
        },
    },

    computed: {
        ...mapState(useQuoteProfileStore, [
            'has_project_size',
            'has_project_plan',
            'project_dimensions',
            'project_layout',
            'project_plan_size',
            'project_plan_file',
        ]),
    },
}
</script>
