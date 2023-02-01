<template>
    <header class="granite-header">
            <div class="header-main">
                <div class="granite-header-logo">
                    <div class="logo">
                        <a href="https://sjgraniteimports.com/"><img src="https://sjgraniteimports.com/wp-content/uploads/2022/11/image-removebg-preview-10-1-1-3.jpg" alt="logo" class="logo-img"></a> 
                    </div>
                </div>
                <div class="granite-header-list">
                    <ul>
                        <li>
                            <a href="https://sjgraniteimports.com/granite-worktops/">Granite</a>
                        </li>
                        <li>
                            <a href="https://sjgraniteimports.com/quartz-worktops/">Quartz</a>
                        </li>
                        <li>
                            <a href="https://storage.net-fs.com/hosting/7204451/66/">Visualizer</a>
                        </li>
                        <li>
                            <a href="https://sjgraniteimports.com/gallery/">Gallery</a>
                        </li>
                        <li>
                            <a href="https://sjgraniteimports.com/contact-us/">Contact</a>
                        </li>
                    </ul> 
                </div>
                <div class="granite-header-quote">
                    <div class="header-btn">
                        <a href="#" class="request-btn">Request A Free <br>Quote</a>
                    </div>
                </div>
            </div> 
    </header>

    <header class="responsive-header">
        <div class="mobile-header">
            <a href="#" class="responsive-menu-btn" @click="toggleMenu()">
                <svg v-if="!showMobileMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                </svg> 
                <svg v-if="showMobileMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </a>
            <div class="logo">
                <a href="#"><img src="https://sjgraniteimports.com/wp-content/uploads/2022/11/image-removebg-preview-10-1-1-3.jpg" alt="logo" class="logo-img"></a> 
            </div>
            <div class="get-quote-btn">
                <!-- <a href="#" class="quote-btn">Get Quote</a> -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </div>
        </div>
        <div class="responsive-header-menu"  :class="{hide: !showMobileMenu}">
            <ul>
            	<li>
                    <a href="https://sjgraniteimports.com/">Home</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/granite-worktops/">Granite</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/quartz-worktops/">Quartz</a>
                </li>
                <li>
                    <a href="https://storage.net-fs.com/hosting/7204451/66/">Visualizer</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/about-us/">About Us</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/blog/">Blog</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/gallery/">Gallery</a>
                </li>
                <li>
                    <a href="#" class="request-btn">Request A Free Quote</a>
                </li>
                <li>
                    <a href="https://sjgraniteimports.com/contact-us/">Contact Us</a>
                </li>   
            </ul>
        </div>
    </header>

   
  
</template>

<script>
export default {
    data() {
        return {
           showMobileMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    }
}
</script>
