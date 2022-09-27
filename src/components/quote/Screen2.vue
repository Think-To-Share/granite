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
                            <label for="">Address Line 1</label><br />
                            <input
                                type="text"
                                class="postcode_input"
                                placeholder="Enter Your Address Line 1"
                                required
                            /><br />
                            <label for="">Address Line 2</label><br />
                            <input
                                type="text"
                                class="postcode_input"
                                placeholder="Enter Your Address Line 2"
                                required
                            /><br />
                            <label for="">Enter Your Postcode</label><br />
                            <input
                                type="text"
                                class="postcode_input"
                                placeholder="Enter Your Postcode"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div class="next-btn-main" @click.prevent="changeScreen(3)">
                    <button type="button" class="next-btn">NEXT</button>
                </div>
            </div>
        </section>
</template>

<script>
import { useQuoteStore } from '@/stores/quote'
import { mapActions } from "pinia"

export default {
    methods:{
        ...mapActions(useQuoteStore, ['changeScreen'])
    }
}
</script>

<style>

</style>