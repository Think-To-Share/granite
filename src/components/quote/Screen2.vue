<template>
    <section class="">
        <Card>
            <template v-slot:title>Where will the <strong>Installation</strong> take place?</template>
            
            <template v-slot:body>
                <div class="form-container">
                    <form>
                        <div class="w-full mb-4 flex flex-col">
                            <label class="font-semibold text-gray-500 mb-3">Address Line 1</label>
                            <Input
                                v-model="address_1"
                                placeholder="Enter Your Address Line 1"
                                required
                            />
                        </div>
                            
                        <div class="w-full mb-4 flex flex-col">
                            <label class="font-semibold text-gray-500 mb-3">Address Line 2</label>
                            <Input
                                v-model="address_2"
                                placeholder="Enter Your Address Line 2"
                                required
                            />
                        </div>

                        <div class="w-full mb-4 flex flex-col">
                            <label class="font-semibold text-gray-500 mb-3">Enter Your Postcode</label>
                            <Input
                                v-model="post_code"
                                placeholder="Enter Your Postcode"
                                required
                            />
                        </div>
                    </form>
                </div>
            </template>
        </Card>

        <div class="w-full text-right mt-5" @click.prevent="submit()">
            <button type="button" class="inline-block px-8 py-3 bg-primary-500 rounded-md font-medium text-white transition-all hover:bg-primary-600">NEXT</button>
        </div>
    </section>
</template>

<script>
import { useQuoteStore } from "@/stores/quote";
import { mapActions, mapState } from "pinia";
import Input from "@/components/ui/forms/Input.vue";
import Card from "@/components/ui/card/Card.vue";

export default {
    data() {
        return {
            address_1: '',
            address_2: '',
            post_code: '',
        }
    },
    computed: {
        ...mapState(useQuoteStore, ["quote_id"]),
        
        form_data() {
            return {
                address_1: this.address_1,
                address_2: this.address_2,
                post_code: this.post_code,
            }
        }
    },
    methods: {
        ...mapActions(useQuoteStore, ["changeScreen"]),

        submit() {
            this.axios
                .post(`${process.env.API_URL}/request-quote-address/${this.quote_id}`, this.form_data)
                .then((res) => {
                    this.changeScreen(3);
            });
        },
    },
    components: { Input, Card }
};
</script>

<style></style>
