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
            <div class="px-6 py-4">
                <CardTitle>What Layout is your kitchen?</CardTitle>
                
                <div class="grid grid-cols-3 grid-rows-2 items-center gap-4">
                    <KitchenLayout title="L Shape / Gallery" :has_left="true" :active="project_layout === 'l'" @click="changeLayout('l', 2)" />
                    <KitchenLayout title="U Shape & Island" :has_left="true" :has_middle="true" :has_right="true" :active="project_layout === 'u_i'" @click="changeLayout('u_i', 4)" />
                    <KitchenLayout title="U Shape" :has_left="true" :has_right="true" :active="project_layout === 'u'" @click="changeLayout('u', 3)" />
                    <KitchenLayout title="L Shape & Island" :has_left="true" :has_middle="true" :active="project_layout === 'l_i'" @click="changeLayout('l_i', 3)" />
                    <KitchenLayout title="Straight & Island" :has_middle="true" :active="project_layout === 's_i'" @click="changeLayout('s_i', 2)" />
                    <button title="Custom Sizes" class="min-h-full border border-gray-200 p-3 rounded-md transition-colors duration-200 ease-in-out hover:bg-primary-400 hover:text-white" :class="{'bg-primary-400 text-white': project_layout === 'custom'}" @click="changeLayout('custom', 1)">Custom Sizes</button>
                </div>
            </div>

            <div class="px-6 py-4" v-if="project_layout">
                <CardTitle>What are the Sizes for each piece in mm(millimetres)?</CardTitle>

                <div class="flex gap-x-3 items-center mb-3">
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-primary-500 text-xl">
                        <p class="">LENGTH</p>
                    </div>
                    <div class="w-1/12"></div>
                    <div class="w-4/12 text-center font-bold text-primary-500 text-xl">
                        <p>WIDTH</p>
                    </div>
                    <div class="w-2/12"></div>
                </div>

                <dimensions v-for="(dimension, index) in project_dimensions" :key="index" :index="index" :has_minus_btn="project_layout === 'custom' && index > 0" :dimension="dimension" />

                <button class="piece-btn" :disabled="project_dimensions.length >= 26" v-if="project_layout === 'custom'" @click="pushDimension()"> + Add another piece</button>

                <p class="text-base mt-5 text-gray-500">
                    The estimated worktop profile is
                    <span class="font-bold underline">0 mm</span> based on measurement entered above
                </p>
            </div>
        </div>

        <div class="px-6 py-4" v-if="has_project_size === false">
            <CardTitle>
                Do you have a Project Plan?
            </CardTitle>
            <div class="flex gap-x-4">
                <RoundButton :is_active="has_project_plan" @click="setHasProjectPlan(true)">YES</RoundButton>
                <RoundButton :is_active="has_project_plan === false" @click="setHasProjectPlan(false)">NO</RoundButton>
            </div>
        </div>

        <div class="px-6 py-4" v-if="has_project_plan !== null">
            <div v-if="has_project_plan">
                <p class="text-sm text-gray-500">Please attached your Kitchen Plan here and we will work out your sizes</p>
                <button class="plan-upload-btn">Upload a Kitchen Plan</button>
            </div>

            <CardTitle>How would you describe the Size of your Project?</CardTitle>

            <div class="flex gap-x-4">
                <SquareButton :is_active="project_plan_size === 's'" @click="setProjectPlanSize('s')">S</SquareButton>
                <SquareButton :is_active="project_plan_size === 'm'" @click="setProjectPlanSize('m')">M</SquareButton>
                <SquareButton :is_active="project_plan_size === 'l'" @click="setProjectPlanSize('l')">L</SquareButton>
                <SquareButton :is_active="project_plan_size === 'xl'" @click="setProjectPlanSize('xl')">XL</SquareButton>
            </div>
        </div>
    </div>
</template>

<script>
import Dimensions from "@/components/quote/profile/Dimensions.vue";
import RoundButton from "@/components/share/RoundButton.vue";
import { mapActions, mapState } from 'pinia';
import { useQuoteProfileStore } from "@/stores/quote-profile";
import SquareButton from "@/components/share/SquareButton.vue";
import CardTitle from "@/components/share/card/Title.vue";
import KitchenLayout from "@/components/quote/profile/KitchenLayout.vue";

export default {
    data() {
        return {
            project_plan: null,
        };
    },
    components: {
    dimensions: Dimensions,
    RoundButton: RoundButton,
    SquareButton,
    CardTitle,
    KitchenLayout
},
    methods: {
        ...mapActions(useQuoteProfileStore, ['setHasProjectSize', 'setHasProjectPlan', 'setNDimensions', 'pushDimension', 'setProjectLayout', 'setProjectPlanSize']),

        changeLayout(layout, dimensions) {
            if(this.project_layout === layout) {
                return;
            }

            this.setProjectLayout(layout),
            this.setNDimensions(dimensions)
        }
    },
    computed: {
        ...mapState(useQuoteProfileStore, ['has_project_size', 'has_project_plan', 'project_dimensions', 'project_layout', 'project_plan_size'])
    }
};
</script>

<style lang="scss" scoped>
// @import "rfs/scss";
// .measurements-card {
//     box-shadow: 0px 1px 5px 1px rgb(209 207 207 / 85%);
//     border-bottom: 3px solid rgb(209 207 207 / 85%);
//     border-radius: 0%;
//     border: none;
//     margin: 10;

//     .button-card {
//         border-bottom: 2px solid rgba(250, 250, 250, 0.85);
//         transition: all 0.5s ease 0s;

//         &:hover {
//             background-color: rgba(246, 246, 246, 0.85);
//         }
//     }
    

