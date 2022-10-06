<template>
    <div>
        <div class="card">
            <div class="options-main card-inner">
                <h5 class="options-heading">Do you require <strong>Upstands</strong> (in metres)?</h5>
                <div class="round-container">
                    <RoundButton :is_active="upstands_required" @click="upstands_required=true">YES</RoundButton>
                    <RoundButton :is_active="upstands_required === false" @click="upstands_required=false">NO</RoundButton>
                </div>
                <div class="row align-items-center" v-if="upstands_required">
                    <div class="col-6">
                        <input type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-200" min="0" max="20" step="1" v-model="range">
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="0" v-model="range">
                            <span class="input-group-text" id="basic-addon2">m</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="worktop card-inner">
                <h5 class="options-heading">Do you require any other <strong>Worktop Options</strong> not mentioned here?</h5>
                <div class="round-container">
                    <RoundButton :is_active="worktop_required" @click="worktop_required=true">YES</RoundButton>
                    <RoundButton :is_active="worktop_required === false" @click="worktop_required=false">NO</RoundButton>
                </div>
                <div class="row align-items-center" v-if="worktop_required">
                    <div class="col-8">
                        <textarea class="form-control" rows="4" placeholder="Describe Here....."></textarea>
                    </div>
                </div>  
            </div>    
        </div>
        <div class="next-btn-main" @click.prevent="changeScreen(4)">
            <button type="button" class="next-btn">NEXT</button>
        </div>
    </div>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions } from "pinia"
import RoundButton from '@/components/ui/RoundButton.vue';

export default {
    data() {
        return {
            range: 0,
            upstands_required: true,
            worktop_required: null,
        };
    },
    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"])
    },
    components: { RoundButton }
}
</script>

<style lang="scss" scoped>
@import "rfs/scss";
.card{
    box-shadow: 0px 1px 5px 1px #d1cfcfd9;
    border: none;
    margin-bottom: 40px;
    .worktop{
        border-top: 1px solid #d1cfcfd9;
    }
    .card-inner{
       padding: 45px 25px; 
       .options-heading{
            color: #3c7c8e;
            font-family: var(--primary-font);
            @include font-size(1.3rem);
        }

        textarea{
            &::placeholder{
                color: #a39e9ed9;
            }
        }
    }
}
.next-btn-main{
    display: flex;
    justify-content: flex-end;
    .next-btn{
        font-family: var(--primary-font);
        font-weight: 600;
        color: #fff;
        padding: 15px 50px;
        font-size: 1em;
        background-color: #3C7C8E;
        border: none;
        white-space: nowrap;
        margin-bottom: 30px;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        &:hover{
          background-color: #19414d;  
        }
    }
}
</style>
