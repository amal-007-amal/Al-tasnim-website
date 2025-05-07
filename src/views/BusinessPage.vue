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

    <!-- BUSINESS BANNER START -->
    <section
        class="innerbanner relative bg-cover bg-center h-screen md:h-96 mt-0 text-white flex items-center justify-center overflow-hidden">
        <img :src="innerpagebannerdata.business.imageUrl" alt="Banner Image"
            class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="max-w-10xl lg:mx-[4rem] px-2 lg:px-12 relative z-10 w-full">
            <h1 class="mb-2 text-left">
                <span class="text-secondary"><b>{{ innerpagebannerdata.business.spantitle }}</b></span>
                {{ innerpagebannerdata.business.title }}
            </h1>
            <p class=" text-left">
                {{ innerpagebannerdata.business.subtitle }}
            </p>
        </div>
    </section>

    <!-- BUSINESS BANNER END -->
    <!-- DIVISION START -->
    <section class="bg-gray-100">
        <div class="max-w-10xl lg:mx-16 px-2 lg:px-12 py-8 md:px-8" data-aos="fade-right">
            <div class="flex justify-between items-center mb-12">
                <h2 class=" text-primarycolor" data-aos="fade-right">Division Strength</h2>
                <hr class="flex-grow border-t border-blue-300 ml-4 opacity-100" />
            </div>
            <div v-for="(points, index) in DivisionStrength" :key="index" class="" data-aos="fade-up">
                <ul class="flex items-center pl-2 lg:pl-8">
                    <li class="flex items-center mb-4">
                        <i
                            class="bi bi-check2 text-secondary !border !border-secondary w-4 h-4 p-3 lg:w-8 lg:h-8 flex items-center justify-center rounded-full mr-2 text-md lg:text-lg"></i>
                        <p class="text-textdarkgray text-sm md:text-base mb-0">
                            {{ points.description }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!-- DIVISION END -->
    <!-- PROJECTS START -->
    <section class="py-16 bg-gray-100 our-projects">
        <div class="max-w-10xl lg:mx-16 px-2 lg:px-12 text-center mx-auto">
            <div class="flex justify-between items-center mb-20">
                <h2 class=" text-textcolor" data-aos="fade-right">Products & Services</h2>
                <hr class="flex-grow border-t border-blue-300 ml-4 opacity-100" />
            </div>

            <!-- Masonry layout with swipe support -->
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-4" @touchstart="startX = $event.touches[0].clientX"
                @touchend="handleSwipe($event)">
                <div v-for="(project, index) in paginatedProjects" :key="index"
                    class="flip-box relative mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md group"
                    :class="[[0, 3, 4].includes(index) ? 'h-[360px] sm:h-[400px]' : 'h-[240px] sm:h-[280px]']">
                    <div class="flip-box-inner">
                        <div class="relative flip-box-front w-full h-full">
                            <img :src="project.imageUrl" :alt="project.title"
                                class="absolute inset-0 w-full h-full object-cover transform duration-500 group-hover:scale-110" />
                        </div>
                        <div class="flip-box-back p-6 flex items-center justify-center text-sm">
                            <p class="text-white text-center">
                                {{ project.flipContent }}
                            </p>
                        </div>
                    </div>

                    <!-- Title and Arrow -->
                    <div
                        class="project-cart-body absolute inset-x-0 bottom-0 z-20 px-4 py-3 flex justify-between items-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <span class="text-white font-medium ">{{ project.title }}</span>
                        <a href="#" class="text-white text-xl">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Pagination Dots -->
            <div class="flex justify-center mt-8 space-x-2">
                <button v-for="n in totalPages" :key="n" @click="goToPage(n - 1)" :class="[
                    'w-3 h-3 rounded-full transition-all duration-300',
                    currentPage === n - 1 ? 'bg-blue-700 scale-110' : 'bg-gray-400'
                ]"></button>
            </div>
        </div>
    </section>

    <!-- PROJECTS END -->

    <!-- FACILITIES START -->
    <section class="facilities max-w-10xl lg:mx-[4rem] px-2 lg:px-12 text-center my-10 overflow-hidden">
        <div class="flex justify-between items-center mb-[5rem]" data-aos="fade-right">
            <h2 class=" font-extrabold text-primarycolor">Facilities</h2>
            <hr class="flex-grow border-t border-blue-800 ml-4 opacity-100" />
        </div>

        <div class="relative">
            <button @click="prevSlide" class="absolute top-1/2 -translate-y-1/2 z-10 mr-2 left-0">
                <i
                    class="bi bi-arrow-left text-sm md:text-xl !border border-textdarkgray pl-2 pr-3 pb-2 pt-2 rounded-full bg-white text-textdarkgray"></i>
            </button>

            <div ref="slider" class="flex px-10 transition-transform duration-300 ease-in-out">
                <div v-for="(card, index) in facilitiescardsData" :key="index"
                    class="mr-2 ml-2 bg-[#F4F4F4] p-6 w-62.5 rounded-xl text-left space-y-3 shrink-0 overflow-hidden facility-card">
                    <div class="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                        <img :src="card.icon" alt="" />
                    </div>
                    <h3 class="text-textdarkgray title">{{ card.title }}</h3>
                    <p class="text-sm text-textdarkgray line-clamp-4">
                        {{ card.description }}
                    </p>
                    <a href="#" class="!text-primarycolor text-sm font-medium inline-flex items-center gap-1">
                        View all <i class="bi bi-arrow-right ml-1"></i>
                    </a>
                </div>
            </div>

            <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 ml-2">
                <i
                    class="bi bi-arrow-right text-sm md:text-xl !border border-textdarkgray pl-2 pr-3 pb-2 pt-2 rounded-full bg-white text-textdarkgray"></i>
            </button>
        </div>
    </section>

    <!-- FACILITIES END -->

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
import { ref, onMounted, computed, nextTick } from "vue";
import {
    innerpageprojects,
    facilitiescardsData,
    DivisionStrength,
    menuItems,
    topbarcontactinfo,
    innerpagebannerdata,
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

// Refs
const slider = ref(null);
const isSearchOpen = ref(false);
const ismobileDrawerOpen = ref(false);
const isdesktopdrawerOpen = ref(false);

// Toggle dropdown for desktop navbar
const toggleDropdown = (index, isOpen) => {
    if (menuItems.value?.[index]) {
        menuItems.value[index].isOpen = isOpen;
    }
};

// Slick carousel initialization
onMounted(async () => {
    await nextTick(); // ensure DOM is mounted
    if (slider.value) {
        $(slider.value).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000, // smoother timing
            responsive: [
                {
                    breakpoint: 1400,
                    settings: { slidesToShow: 3 },
                },
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
    }
});

// Search toggle
const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
};

// Pagination logic for innerpageprojects
const currentPage = ref(0);
const itemsPerPage = 6;
const startX = ref(0);

const totalPages = computed(() =>
    Math.ceil(innerpageprojects.value.length / itemsPerPage)
);

const paginatedProjects = computed(() => {
    const start = currentPage.value * itemsPerPage;
    return innerpageprojects.value.slice(start, start + itemsPerPage);
});

function goToPage(index) {
    currentPage.value = index;
}
function nextPage() {
    if (currentPage.value < totalPages.value - 1) currentPage.value++;
}
function prevPage() {
    if (currentPage.value > 0) currentPage.value--;
}
function handleSwipe(e) {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX.value - endX;
    if (deltaX > 50) nextPage();
    else if (deltaX < -50) prevPage();
}


// Manual carousel controls (if needed)
const nextSlide = () => $(slider.value).slick("slickNext");
const prevSlide = () => $(slider.value).slick("slickPrev");
</script>


<style scoped>
.flip-box {
    background-color: transparent;

    perspective: 1000px;
}

.flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front,
.flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-box-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-box-back {
    background-color: #1E398D;
    border: 3px solid #ffffff;
    color: white;
    transform: rotateY(180deg);
}

.flip-box:hover .project-cart-body {
    display: none;
}
</style>
