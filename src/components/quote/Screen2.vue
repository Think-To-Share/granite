<template>
    <section class="">
        <div class="w-full p-4 shadow-md border border-gray-200 rounded-md">
            <h4 class=" text-2xl mb-4 text-gray-600">
                Where will the
                <span class="font-bold">Installation</span> take
                place? <span class=" text-red-500 font-bold">*</span>
            </h4>
            <div class="form-container">
                <form ref="form">
                    <div class="w-full mb-4 flex flex-col">
                        <label class="font-semibold text-gray-500 mb-3">Address Line 1</label>
                        <input
                            type="text"
                            name="address_1"
                            class="postcode_input"
                            placeholder="Enter Your Address Line 1"
                            required
                        />
                    </div>
                        
                    <div class="w-full mb-4 flex flex-col">
                        <label class="font-semibold text-gray-500 mb-3">Address Line 2</label>
                        <input
                            type="text"
                            name="address_2"
                            class="postcode_input"
                            placeholder="Enter Your Address Line 2"
                            required
                        />
                    </div>

                    <div class="w-full mb-4 flex flex-col">
                        <label class="font-semibold text-gray-500 mb-3">Enter Your Postcode</label>
                        <input
                            type="text"
                            name="post_code"
                            class="postcode_input"
                            placeholder="Enter Your Postcode"
                            required
                        />
                    </div>
                </form>
            </div>
        </div>

        <div class="w-full text-right mt-5" @click.prevent="submit($refs.form)">
            <button type="button" class="inline-block px-8 py-3 bg-primary-500 rounded-md font-medium text-white transition-all hover:bg-primary-600">NEXT</button>
        </div>
    </section>
</template>

<script>
import { useQuoteStore } from "@/stores/quote";
import { mapActions, mapState } from "pinia";

export default {
    computed: {
        ...mapState(useQuoteStore, ["quote_id"]),
    },
    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"]),

        submit(form) {
            const formRequest = new FormData(form);

            this.axios
                .post(`/request-quote-address/${this.quote_id}`, formRequest)
                .then((res) => {
                    // Handle
                });

            this.changeScreen(3);
        },
    },
};
</script>

<style></style>
