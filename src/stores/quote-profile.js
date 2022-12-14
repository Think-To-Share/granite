import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

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
            drainer: 'No',
            upstand_metres: null,
            worktop_option: null,
            errors: {},
        }
    },

    getters: {
        error_messages() {
            return Object.values(this.errors).map(error => error[0])
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

        setHasProjectPlan(value) {
            if(value === false) {
                this.project_plan_file = null
            }

            this.has_project_plan = value
        },

        setHasWorktop(value) {
            if(value === false) {
                this.worktop_option = null
            }

            this.has_worktop = value
        },

        setProjectLayout(value) {
            this.project_layout = value
        },

        setNDimensions(value) {
            const dimensions = []

            for (let i = 0; i < value; i++) {
                dimensions.push({
                    uuid: uuidv4(),
                    length: '',
                    width: '',
                })
            }

            this.project_dimensions = dimensions;
        },

        pushDimension(dimension = {length: "", width: ""}) {
            if(this.project_dimensions.length >= 26) {
                return;
            }

            dimension['uuid'] = uuidv4()

            this.project_dimensions.push(dimension)
        },

        removeDimension(index) {
            this.project_dimensions.splice(index, 1)
        },

        setProjectPlanSize(value) {
            this.project_plan_size = value
        },

        setProjectPlanFile(file) {
            this.project_plan_file = file
        },

        async submitData(quote_id) {
            this.errors = []
            const formData = new FormData()

            formData.append('project_layout', this.project_layout)
            formData.append('project_dimensions', JSON.stringify(this.project_dimensions))
            formData.append('project_plan_file', this.project_plan_file)
            formData.append('project_plan_size', this.project_plan_size)
            formData.append('unpolished', this.unpolished)
            formData.append('polished', this.polished)
            formData.append('drainer', this.drainer)
            formData.append('upstand_metres', this.upstand_metres)
            formData.append('worktop_option', this.worktop_option)

            try {
                await axios.post(`http://127.0.0.1:8000/request-quote-measurement/${quote_id}`, formData)
            }catch(err) {
                if(err.response.status === 422) {
                    this.errors = err.response.data.errors;
                    return;
                }

                throw err;
            }
        }
    }
})
