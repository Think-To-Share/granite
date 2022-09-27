<template>
  <section class="installation">
            <div class="installation-main">
                <!-- <h4 class="quote-heading">Postcode</h4> -->
                <div class="installation-form">
                    <div class="tooltip-area">
                        <h4 class="address-title">
                            Where will the
                            <strong class="fw-bold">Installation</strong> take
                            place? *
                        </h4>
                        <div class="form-container">
                            <form ref="form">
                                <label for="">Address Line 1</label><br />
                            <input
                                type="text"
                                name="address_1"
                                class="postcode_input"
                                placeholder="Enter Your Address Line 1"
                                required
                            /><br />
                            <label for="">Address Line 2</label><br />
                            <input
                                type="text"
                                name="address_2"
                                class="postcode_input"
                                placeholder="Enter Your Address Line 2"
                                required
                            /><br />
                            <label for="">Enter Your Postcode</label><br />
                            <input
                                type="text"
                                name="post_code"
                                class="postcode_input"
                                placeholder="Enter Your Postcode"
                                required
                            />
                            </form>
                        </div>
                    </div>
                </div>
                <div class="next-btn-main" @click.prevent="submit($refs.form)">
                    <button type="button" class="next-btn">NEXT</button>
                </div>
            </div>
        </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions, mapState } from "pinia"

export default {
    computed: {
        ...mapState(useQuoteStore, ['quote_id'])
    },
    methods:{
        ...mapActions(useQuoteStore, ['changeScreen']),

        submit(form) {
            const formRequest = new FormData(form)
            
            this.axios.post(`/request-quote-address/${this.quote_id}`, formRequest).then(res => {
                // Handle
            })

            this.changeScreen(3)
        }

    }
}
</script>

<style>

</style>