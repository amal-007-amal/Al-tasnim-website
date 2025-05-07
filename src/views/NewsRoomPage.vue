<template>
   <section class=" overflow-visible lg:overflow-visible mt-0 mb-0 innerpage-navbar">
        <div class="relative lg:relative">
            <!-- DESKTOP NAVBAR -->
            <div class="hidden lg:block relative main-navbar w-full z-40 top-0 left-0 mb-8">
                <nav
                    class="relative max-w-[90rem] mx-auto flex justify-between items-center py-4 w-full pl-4 pr-0 sm:px-6 z-30 top-8 xl:pl-[5rem] xl:pr-[6rem]">
                    <!-- Logo -->
                    <router-link :to="{ name: 'HomePage' }" class="hidden md:block logo">
                        <img src="@/assets/business/innerpage-color-logo.png" alt="Logo" class="mb-4 ml-2" />
                    </router-link>

                    <!-- Contact Info & Social -->
                    <div
                        class="absolute top-0 right-0 flex items-center text-sm px-4 sm:px-6  lg:px-12 lg:pr-8 z-10 pr-3 xl:pr-[6rem]">
                        <div class="items-center gap-4 z-10 flex align-center text-center">
                            <a :href="topbarcontactinfo.hqPhoneHref" class="font-light text-black ">
                                <span class="pr-2"><i class="bi bi-telephone-fill"></i></span>
                                HQ: <span class="underline hover:text-orange-500">{{ topbarcontactinfo.hqPhone }}</span>
                            </a>
                            <span class="mx-2">|</span>
                            <a :href="topbarcontactinfo.salesPhoneHref" class="text-black font-light ">
                                Sales Enquiry: <span class="underline hover:text-orange-500">{{ topbarcontactinfo.salesPhone }}</span>
                            </a>
                            <div class="social-media flex gap-2 ml-4">
                                <a v-for="(link, index) in topbarcontactinfo.socialLinks" :key="index" :href="link.url">
                                    <i :class="`bi ${link.icon}`"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Main Menu -->
                    <div class="main-menu flex items-center space-x-12 ml-auto border-t border-black pt-6 mt-3">
                        <ul class="flex space-x-8 font-semibold text-black mb-0 -ml-8">
                            <li v-for="(item, index) in menuItems" :key="index" class="relative hover:text-orange-500"
                                @mouseenter="item.subItems ? toggleDropdown(index, true) : null"
                                @mouseleave="item.subItems ? toggleDropdown(index, false) : null">
                                <a href="#" class="flex items-center">
                                    {{ item.name }}
                                    <i v-if="item.subItems"
                                        class="bi bi-chevron-down ml-1 transition-transform duration-300"
                                        :class="{ 'rotate-180': item.isOpen }"></i>
                                </a>

                                <!-- Dropdown only if subItems exist -->
                                <ul v-if="item.subItems && item.isOpen"
                                    class="absolute bg-white text-black shadow-md mt-2 pb-8 pt-8 rounded top-[65%] w-[427px] z-50">
                                    <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                                        <router-link v-if="subItem.isRouterLink" :to="subItem.link"
                                            class="block px-4 py-2 hover:bg-gray-100">
                                            {{ subItem.name }}
                                        </router-link>
                                        <a v-else href="#" class="block px-4 py-2 hover:bg-gray-100">
                                            {{ subItem.name }}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>


                        <!-- Right Side Icons -->
                        <div class="max-w-7xl mx-auto mainbar-button flex items-center ml:10px; space-x-6">
                            <div class="search-button">
                                <!-- Toggle button -->
                                <button @click="toggleSearch">
                                    <i v-if="!isSearchOpen" class="bi bi-search text-xl"></i>
                                    <!-- Search icon when closed -->
                                    <i v-if="isSearchOpen" class="bi bi-x text-2xl"></i>
                                    <!-- Close icon when search is open -->
                                </button>

                                <!-- Search input with smooth transition -->
                                <div class="search-block">
                                    <div :class="{ 'popup-search': true, 'open': isSearchOpen }"
                                        class="popup-search-container">
                                        <div class="relative w-64">
                                            <input type="text"
                                                class="bg-primarycolor pl-10 pr-4 py-2 rounded w-full text-white placeholder-white focus:outline-none border-b-2 border-text-textgray"
                                                placeholder="Search..." />
                                            <!-- Search Icon -->
                                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 transform w-5 h-5 text-white pointer-events-none"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <button class="text-black z-50" @click="isdesktopdrawerOpen = true" type="button">
                                <i class="bi bi-list text-xl"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- search box -->


            <!-- desktop menu Drawer -->
            <div v-show="true" class="fixed inset-0 z-50 pointer-events-none">
                <!-- Overlay -->
                <div v-show="isdesktopdrawerOpen"
                    class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 pointer-events-auto"
                    @click="isdesktopdrawerOpen = false"></div>

                <!-- Drawer -->
                <div class="fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 bg-textcolor p-4 shadow-lg transition-transform duration-300 ease-in-out pointer-events-auto"
                    :class="isdesktopdrawerOpen ? 'translate-x-0' : 'translate-x-full'">
                    <div class="mobile-nav-close flex justify-between items-center">
                        <div>
                            <img src="@/assets/home/footer-logo.png" class="" alt="" />
                        </div>
                        <button @click="isdesktopdrawerOpen = false" class="top-4 left-4 text-primarycolor z-50">
                            <i class="bi bi-x text-2xl"></i>
                        </button>
                    </div>

                    <ul>
                        <li>
                            <a href="#" class="text-primarycolor block py-2">Business</a>
                        </li>
                        <li>
                            <a href="#" class="text-primarycolor block py-2">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="text-primarycolor block py-2">Newsrooms</a>
                        </li>
                        <li><a href="#" class="text-primarycolor block py-2">Career</a></li>
                        <li>
                            <a href="#" class="text-primarycolor block py-2">Contact us</a>
                        </li>
                    </ul>

                    <div class="mobile-navbar gap-4 z-10 text-left mt-4">
                        <a href="tel:+96824214000" class="font-light text-primarycolor text-sm inline-block">
                            <span class="pr-2"><i class="bi bi-telephone-fill"></i></span>
                            HQ: <span class="underline">+968 2421 4000</span>
                        </a>
                        <span class="mx-2">|</span>
                        <a href="tel:+96826946666" class="text-primarycolor font-light text-sm mt-4 inline-block">
                            Sales Enquiry: <span class="underline">+968 2694 6666</span>
                        </a>

                        <div class="social-media flex justify-start gap-6 mt-6">
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                            <a href="#"><i class="bi bi-twitter-x"></i></a>
                            <a href="#"><i class="bi bi-youtube"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MOBILE NAVBAR -->
            <div class="relative flex lg:hidden justify-between items-start w-full px-4 mt-5 z-40">
                <!-- Logo -->
                <div class="text-2xl font-bold flex-shrink-0 relative z-40">
                    <a href="#">
                        <img src="@/assets/business/innerpage-color-logo.png" alt="Logo" class="h-16 mb-4 ml-2" />
                    </a>
                </div>

                <!-- Hamburger Button -->
                <button class="text-black z-50" @click="ismobileDrawerOpen = true" type="button">
                    <i class="bi bi-list text-4xl"></i>
                </button>
            </div>

            <!-- Overlay and Drawer -->
            <div v-show="true" class="fixed inset-0 z-50 pointer-events-none">
                <!-- Overlay -->
                <div v-show="ismobileDrawerOpen"
                    class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 pointer-events-auto"
                    @click="ismobileDrawerOpen = false"></div>

                <div class="fixed top-0 left-0 h-full w-full sm:w-2/3 md:w-1/2 bg-textcolor p-4 shadow-lg transition-transform duration-300 ease-in-out pointer-events-auto"
                    :class="ismobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'">
                    <div class="mobile-nav-close flex justify-between">
                        <img src="@/assets/home/footer-logo.png" class="" alt="" />
                        <button @click="ismobileDrawerOpen = false" class="mb-4 text-primarycolor z-50 relative">
                            <i class="bi bi-x text-2xl"></i>
                        </button>
                    </div>
                    <div class="overflow-y-auto max-h-[calc(100vh-100px)]">
                        <div class="relative w-full mb-4">
                            <input type="text"
                                class="pl-10 pr-4 py-2 rounded w-full text-textgray placeholder-textgay focus:outline-none border-b-2 border-text-primarycolor"
                                placeholder="Search..." />
                            <!-- Search Icon -->
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 transform w-5 h-5 text-primarycolor pointer-events-none"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                        </div>

                        <ul>
                            <li v-for="(item, index) in mobileMenuItems" :key="index">
                                <div v-if="item.subItems && item.subItems.length > 0"
                                    @click="item.isOpen = !item.isOpen"
                                    class="flex justify-between items-center py-2 cursor-pointer text-primarycolor mr-3">
                                    {{ item.name }}
                                    <i :class="item.isOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                                </div>

                                <a v-else :href="item.link" class="text-primarycolor block py-2">
                                    {{ item.name }}
                                </a>

                                <!-- Sub Items -->
                                <ul v-show="item.isOpen" v-if="item.subItems && item.subItems.length > 0"
                                    class="pl-4 text-sm">
                                    <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                                        <router-link v-if="subItem.isRouterLink" :to="subItem.link"
                                            class="text-black block py-1">
                                            {{ subItem.name }}
                                        </router-link>
                                        <a v-else :href="subItem.link" class="text-primarycolor block py-1">
                                            {{ subItem.name }}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>



                        <div class="mobile-navbar gap-4 z-10 text-left mt-4">
                            <template v-for="(info, index) in mobilecontactInfo" :key="index">
                                <a :href="`tel:${info.phone}`"
                                    class="font-light text-primarycolor text-sm inline-block"
                                    :class="{ 'mt-4': index > 0 }">
                                    <span class="pr-2" v-if="index === 0">
                                        <i class="bi bi-telephone-fill"></i>
                                    </span>
                                    {{ info.label }}: <span class="underline">{{ info.display }}</span>
                                </a>
                                <span v-if="index === 0" class="mx-2">|</span>
                            </template>

                            <div class="social-media flex justify-start gap-6 mt-6">
                                <a v-for="(item, index) in mobilesocialLinks" :key="index" :href="item.link"
                                    :aria-label="item.name">
                                    <i :class="['bi', item.icon]"></i>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>