//     .layout-card {
//         .row-box-A {
//             height: 130px;
//             text-align: center;
//             .col-box {
//                 display: flex;
//                 height: 90px;
//                 justify-content: space-between;
//                 flex-wrap: nowrap;
//             }
//         }
//         .select-layout {
//             background-color: #fff;
//             transition: all 0.5s ease 0s;

//             .left-off{ 
//                 visibility:hidden;
//             }

//             .right-off{ 
//                 visibility:hidden;
//             }

//             &:hover {
//                 background-color: #3c7c8e;
//                 color: #fff;

//                 span {
//                     background-color: #fff !important;
//                     color: #3c7c8e !important;
//                 }
//             }

//             .row-box-A {
//                 height: 130px;
//                 text-align: center;
                
//                 .mdl{ 
//                     align-self: center;
//                 }
//                 span {
//                     color: #fff;
//                     background-color: rgba(0, 0, 0, 0.35);
//                     font-size: 13px;
//                     margin: 3px;
//                     padding: 8px 12px;
//                     font-family: var(--primary-font);
//                 }
//                 .bottom {
//                     color: #fff;
//                     background-color: rgba(0, 0, 0, 0.35);
//                     font-size: 13px;
//                     margin-top: 5%;
//                     margin-bottom: 5%;
//                     padding: 8px 12px;
//                     font-family: var(--primary-font);
//                     padding: 2% 48%;
//                 }

//                 .disabled {
//                     display: none;
//                 }
//             }

//             .custom-size {
//                 color: #3c7c8e;
//                 font-family: var(--primary-font);
//                 text-align: center;
//                 padding: 15% 12%;
//                 transition: all 0.5s ease 0s;
//                 font-size: 18px;
//                 &:hover {
//                     color: #fff;
//                 }
//             }
//         }

//         .active {
//             background-color: #3c7c8e !important;
//             border-color: #3c7c8e;
//             color: #fff;

//             span {
//                 background-color: #fff !important;
//                 color: #3c7c8e !important;
//             }
//             p{ 
//                 color : #fff;
//             }
//         }
//     }
//     .granite-card-header {
//         font-family: var(--primary-font);
//         color: #3c7c8e;
//     }

//     .granite-card-top-img {
//         border-radius: none !important;
//     }
//     .granite-sub-card-header {
//         background-color: #fff;
//         border-bottom: none;
//         color: #3c7c8e;
//     }
//     .plan-upload-text{
//         @include font-size(1.1rem);
//         font-weight: 400;
//         margin: 0;
//         padding-bottom: 10px;
//     }
//     .plan-upload-btn{
//         border: none;
//         background-color: #3c7c8e;
//         color:#fff;
//         padding: 15px 30px;
//         @include font-size(1.1rem);
//         font-weight: 400;
//         margin-bottom: 30px;
//         border-radius: 5px;
//         white-space: nowrap;
//         transition: all 0.5s ease 0s;
//         &:hover{
//           background-color: #3b96af;  
//         }
//     }

//     .round-container {
//         // .granite-round-btn-filled{
//         //     background-color: #3C7C8E;
//         //     border : 6px solid #244a55;
//         //     color : #fff;
//         //     font-family:var(--primary-font);
//         //     padding : 2%;
//         //     margin : 2%;
//         //     border-radius : 60%;
//         //     transition: all 0.5s ease 0s;

//         // }
//         .granite-round-btn-empty {
//             background-color: #fff;
//             border: 6px solid #ddd;
//             color: #888;
//             font-family: var(--primary-font);
//             padding: 2%;
//             margin: 2%;
//             border-radius: 60%;
//             transition: all 0.5s ease 0s;

//             &:hover {
//                 background-color: #3c7c8e;
//                 border: 6px solid #244a55;
//                 color: #fff;
//             }
//         }

//         .granite-square-btn-empty {
//             background-color: #fff;
//             border: 6px solid #ddd;
//             color: #888;
//             font-family: var(--primary-font);
//             padding: 3%;
//             margin: 2%;
//             transition: all 0.5s ease 0s;

//             &:hover {
//                 background-color: #3c7c8e;
//                 border: 6px solid #244a55;
//                 color: #fff;
//             }
//         }
//     }

//     .mmcalculator {
//         .piece-box {
//             align-items: center;
//             display: grid;
//             span {
//                 text-align: center;
//                 @include font-size(1.9rem);
//                 font-weight: 400;
//             }
//         }
//         .mesaure-box__label {
//             display: block;
//             text-align: center;
//             font-family: var(--primary-font);
//             @include font-size(1rem);
//             font-weight: 600;
//             span {
//                 display: block;
//                 text-align: center;
//                 font-weight: 600;
//                 font-family: var(--primary-font);
//                 @include font-size(1.5rem);
//             }
//         }
//         .mesaure-box__input {
//             .input-box {
//                 input {
//                     padding: 1em 0.5em;
//                 }
//             }
//         }
//     }
//     .length-width-part {
//         text-align: center;
//         font-family: var(--primary-font);
//         color: #3c7c8e;
//         font-weight: 600;
//         @include font-size(1.2rem);
//     }
//     .piece-btn{
//         border: none;
//         background-color: #3c7c8e;
//         color:#fff;
//         padding: 10px 20px;
//         @include font-size(1.2rem);
//         font-weight: 400;
//         margin-bottom: 30px;
//         border-radius: 5px;
//         white-space: nowrap;
//         transition: all 0.5s ease 0s;
//         margin-top: 10px;
//         &:hover{
//             background-color: #3b96af;  
//         }
//     }
// }
</style>
