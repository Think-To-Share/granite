import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

export const useQuoteProfileStore = defineStore('quote_profile', {
    state() {
        return {
            has_project_size: '',
            has_upstand: '',
            has_worktop: '',
            has_project_plan: '',
            project_layout: '',
            project_dimensions: [],
            project_plan_file: '',
            project_plan_size: '',
            unpolished: '',
            polished: '',
            drainer: 'No',
            upstand_metres: '',
            worktop_option: '',
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
            if(value === 1) {
                this.project_plan_file = ''
                this.project_plan_size = ''
                this.has_project_plan = ''
            }else {
                this.project_layout = ''
                this.project_dimensions = []
            }

            this.has_project_size = value
        },

        setHasUpstand(value) {
            if(value === 1) {
                this.upstand_metres = 0
            }else {
                this.upstand_metres = ''
            }

            this.has_upstand = value
        },

        setHasProjectPlan(value) {
            if(value === 0) {
                this.project_plan_file = ''
            }

            this.has_project_plan = value
        },

        setHasWorktop(value) {
            if(value === 0) {
                this.worktop_option = ''
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

            formData.append('has_project_size', this.has_project_size)
            formData.append('has_upstand', this.has_upstand)
            formData.append('has_worktop', this.has_worktop)
            formData.append('has_project_plan', this.has_project_plan)
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
                await axios.post(`${import.meta.env.VITE_API_URL}/request-quote-measurement/${quote_id}`, formData)
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