<!-- NEWSROOM BANNER START -->
<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 via-45% to-transparent z-10 hidden xl:block xl:lg:max-h-[728px]"></div>

    <section class=" leaders-main relative mt-0 bg-gray-100">
  <div
    class="w-full bg-cover bg-center bg-no-repeat"
    :style="`background-image: url(${newsroombanner.image})`"
  >
    <div class="bg-opacity-50">
      <div class="banner-box block md:flex items-center justify-center px-10 py-16 xl:pb-0 relative z-20">
        <div class="mr-28">
            <img :src="newsroombanner.boximage" alt="Box Image" class="object-cover max-h-[500px]" />
        </div>
        <div class="text-white max-w-xl mt-6 xl:mt-0">
          <h2 class="">{{ newsroombanner.name }}</h2>
          <p class=" font-light mb-4">{{ newsroombanner.title }}</p>
          <p class=" mb-4">{{ newsroombanner.description }}</p>

      
            <a :href="newsroombanner.buttonText"
                class="innerwrapper-btn btn inline-flex items-center gap-4 bg-primarycolor text-white font-semibold px-6 py-3 rounded-full transition hover:bg-[#162c72]  mb-14">
                <span class="text">Learn More</span>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66669 11.3334L11.3334 4.66669" stroke="white" stroke-width="1.33333"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.66669 4.66669H11.3334V11.3334" stroke="white" stroke-width="1.33333"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- NEWSROOM BANNER END-->


