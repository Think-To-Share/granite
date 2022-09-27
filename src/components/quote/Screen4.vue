<template>
    <div class="contact-card quote-progress">
        <form>
            <div class="row gy-2 gx-2">
                <div class="col-lg-6">
                    <label>Your First Name *</label><br />
                    <input type="text" name="f_name" class="form-control" />
                </div>

                <div class="col-lg-6">
                    <label>Your Last Name *</label><br />
                    <input type="text" name="l_name" class="form-control" />
                </div>

                <div class="col-lg-6">
                    <label>Your Email Address *</label><br />
                    <input type="email" name="email" class="form-control" />
                </div>

                <div class="col-md-6">
                    <label>Your Mobile Number *</label><br />
                    <input type="tel" name="" class="form-control" />
                </div>
                <div class="col-lg-12 agree">
                    <div class="checkbox-group form-group" id="">
                        <div class="checkbox mb-15 clearfix uibtn">
                            <label class="no-m"
                                ><span class="cbox"></span>
                                <input
                                    type="checkbox"
                                    name="contactagreemt"
                                    class="form-check-input"
                                />
                                <span class="title fs-14">
                                    I agree to the Terms &amp; Conditions,
                                    Privacy Policy &amp; to receive Granite
                                    Zone correspondence, quotes and offers
                                    via email.*</span
                                ></label
                            >
                        </div>
                    </div>
                    <div class="form-group mt-2">
                        <button
                            type="submit"
                            class="btn w-100 estimate-btn"
                        >
                            Get my estimate
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>