<template>
    <div class="card text-start measurements-card mb-5">
        <div class="card-body button-card">
            <h4 class="card-title granite-card-header mb-5">
                Do you know your Project Sizes?
            </h4>
            <div class="round-container">
                <button
                    class="granite-round-btn"
                    :class="{ filled: project_size }"
                    @click="projectSize()"
                >
                    YES
                </button>
                <button
                    class="granite-round-btn"
                    :class="{ filled: project_size === false }"
                    @click="project_size = false"
                >
                    NO
                </button>
            </div>
        </div>

        <div class="card-body layout-card" v-if="project_size">
            <h4 class="card-title granite-card-header mb-5">
                What Layout is your kitchen?
            </h4>
            <div class="row justify-content-center align-items-center g-2">
                <div class="col-md-4">
                    <div class="card text-start select-layout">
                        <div class="card-body">
                            <div class="row-box-A">
                                <div class="col-box">
                                    <span class="left b activeBlock">B</span>
                                    <span class="mdl c disabled">C</span>
                                    <span class="right d disabled">D</span>
                                </div>
                                <br />
                                <span class="a bottom activeBlock">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-start select-layout">
                        <div class="card-body">
                            <div class="row-box-A">
                                <div class="col-box">
                                    <span class="left b activeBlock">B</span>
                                    <span class="mdl c disabled">C</span>
                                    <span class="right d disabled">D</span>
                                </div>
                                <br />
                                <span class="a bottom activeBlock">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-start select-layout">
                        <div class="card-body">
                            <div class="row-box-A">
                                <div class="col-box">
                                    <span class="left b activeBlock">B</span>
                                    <span class="mdl c disabled">C</span>
                                    <span class="right d ">D</span>
                                </div>
                                <br />
                                <span class="a bottom activeBlock">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-start select-layout">
                        <div class="card-body">
                            <div class="row-box-A">
                                <div class="col-box">
                                    <span class="left b ">B</span>
                                    <span class="mdl c ">C</span>
                                    <span class="right d">D</span>
                                </div>
                                <br />
                                <span class="a bottom activeBlock">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-start select-layout active">
                        <div class="card-body">
                            <div class="row-box-A">
                                <div class="col-box">
                                    <span class="left b " style="background:transparent;">B</span>
                                    <span class="mdl c">C</span>
                                    <span class="right d ">D</span>
                                </div>
                                <br />
                                <span class="a bottom activeBlock">A</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-start select-layout">
                        <div class="card-body custom-size">
                            <p class="">Custom Sizes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card-body button-card" v-if="!project_size">
            <h4 class="card-title granite-card-header mb-5">
                Do you have a Project Plan?
            </h4>
            <div class="round-container">
                <button
                    class="granite-round-btn"
                    :class="{ filled: project_plan }"
                    @click="project_plan = true"
                >
                    YES
                </button>
                <button
                    class="granite-round-btn"
                    :class="{ filled: project_plan === false }"
                    @click="project_plan = false"
                >
                    NO
                </button>
            </div>
        </div>
        <div class="card-body button-card" v-if="project_plan !== null">
            <h4 class="card-title granite-card-header mb-5">
                How would you describe the Size of your Project?
            </h4>
            <div class="round-container">
                <button class="granite-square-btn-empty">S</button>
                <button class="granite-square-btn-empty">M</button>
                <button class="granite-square-btn-empty">L</button>
                <button class="granite-square-btn-empty">XL</button>
            </div>
        </div>

        <div class="card-body">
            <h4 class="card-title granite-card-header mb-5">
                What are the Sizes for each piece in mm(millimetres)?
            </h4>
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <p class="length-width-part">LENGTH</p>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-5">
                    <p class="length-width-part">WIDTH</p>
                </div>
            </div>

            <dimensions v-for="(dimension, index) in dimensions" :key="index" />
            <p class="polishededgestxt mb-0 mt-5">
                The estimated worktop profile is
                <u><strong>0 mm</strong></u> based on measurement entered above
            </p>
        </div>
    </div>
</template>

<script>
import Dimensions from "@/components/quote/profile/Dimensions.vue";
export default {
    data() {
        return {
            project_size: true,
            project_plan: null,
            dimensions: [{ length: "", width: "" }],
        };
    },
    methods: {
        projectSize() {
            this.project_size = true;
            this.project_plan = null;
        },
    },
    components: {
        dimensions: Dimensions,
    },
};
</script>