<!-- LEADERS CARD START -->

<section class="max-w-10xl lg:mx-[4rem] lg:px-12 px-4 py-12 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <div
    v-for="member in team"
    :key="member.name"
    class="group bg-white rounded-xl overflow-hidden border transition team-card" data-aos="fade-up"
  >
    <img
      :src="member.image"
      class="h-60 object-contain bg-white"
      :alt="member.name"
    />
    <div class="info p-4   group-hover:bg-orange-500 transition-colors">
      <h3 class="text-lg text-textdarkgray font-bold group-hover:text-white">{{ member.name }}</h3>
      <p class="text-sm text-textdarkgray group-hover:text-white">{{ member.title }}</p>
    </div>
  </div>
</section>

<!-- LEADERS CARD END  -->

<!-- GET IN TOUCH START-->



<section class="relative w-full text-white lg:flex  overflow-hidden get-in-touch">
        <!-- Right: Image with gradient overlay -->
        <div class="flex-1 relative image-part">
            <!-- Background gradient -->
            <div class="absolute inset-0 bg-gradient-to-l from-orangegradient via-[#fbb77b9d] via-25% to-transparent z-10">
            </div>

            <!-- Image -->
            <img src="@/assets/business/get-in-touch.png" alt="Get in Touch" class="w-full h-full object-cover z-0" />
        </div>

        <!-- Left: Text Content -->
        <div class="flex-1 bg-orangegradient flex flex-col justify-center px-10 lg:px-20 contact-part">
            <h2 class="text-primarycolor font-extrabold leading-tight mb-6">
                {{ Getintouchinfo.title }}
            </h2>

            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <i
                        class="bi bi-geo-alt-fill text-white border mr-2"></i>
                    <p class="">{{ Getintouchinfo.address }}</p>
                </div>

                <div class="flex items-center gap-4">
                    <i
                        class="bi bi-telephone-fill text-white border mr-2"></i>
                    <span><a :href="Getintouchinfo.GetPhoneHref">{{ Getintouchinfo.phone }}</a></span>
                </div>

                <div class="flex items-center gap-4">
                    <i
                        class="bi bi-envelope-fill text-white border mr-2 "></i>
                    <span><a href="">{{ Getintouchinfo.email }}</a></span>
                </div>
            </div>
        </div>
    </section>


    <!-- GET IN TOUCH END  -->

    <!-- FOOTER START -->

    <footer class="relative bg-white footer-sec">
        <div class="max-w-10xl lg:mx-[4rem] px-2 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-0">
            <!-- Logo -->
            <div class="md:col-span-3 flex flex-col items-start">
                <img :src="footerData.logoUrl" alt="Al Tasnim" class="w-40 lg:w-64 md:w-48 mb-6" />
            </div>

            <!-- Quick Links -->
            <div class="md:col-span-3 xl:ml-20">
                <h4 class="text-orange-500 font-semibold mb-2">Quick Links</h4>
                <ul class="space-y-4 text-gray-700 text-sm pl-0">
                    <li v-for="(link, index) in footerData.quickLinks" :key="index">
                        <a :href="link.url" class="hover:text-orange-500 text-textdarkgray">{{ link.name }}</a>
                    </li>
                </ul>
            </div>

            <!-- Help -->
            <div class="md:col-span-6 xl:ml-20 follow-us">
                <h4 class="text-orange-500 font-semibold mb-2">{{ footerData.helpTitle }}</h4>
                <!-- Dynamic Help Title -->
                <div class="flex flex-wrap gap-6 text-gray-700 text-sm mb-4 help-part">
                    <a v-for="(link, index) in footerData.helpLinks" :key="index" :href="link.url"
                        class="hover:text-orange-500 text-textdarkgray">
                        {{ link.name }}
                    </a>
                </div>

                <div class="border-t border-gray-400 mt-4 pt-4 flex flex-wrap justify-between items-center">
                    <p class="text-gray-700 text-sm">{{ footerData.followTitle }}</p>
                    <div class="flex gap-4">
                        <a v-for="(social, index) in footerData.socialLinks" :key="index" :href="social.url"
                            class="border border-secondary bg-secondary rounded-full ">
                            <i :class="['bi', social.icon, 'text-white text-xl']"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Contact -->
            <div class="md:col-span-12 md:col-start-4 xl:ml-20 mt-2">
                <h4 class="text-orange-500 font-semibold mt-1 mb-2">{{ footerData.contactTitle }}</h4>
                <!-- Dynamic Contact Title -->
                <div class="border-t border-gray-400 pt-4 flex flex-wrap gap-8 xl:gap-[4rem] text-gray-700 text-sm">
                    <div class="flex items-start gap-2 xl:w-[249px]">
                        <i class="bi bi-geo-alt text-orange-500 text-xl"></i>
                        <p class="mb-0 text-textdarkgray">{{ footerData.contactInfo.address }}</p>
                    </div>

                    <div class="flex items-center gap-2">
                        <i class="bi bi-telephone text-orange-500 text-xl"></i>
                        <p class="mb-0 text-textdarkgray"><a :href="footerData.contactInfo.PhoneHref">{{
                            footerData.contactInfo.phone }}</a></p>
                    </div>

                    <div class="flex items-center gap-2">
                        <i class="bi bi-envelope text-orange-500 text-xl"></i>
                        <p class="mb-0 text-textdarkgray">{{ footerData.contactInfo.email }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-300 text-center text-xs text-[#979797] py-4">
            Copyright © 2024 Al Tasnim Group
        </div>
    </footer>

    <!-- FOOTER END -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
    team,
    newsroombanner,
    menuItems,
    topbarcontactinfo,
    Getintouchinfo,
    footerData,
    useCounterAnimation,
    mobileMenuItems,
  mobilecontactInfo,
  mobilesocialLinks
} from "@/script.js";

import "bootstrap/js/dist/offcanvas";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// State variables
const slider = ref(null);
const isSearchOpen = ref(false); // Reactive search state
const ismobileDrawerOpen = ref(false);
const isdesktopdrawerOpen = ref(false);

// Toggle dropdown on hover
const toggleDropdown = (index, isOpen) => {
    menuItems.value[index].isOpen = isOpen;
};

// Slick carousel initialization
onMounted(() => {
    $(slider.value).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    });
});

// Methods
const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
};

const nextSlide = () => $(slider.value).slick("slickNext");
const prevSlide = () => $(slider.value).slick("slickPrev");
</script>


<style scoped>
.button {
    position: relative;
    /* ... other styles ... */
}

.arrow {
    position: absolute;
    right: -10px;
    /* Adjust as needed */
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease-out;
    /* Smooth transition */
}

.button:hover .arrow {
    transform: translateY(-50%) translateX(10px);
    /* Shift the arrow on hover */
}
</style>
