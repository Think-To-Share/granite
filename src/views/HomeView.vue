<template>
  <main>
  <section class="installation">
        <div class="installation-main">
            <!-- <h4 class="quote-heading">Postcode</h4> -->
            <div class="installation-form">
                <div class="tooltip-area">
                    <h4 class="address-title">
                        Where will the <strong class="fw-bold">Installation</strong> take place? *
                    </h4>
                    <div class="form-container">
                        <label for="">Enter your postcode</label><br>
                        <input type="text"  class="postcode_input"  placeholder="Enter Your Postcode" required><br>
                        <button class="postcode_button" type="button">Find your Address</button><br>
                        <select class="custom-select" name="caste_category" required>
                            <option disabled  value="" selected>Select your Address</option>
                            <option value="unreserved">4Fashions Ltd, Unit 3, Manchester Trade Park, Holt Street, Manchester</option>
                            <option value="sc">Littens & Co Ltd, Unit 7, Holt Street, Manchester</option>
                            <option value="st">Premier Stone, Unit 3, Holt Street, Manchester</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            <div class="next-btn-main">
                <button type="button" class="next-btn">NEXT</button>
            </div>
            
        </div>
        
    </section>

    <section class="quartz-granite-part">
        <div class="quartz-heading-main">
            <h2 class="quartz-heading">Quartz</h2>
        </div>
        
        <div class="quartz-img-main">
                <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
            <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
            <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
            <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
            <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
            <div class="quartz-main">
                <div class="quartz-img-container">
                <img class="quartz-img" src="./src/images/Viscon_White.jpg">
                <h3 class="quartz-name">Viscon White</h3>
                </div>
            </div>
        </div>
        <div class="granite-heading-main">
            <h2 class="granite-heading">Granite</h2>
        </div>       
        <div class="granite-img-main">
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
            <div class="granite-main">
                <div class="granite-img-container">
                    <img class="granite-img" src="./src/images/Viscon_White.jpg">
                    <h3 class="granite-name">Viscon White</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="profile-part">
        <selected-range />
        <project-size />
        <sink-info />
    </section>

    <div class="contact-card quote-progress">
        <form>
            <div class="row gy-2 gx-2">
                <div class ="col-lg-6">
                <label>Your First Name *</label><br>
                    <input type="text" name="f_name" class="form-control">
                </div>

                <div class ="col-lg-6">
                <label>Your Last Name *</label><br>
                    <input type="text" name="l_name" class="form-control">  
                </div>

                <div class ="col-lg-6">
                <label>Your Email Address *</label><br>
                    <input type="email" name="email" class="form-control">  
                </div>
            
                <div class ="col-md-6">
                <label>Your Mobile Number *</label><br>
                    <input type="tel" name="" class="form-control">   
                </div>
                <div class="col-lg-12 agree">
                    <div class="checkbox-group form-group" id="">
                        <div class="checkbox mb-15 clearfix uibtn">
                            <label class="no-m"><span class="cbox"></span>
                            <input type="checkbox" name="contactagreemt" class="form-check-input">
                            <span class="title fs-14"> I agree to the Terms &amp; Conditions, Privacy Policy &amp; to receive Granite
                            Zone correspondence, quotes and offers via email.*</span></label>
                        </div>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn w-100 estimate-btn">Get my estimate</button>
                    </div>
                </div>
            </div> 
        </form>
    </div>


  </main>
</template>

<script>
import ProjectSize from '@/components/profile/ProjectSize.vue'
import SinkInfo from '@/components/profile/SinkInfo.vue'
import SelectedRange from '@/components/profile/SelectedRange.vue'

export default {
    components: {
        'project-size': ProjectSize,
        'sink-info': SinkInfo,
        'selected-range': SelectedRange,
    }
}
</script>


