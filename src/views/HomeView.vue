<template>
  <main>
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

    <section class="installation">
        <div class="installation-main">
            <!-- <h4 class="quote-heading">Postcode</h4> -->
            <div class="installation-form">
                <div class="tooltip-area">
                    <h4 class="address-title">
                        Where will the <strong class="fw-bold">Installation</strong> take place? *
                    </h4>
                    <div class="form-container">
                        <label for="">Address Line 1</label><br>
                        <input type="text"  class="postcode_input"  placeholder="Enter Your Address Line 1" required><br>
                        <label for="">Address Line 2</label><br>
                        <input type="text"  class="postcode_input"  placeholder="Enter Your Address Line 2" required><br>
                        <label for="">Enter your postcode</label><br>
                        <input type="text"  class="postcode_input"  placeholder="Enter Your Postcode" required>  
                    </div>
                    
                </div>
            </div>
            <div class="next-btn-main">
                <button type="button" class="next-btn">NEXT</button>
            </div>
            
        </div>
        
    </section>

    

    <section class="profile-part">
        <selected-range />
        <project-type />
        <measurements />
        <sink-info />
        <options />
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
import Measurements from '@/components/profile/Measurements.vue'
import SinkInfo from '@/components/profile/SinkInfo.vue'
import SelectedRange from '@/components/profile/SelectedRange.vue'
import ProjectType from '@/components/profile/ProjectType.vue'
import Options from '@/components/profile/Options.vue'

export default {
    components: {
        'measurements': Measurements,
        'sink-info': SinkInfo,
        'selected-range': SelectedRange,
        'project-type': ProjectType,
        'options': Options,
    }
}
</script>


