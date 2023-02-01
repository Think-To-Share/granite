<template>
    <footer class="bg-[#D9D9D9] py-6">
        <div class="flex flex-wrap lg:flex-nowrap lg:gap-x-10 container mx-auto">
            <div class="w-4/12 hidden lg:block">
            <h6 class=" text-2xl md:text-xl text-black mb-4">GET IN TOUCH WITH US</h6>
            <FooterContactForm />
            </div>
            <div class="w-full md:w-1/2 lg:w-4/12 flex justify-center ">
                <div class="text-center lg:text-left">
                    <h6 class=" text-2xl md:text-xl text-black mb-4">QUICK LINKS</h6>
                    <ul class="flex flex-col gap-y-2 text-lg">
                        <li>
                            <a href="https://demo.sjgraniteimports.com/about-us/" class=" text-black">About Us</a>
                        </li>
                        <li>
                            <a href="https://demo.sjgraniteimports.com/contact-us/" class=" text-black">Contact Us</a>
                        </li>
                        <li>
                            <a href="https://demo.sjgraniteimports.com/faq/" class=" text-black">FAQs</a>
                        </li>
                        <li>
                            <a href="https://sjgraniteimports.com/terms-and-conditions/" class=" text-black">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="https://sjgraniteimports.com/privacy-policy/" class=" text-black">Privacy Policy</a>
                        </li>
                    </ul>
                    <h6 class=" text-2xl md:text-xl text-black mt-8 mb-3 uppercase">Opening Hours</h6>
                    <p class="text-lg text-gray-500">Mon - Sun: 9am - 9pm</p>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-4/12 text-center lg:text-left mt-10 md:mt-0">
                <h6 class=" text-2xl md:text-xl text-black mb-4">CONTACT &amp; SOCIAL</h6>
                <div class=" flex flex-col gap-y-5 items-center lg:items-start">
                    <a href="mailto:info@sjgraniteimports.com" class="text-gray-600 inline-flex gap-x-2 text-lg items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <span class=" text-gray-500">info@sjgraniteimports.com</span>
                    </a>

                    <a href="tel:07923685927" class="text-gray-600 inline-flex gap-x-2 text-md items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>

                        <span class=" text-gray-500">07923685927</span>
                    </a>
                    <a href="#">
                        <img src="@/assets/images/logo_paypal.png" class=" w-28">
                    </a>
                    <ul class="flex gap-x-3">
                        <li>
                            <a href="#" class="text-gray-600 inline-flex gap-x-2 text-lg items-center"><svg class="w-6 h-6"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-600 inline-flex gap-x-2 text-lg items-center"><svg class="w-6 h-6"  fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-600 inline-flex gap-x-2 text-lg items-center"><svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
        <p class=" w-full text-center text-gray-500 mt-10">© SJ Granite - All Rights Reserved</p>
    </footer>
</template>

<script>
import FooterContactForm from './FooterContactForm.vue'
export default {
  components: { FooterContactForm },
    
}
</script>

