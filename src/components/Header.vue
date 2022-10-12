<template>
<header class="granite-header">
        <div class="granite-header-main">
            <div class="action-menu">
                <a href="tel:70923685927" class="action-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg><span>70923685927</span></a>
                <a href="mailto:Info@sjgraniteimports.com" class="action-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg><span>Info@sjgraniteimports.com</span></a>
                <div class="get-quote-btn">
                    <a href="#" class="quote-btn">Get Quote</a>
                </div>
            </div>
            <div class="logo">
               <a href="#"><img src="http://demo.sjgraniteimports.com/wp-content/uploads/2022/08/logo-1.png" alt="logo" class="logo-img"></a> 
            </div>
            <div class="granite-menu">
                <ul>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/about-us/">About</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/blog/">Blog</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/gallery/">Gallery</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/faq/">FAQs</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/contact-us/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="granite-header-bottom">
            <ul>
                <li>
                    <a href="https://demo.sjgraniteimports.com/">Home</a>
                </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/granite-worktops/">Granite</a>
                </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/quartz-worktops/">Quartz</a>
                </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/cobble/">Cobble</a>
                </li>
                <li>
                    <a href="https://storage.net-fs.com/hosting/7204451/66/">Visualizer</a>
                </li>
                <li>
                    <div class="header-btn">
                        <a href="#" class="request-btn">Request A Free Quote</a>
                    </div>
                </li>
            </ul>
        </div>
    </header>

    <header class="responsive-header">
        <div class="mobile-header">
            <a href="#" class="responsive-menu-btn" @click="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                </svg>
            </a>
            <div class="logo">
                <a href="#"><img src="http://demo.sjgraniteimports.com/wp-content/uploads/2022/08/logo-1.png" alt="logo" class="logo-img"></a> 
            </div>
            <div class="get-quote-btn">
                <a href="#" class="quote-btn">Get Quote</a>
            </div>
        </div>
    </header>

    <div class="responsive-menu" :class="{hide: !showMobileMenu}">
        <div class="header">
            <button id="close" @click="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <ul>
            	<li>
                    <a href="https://demo.sjgraniteimports.com/">Home</a>
                </li>
			
					<li>
                        <a href="https://demo.sjgraniteimports.com/about-us/">About</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/blog/">Blog</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/gallery/">Gallery</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/faq/">FAQs</a>
                    </li>
                    <li>
                        <a href="https://demo.sjgraniteimports.com/contact-us/">Contact Us</a>
                    </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/granite-worktops/">Granite</a>
                </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/quartz-worktops/">Quartz</a>
                </li>
                <li>
                    <a href="https://demo.sjgraniteimports.com/cobble/">Cobble</a>
                </li>
                <li>
                    <a href="https://storage.net-fs.com/hosting/7204451/66/">Visualizer</a>
                </li>
                <li>
                    <div class="header-btn">
                        <a href="#" class="request-btn">Request A Free Quote</a>
                    </div>
                </li>
        </ul>
    </div>
  
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
