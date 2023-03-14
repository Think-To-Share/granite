<template>
    <Card>
        <template v-slot:body>
            <form @submit.prevent="submit()" ref="form">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-y-3 gap-x-5">
                    <div class="">
                        <label class="w-full block text-gray-600 font-medium">Your First Name <span class="text-red-500">*</span></label>
                        <Input name="first_name" class="w-full" />
                    </div>

                    <div>
                        <label class="w-full block text-gray-600 font-medium">Your Last Name <span class="text-red-500">*</span></label>
                        <Input name="last_name" class="w-full" />
                    </div>

                    <div class="">
                        <label class="w-full block text-gray-600 font-medium">Your Email Address <span class="text-red-500">*</span></label>
                        <Input type="email" name="email" class="w-full" />
                    </div>

                    <div >
                        <label class="w-full block text-gray-600 font-medium">Your Mobile Number <span class="text-red-500">*</span></label>
                        <Input type="tel" name="mobile" class="w-full" />
                    </div>

                    <div class="md:col-span-2 col-span-1">
                        <label class="">
                            <input
                                type="checkbox"
                                class="rounded-md border-gray-300 shadow-sm mr-2"
                            />

                            <span class="text-sm text-gray-500 font-medium">
                                I agree to the Terms &amp; Conditions,
                                Privacy Policy &amp; to receive SJ Granite
                                correspondence, quotes and offers
                                via email.</span
                            >
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    class="mt-5 w-full outline-none bg-primary-500 text-white px-5 py-3 font-medium rounded-md hover:bg-primary-600 focus:bg-primary-600 focus:ring-4 focus:ring-primary-500/25 transition-all duration-150 ease-in-out"
                >
                    Get My Estimate
                </button>
            </form>
        </template>
    </Card>
</template>

<script>
import Card from '@/components/ui/card/Card.vue';
import { useQuoteStore } from "@/stores/quote";
import Input from '@/components/ui/forms/Input.vue';
import { mapState } from 'pinia';

export default {
    components: { Card, Input },
    methods: {
        submit() {
            const formData = new FormData(this.$refs.form)

            this.axios.post(`${import.meta.env.VITE_API_URL}/request-quote-personal-details/${this.quote_id}`, formData).then(() => {
                window.location = "https://sjgraniteimports.com/thank-you/"
            })
        }
    },
    computed: {
        ...mapState(useQuoteStore, ["quote_id"]),
    },
}
</script>

<style>

</style>