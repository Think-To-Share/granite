<template>
    <div>
        <Errors :errors="errors" />
        <form ref="form" @submit.prevent="submit()">
            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Name</label>
                <Input name="your-name" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Email</label>
                <Input type="email" name="your-email" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Subject</label>
                <Input name="your-subject" class="w-full" />
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Message</label>
                <textarea name="your-message" class="w-full border-gray-300 text-gray-600 placeholder:text-gray-400 rounded-lg shadow-sm transition-colors duration-100 ease-in"></textarea>    
            </div>

            <div class="mb-3">
                <label class="w-full block text-gray-600 font-medium">Attachment</label>
                <input type="file" name="file-828" class="block mt-2 w-full text-sm text-slate-500 border border-gray-600 p-2 bg-white" />
            </div>


            
            <button
                    type="submit"
                    class="mt-5 outline-none bg-blue-500 text-white px-5 py-3 font-medium rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:ring-4 focus:ring-blue-500/25 transition-all duration-150 ease-in-out"
                >
                    <span v-if="loading">Please Wait ...</span> <span v-else>Submit</span>
                </button>
        </form>
    </div>
  
</template>

<script>
import Input from '@/components/ui/forms/Input.vue';
import Errors from '@/components/ui/forms/Errors.vue';
import axios from 'axios';
export default {
    components: { Input, Errors },
    data() {
        return {
            loading: false,
            invalid_fields: []
        }
    },
    methods: {
        async submit() {
            const formData = new FormData(this.$refs.form)
            this.loading = true;

            const {data} = await axios.post('https://sjgraniteimports.com/wp-json/contact-form-7/v1/contact-forms/153/feedback', formData)

            this.invalid_fields = data.invalid_fields;


            this.loading = false;
        },
    },
    computed: {
        errors() {
            return this.invalid_fields.map(err => {
                return err.message
            })
        }
    }
}
</script>
