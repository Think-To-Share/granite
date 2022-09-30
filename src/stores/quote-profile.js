import { defineStore } from 'pinia'

export const useQuoteProfileStore = defineStore('quote_profile', {
    state() {
        return {
            has_project_size: null,
            has_upstand: null,
            has_worktop: null,
            has_project_plan: null,
            project_layout: null,
            project_dimensions: [],
            project_plan_file: null,
            project_plan_size: null,
            unpolished: '',
            polished: '',
            drainer: '',
            upstand_metres: null,
            worktop_option: null,
        }
    },

    actions: {
        setHasProjectSize(value) {
            if(value === true) {
                this.project_plan_file = null
                this.project_plan_size = null
                this.has_project_plan = null
            }else {
                this.project_layout = null
                this.project_dimensions = []
            }

            this.has_project_size = value
        },

        setHasUpstand(value) {
            if(value === true) {
                this.upstand_metres = 0
            }else {
                this.upstand_metres = null
            }

            this.has_upstand = value
        },

        setHasWorktop(value) {
            if(value === false) {
                this.worktop_option = null
            }

            this.has_worktop = value
        },

        setNDimensions(value) {
            const dimensions = []

            for (let i = 0; i < value; i++) {
                dimensions.push({
                    length: '',
                    width: '',
                })
            }

            this.project_dimensions = dimensions;
        }
    }
})