<style lang="scss" scoped>
@import "rfs/scss";
.measurements-card {
    box-shadow: 0px 1px 5px 1px rgb(209 207 207 / 85%);
    border-bottom: 3px solid rgb(209 207 207 / 85%);
    border-radius: 0%;
    border: none;
    margin: 10;

    .button-card {
        border-bottom: 2px solid rgba(250, 250, 250, 0.85);
        transition: all 0.5s ease 0s;

        &:hover {
            background-color: rgba(246, 246, 246, 0.85);
        }
    }

    .layout-card {
        .row-box-A {
            height: 130px;
            text-align: center;
            .col-box {
                display: flex;
                height: 90px;
                justify-content: space-between;
                flex-wrap: nowrap;
            }
        }
        .select-layout {
            background-color: #fff;
            transition: all 0.5s ease 0s;

            &:hover {
                background-color: #3c7c8e;
                color: #fff;

                span {
                    background-color: #fff !important;
                    color: #3c7c8e !important;
                }
            }

            .row-box-A {
                height: 130px;
                text-align: center;
                
                .mdl{ 
                    align-self: center;
                }
                span {
                    color: #fff;
                    background-color: rgba(0, 0, 0, 0.35);
                    font-size: 13px;
                    margin: 3px;
                    padding: 8px 12px;
                    font-family: var(--primary-font);
                }
                .bottom {
                    color: #fff;
                    background-color: rgba(0, 0, 0, 0.35);
                    font-size: 13px;
                    margin-top: 5%;
                    margin-bottom: 5%;
                    padding: 8px 12px;
                    font-family: var(--primary-font);
                    padding: 2% 48%;
                }

                .disabled {
                    display: none;
                }
            }

            .custom-size {
                color: #3c7c8e;
                font-family: var(--primary-font);
                text-align: center;
                padding: 15% 12%;
                transition: all 0.5s ease 0s;
                font-size: 18px;
                &:hover {
                    color: #fff;
                }
            }
        }

        .active {
            background-color: #3c7c8e !important;
            border-color: #3c7c8e;
            color: #fff;

            span {
                background-color: #fff !important;
                color: #3c7c8e !important;
            }
            p{ 
                color : #fff;
            }
        }
    }
    .granite-card-header {
        font-family: var(--primary-font);
        color: #3c7c8e;
    }

    .granite-card-top-img {
        border-radius: none !important;
    }
    .granite-sub-card-header {
        background-color: #fff;
        border-bottom: none;
        color: #3c7c8e;
    }

    .round-container {
        .granite-round-btn {
            font-family: var(--primary-font);
            padding: 2%;
            border-radius: 60%;
            transition: all 0.5s ease 0s;
            background-color: #fff;
            border: 6px solid #ddd;
            color: #888;

            &.filled {
                background-color: #3c7c8e;
                border: 6px solid #244a55;
                color: #fff;
            }

            &:last-child {
                margin: 2%;
            }

            &:hover {
                background-color: #3c7c8e;
                border: 6px solid #244a55;
                color: #fff;
            }
        }

        // .granite-round-btn-filled{
        //     background-color: #3C7C8E;
        //     border : 6px solid #244a55;
        //     color : #fff;
        //     font-family:var(--primary-font);
        //     padding : 2%;
        //     margin : 2%;
        //     border-radius : 60%;
        //     transition: all 0.5s ease 0s;

        // }
        .granite-round-btn-empty {
            background-color: #fff;
            border: 6px solid #ddd;
            color: #888;
            font-family: var(--primary-font);
            padding: 2%;
            margin: 2%;
            border-radius: 60%;
            transition: all 0.5s ease 0s;

            &:hover {
                background-color: #3c7c8e;
                border: 6px solid #244a55;
                color: #fff;
            }
        }

        .granite-square-btn-empty {
            background-color: #fff;
            border: 6px solid #ddd;
            color: #888;
            font-family: var(--primary-font);
            padding: 3%;
            margin: 2%;
            transition: all 0.5s ease 0s;

            &:hover {
                background-color: #3c7c8e;
                border: 6px solid #244a55;
                color: #fff;
            }
        }
    }

    .mmcalculator {
        .piece-box {
            align-items: center;
            display: grid;
            span {
                text-align: center;
                @include font-size(1.9rem);
                font-weight: 400;
            }
        }
        .mesaure-box__label {
            display: block;
            text-align: center;
            font-family: var(--primary-font);
            @include font-size(1rem);
            font-weight: 600;
            span {
                display: block;
                text-align: center;
                font-weight: 600;
                font-family: var(--primary-font);
                @include font-size(1.5rem);
            }
        }
        .mesaure-box__input {
            .input-box {
                input {
                    padding: 1em 0.5em;
                }
            }
        }
    }
    .length-width-part {
        text-align: center;
        font-family: var(--primary-font);
        color: #3c7c8e;
        font-weight: 600;
        @include font-size(1.2rem);
    }
}
</style>
