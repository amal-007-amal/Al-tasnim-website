<template>
  <!-- BANNER START -->
  <section class="text-textcolor overflow-visible lg:overflow-visible m-0">
    <div class="relative lg:relative">
      <!-- DESKTOP NAVBAR -->
      <div class="hidden lg:block absolute main-navbar w-full z-40 top-0 left-0 mb-8">
        <nav
          class="relative max-w-[90rem] mx-auto flex justify-between items-center py-4 w-full pl-4 pr-0 sm:px-12 z-30 top-8        xl:pl-[7rem] xl:pr-[6rem]">
          <!-- Logo -->
          <div class="text-2xl font-bold flex-shrink-0">
            <router-link :to="{ name: 'HomePage' }" class="hidden md:block logo">
              <img src="@/assets/home/al-tasnim-logo.png" alt="Logo" class="mb-4 ml-2" />
            </router-link>
          </div>


          <!-- Contact Info & Social -->
          <div
            class="absolute top-0 right-0 flex items-center text-sm px-4 sm:px-6 lg:px-12 lg:pr-8 z-10 pr-3 xl:pr-[6rem]">
            <div class="items-center gap-4 z-10 flex align-center text-center">
              <a :href="topbarcontactinfo.hqPhoneHref" class="font-light text-white ">
                <span class="pr-2"><i class="bi bi-telephone-fill"></i></span>
                HQ: <span class="underline">{{ topbarcontactinfo.hqPhone }}</span>
              </a>
              <span class="mx-2">|</span>
              <a :href="topbarcontactinfo.salesPhoneHref" class="text-textcolor font-light ">
                Sales Enquiry: <span class="underline">{{ topbarcontactinfo.salesPhone }}</span>
              </a>
              <div class="social-media flex gap-2 ml-4">
                <a v-for="(link, index) in topbarcontactinfo.socialLinks" :key="index" :href="link.url">
                  <i :class="`bi ${link.icon}`"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Main Menu -->
          <div class="main-menu flex items-center space-x-12 ml-auto border-t border-white pt-6 mt-3">
            <ul class="flex space-x-8 font-semibold text-white mb-0 -ml-8">
              <li v-for="(item, index) in menuItems" :key="index" class="relative"
                @mouseenter="item.subItems ? toggleDropdown(index, true) : null"
                @mouseleave="item.subItems ? toggleDropdown(index, false) : null">
                <a href="#" class="flex items-center">
                  {{ item.name }}
                  <i v-if="item.subItems" class="bi bi-chevron-down ml-1 transition-transform duration-300"
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
                  <div :class="{ 'popup-search': true, 'open': isSearchOpen }" class="popup-search-container">
                    <div class="relative w-64">
                      <input type="text"
                        class="bg-primarycolor pl-10 pr-4 py-2 rounded w-full text-white placeholder-white focus:outline-none border-b-2 border-text-textgray"
                        placeholder="Search..." />
                      <!-- Search Icon -->
                      <svg
                        class="absolute left-3 top-1/2 -translate-y-1/2 transform w-5 h-5 text-white pointer-events-none"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>



              <button class="text-white z-50" @click="isdesktopdrawerOpen = true" type="button">
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
        <div
          class="fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 bg-textcolor p-4 shadow-lg transition-transform duration-300 ease-in-out pointer-events-auto"
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

        <!-- Mobile Drawer -->
        <div
          class="fixed top-0 left-0 h-full w-full sm:w-2/3 md:w-1/2 bg-textcolor p-4 shadow-lg transition-transform duration-300 ease-in-out pointer-events-auto"
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
              <svg
                class="absolute left-3 top-1/2 -translate-y-1/2 transform w-5 h-5 text-primarycolor pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>

            <ul>
              <li v-for="(item, index) in mobileMenuItems" :key="index">
                <div v-if="item.subItems && item.subItems.length > 0" @click="item.isOpen = !item.isOpen"
                  class="flex justify-between items-center py-2 cursor-pointer text-primarycolor mr-3">
                  {{ item.name }}
                  <i :class="item.isOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                </div>

                <a v-else :href="item.link" class="text-primarycolor block py-2">
                  {{ item.name }}
                </a>

                <!-- Sub Items -->
                <ul v-show="item.isOpen" v-if="item.subItems && item.subItems.length > 0" class="pl-4 text-sm">
                  <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                    <router-link v-if="subItem.isRouterLink" :to="subItem.link" class="text-black block py-1">
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
                <a :href="`tel:${info.phone}`" class="font-light text-primarycolor text-sm inline-block"
                  :class="{ 'mt-4': index > 0 }">
                  <span class="pr-2" v-if="index === 0">
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                  {{ info.label }}: <span class="underline">{{ info.display }}</span>
                </a>
                <span v-if="index === 0" class="mx-2">|</span>
              </template>

              <div class="social-media flex justify-start gap-6 mt-6">
                <a v-for="(item, index) in mobilesocialLinks" :key="index" :href="item.link" :aria-label="item.name">
                  <i :class="['bi', item.icon]"></i>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

      <!-- BACKGROUND IMAGE OVERLAY -->


      <div id="animation-carousel" class="relative w-full h-[100vh] rounded-none" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg h-[100vh]">
          <div v-for="(slide, index) in slides" :key="index"
            class="main-banner-slider absolute inset-0 transition-opacity duration-500 "
            :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 via-15% to-transparent z-10"></div>

            <img :src="slide.image" class="absolute block w-full h-screen object-cover inset-0 z-10 zoom-in-zoom-out"
              alt="..." />
            <div class="banner-slider absolute inset-0 flex items-center z-20">
              <div class="max-w-10xl lg:mx-[4rem] px-2 sm:px-6 lg:px-20">
                <h1 class=" text-textcolor bg-[#0a27561a] p-3 pb-0 lg:w-full rounded-lg">
                  {{ slide.title }}
                </h1>
                <p class="mb-6 bg-[#0a27561a] p-3 lg:w-full">
                  {{ slide.subtitle }}
                </p>
              </div>
            </div>
            <div class="absolute inset-0 flex items-center z-20">
              <div id="wrapper" class="mx-[0rem] lg:mx-[4rem] px-4 sm:px-6 lg:px-20">
                <a class="btn light" href="#">
                  <span class="text">Learn More</span>
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
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

        <div class="sliding-button max-w-7xl mx-auto relative justify-end right-4 z-30 flex space-x-2 bottom-[110px]">
          <button @click="prevSlide" type="button"
            class="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-white/50 outline-none focus:outline-none">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
          </button>

          <button @click="nextSlide" type="button"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 outline-none focus:outline-none">
            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>



    </div>
  </section>



  <!-- BANNER END -->

  <!-- WHO WE ARE START -->
  <section ref="counterSection" class="who-we-are py-16">
    <div class="max-w-10xl lg:mx-[4rem] px-2 lg:px-12 text-center">
      <div class="flex flex-col md:flex-row md:items-center md:justify-around">
        <div class="mb-8 md:mb-0 w-full md:w-[26%] text-center md:text-right">
          <img src="@/assets/home/who-we-are.png" alt="Royal Opera House Muscat"
            class="w-full xl:w-96 rounded-lg inline-block  md:w-auto" />
        </div>
        <div class="w-full md:w-[66%] xl:mr-[74px] md:text-left">
          <div data-aos="fade-right">
            <h2 class="main-heading text-primarycolor">Who we are</h2>
            <p class="text-gray who-we-are-sub font-light mb-2">
              Safety, quality and craftsmanship
            </p>
          </div>

          <p class="text-gray-600 mb-6 border-b border-[#A7CBF1] pb-8">
            With over 5 decades of experience Al Tasnim is the leader in Oman's
            Construction Industry.
          </p>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center md:text-left">
            <div class="flex flex-col items-center md:items-start border-r border-[#A7CBF1] pr-4">
              <div class="w-16 h-16 rounded-full bg-orange-500 text-textcolor flex items-center justify-center mb-2">
                <img src="@/assets/home/who-we-are-experience-logo.png" alt="Experience" class="h-8" />
              </div>
              <div data-aos="fade-up">
                <h3>
                  <span class="text-textgray"><b>{{ count1 }}+</b></span>
                </h3>
                <p class="text-sm text-left text-gray-500">Years of Experience</p>
              </div>

            </div>
            <div class="flex flex-col items-center md:items-start border-r border-[#A7CBF1] pr-4">
              <div class="w-16 h-16 rounded-full bg-orange-500 text-textcolor flex items-center justify-center mb-2">
                <img src="@/assets/home/who-we-are-employees-logo.png" alt="Employees" class="h-8" />
              </div>

              <div data-aos="fade-up">
                <h3>
                  <span class="text-textgray"><b>{{ count2 }}+</b></span>
                </h3>
                <p class="text-sm text-left text-gray-500">Employees</p>

              </div>
            </div>
            <div class="flex flex-col items-center md:items-start border-r border-[#A7CBF1] pr-4">
              <div class="w-16 h-16 rounded-full bg-orange-500 text-textcolor flex items-center justify-center mb-2">
                <img src="@/assets/home/who-we-are-project-logo.png" alt="Projects" class="h-8" />
              </div>
              <div data-aos="fade-up">
                <h3>
                  <span class="text-textgray"><b>{{ count3 }}+</b></span>
                </h3>
                <p class="text-sm text-left text-gray-500">Completed Projects</p>
              </div>
            </div>
            <div class="flex flex-col items-center md:items-start border-r border-[#A7CBF1] pr-4">
              <div class="w-16 h-16 rounded-full bg-orange-500 text-textcolor flex items-center justify-center mb-2">
                <img src="@/assets/home/who-we-are-location-logo.png" alt="Locations" class="h-8" />
              </div>
              <div data-aos="fade-up">
                <h3>
                  <span class="text-textgray"><b>{{ count4 }}</b></span>
                </h3>
                <p class="text-sm text-left text-gray-500">Asset across Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- WHO WE ARE END -->

  <!-- TIMELINE SLIDER START -->


  <div class="timeline-slider wf-section">
    <div class="max-w-10xl xl:mx-[4rem] px-2 sm:px-6 lg:px-12">
      <div class="flex items-center justify-center mt-14 mb-8 md:ml-4 md:mr-[26px]" data-aos="fade-right">
        <h2 class="main-heading text-white">Our Legacy</h2>
        <hr class="flex-grow border-t border-gray-300 ml-4 opacity-100" />
      </div>
      <Carousel v-model="stateSlide" ref="carouselRef" :items-to-show="1" :wrap-around="true" :autoplay="true"
        :autoplayTimeout="4000" :transition="2500" :mouse-drag="true" :pauseAutoplayOnHover="true" :wheelControl="true"
        class="timeline-frame max-w-full px-2 sm:px-4">
        <Slide v-for="(item, index) in timelinecard" :key="index">
          <div class="relative timelinesub-card">
            <div class="timeline-sec block relative">
              <a href="#" class="block">
                <img :src="item.image" :alt="item.title"
                  class="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-lg mx-auto"
                  loading="lazy" />
                <div class="overlay-content absolute inset-0 rounded-lg pr-4 pt-6 text-white">
                  <div class="absolute bottom-4 right-4">
                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" stroke-width="2"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <!-- Content block -->
            <div
              class="timeline-content w-full cursor-pointer bg-white rounded m-2 transition-all duration-300 ease-in-out hover:bg-primarycolor hover:shadow-lg hover:text-white group p-4 sm:p-6">
              <h3 class="mb-2 text-base sm:text-lg text-primarycolor group-hover:text-white">{{ item.overlayTitle }}
              </h3>
              <p
                class="text-sm sm:text-base text-primarycolor font-[400] border-l-2 border-orange-400 pl-3 pr-3 mb-6 group-hover:text-white">
                {{ item.overlayparagraph }}
              </p>
            </div>

            <!-- Arrow Button -->
            <div class="view-btn absolute bottom-4 right-4">
              <svg class="w-6 h-6 sm:w-8 sm:h-8 text-primarycolor group-hover:text-white transition-colors duration-300"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Slide>
      </Carousel>

      <div class="relative flex flex-wrap justify-between items-center mt-6 px-2 sm:px-6 gap-y-4">
        <div class="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 z-0"></div>

        <div v-for="(yearItem, index) in timelineYears" :key="index"
          class="relative z-10 text-center flex flex-col items-center w-[14%] sm:w-auto"
          @mouseenter="hoveredYearIndex = index" @mouseleave="hoveredYearIndex = null">
          <div class="w-4 h-4 rounded-full mx-2 transition-all duration-300 border"
            :class="index === stateSlide ? 'bg-orange-600 scale-125' : 'bg-white border-gray-400'"></div>

          <p class="text-xs sm:text-sm mt-2 transition-colors duration-300"
            :class="index === stateSlide ? 'text-orange-600 font-bold' : 'text-white'">
            {{ yearItem.year }}
          </p>

          <!-- Preview Image on Hover -->
          <div v-if="hoveredYearIndex === index"
            class="absolute -top-24 sm:-top-28 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg z-20 transition duration-300">
            <img :src="timelinecard[index]?.image" alt="Preview"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300" />
          </div>
        </div>
      </div>



      <div class="flex justify-center gap-3 sm:gap-4 mb-6 px-2">
        <button @click="carouselRef?.prev()" class="text-white bg-primarycolor px-3 py-2 rounded text-sm sm:text-base">
          Prev
        </button>
        <button @click="carouselRef?.next()" class="text-white bg-primarycolor px-3 py-2 rounded text-sm sm:text-base">
          Next
        </button>
      </div>

    </div>
  </div>





  <!-- TIMELINE SLIDER END -->

  <!-- OUR BUSINESSES START -->
  <section class="our-business max-w-10xl lg:mx-[4rem] px-2 sm:px-6 lg:px-12">
    <div class="flex items-center justify-center mt-8 mb-10" data-aos="fade-right">
      <h2 class="main-heading text-primarycolor">Our Businesses</h2>
      <hr class="flex-grow border-t border-blue-300 ml-4 opacity-100" />
    </div>



    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
      <div v-for="(business, index) in businesses" :key="index"
        class="relative group overflow-hidden rounded-xl cursor-pointer business-card transition duration-500 hovereffect">
        <!-- Image -->
        <img :src="business.image" :alt="business.title"
          class="w-full object-cover transform duration-500 group-hover:scale-110 img-responsive" />

        <!-- Animated Text Overlay -->
        <div
          class="absolute overlay inset-0 flex flex-col items-center justify-end p-4 text-center bg-black/30 group-hover:bg-primarycolor/90 text-textcolor transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 group-hover:justify-center group-hover:opacity-100">
          <h3 class="font-bold text-textcolor">{{ business.title }}</h3>
          <router-link :to="{
            name: business.routeName,
            params: { title: business.title },
          }" class="text-sm mt-2 flex items-center gap-1 hover:underline text-textcolor">
            Know more <i class="bi bi-arrow-right ml-3"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR BUSINESSES END -->

  <!-- OUR PROJECTS START -->
  <section class="py-16 bg-gray-100 our-projects">
    <div class="max-w-10xl lg:mx-[4rem] px-2 sm:px-6 lg:px-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="main-heading text-textcolor" data-aos="fade-right">Our projects</h2>
        <hr class="flex-grow border-t border-blue-300 ml-4 mr-5 opacity-100" />
        <a href="#" class="text-textcolor hover:underline flex items-center gap-1 text-sm">
          View all <i class="bi bi-arrow-right ml-1"></i>
        </a>
      </div>

      <!-- Flex container for equal height columns -->
      <div class="flex flex-col lg:flex-row gap-2">
        <!-- Left Grid (3 stacked projects) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
          <div v-for="(project, index) in projects" :key="index" :class="index === 2 ? 'lg:col-span-2' : ''"
            class="hover-card relative rounded-lg overflow-hidden shadow-md group h-64">
            <div class="relative w-full h-full">
              <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#1f1f1f56] via-25% to-transparent z-10">
              </div>
              <img :src="project.image" :alt="project.title"
                class="absolute inset-0 w-full h-full object-cover transform duration-500 group-hover:scale-110 z-0" />
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div class="text-white text-center relative w-full px-4">
                  <!-- Top Line -->
                  <div class="absolute top-0 left-10 right-10 border-t border-white pb-2"></div>

                  <!-- Text -->
                  <h3 class="text-xl font-bold py-4 text-white">
                    {{ project.title }}
                  </h3>
                  <a href="" class="text-sm mb-4">View Details</a>

                  <!-- Bottom Line -->
                  <div class="absolute bottom-0 left-10 right-10 border-t border-white"></div>
                </div>
              </div>
            </div>

            <div
              class="image-card-content absolute inset-0 bg-black/20 z-10 flex flex-col justify-end = text-center px-2 py-8">
              <h4 class="text-textcolor text-xl font-semibold mb-2 flex justify-between items-center px-0 gap-0">
                <span class="flex-1 text-left text-sm">{{
                  project.title
                }}</span>
                <a href="#" class="text-sm text-textcolor hover:underline flex items-center gap-1">
                  <i class="bi bi-arrow-right text-3xl"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>

        <!-- Right Block -->
        <div class="relative hover-card rounded-lg overflow-hidden shadow-md group flex-1">
          <div class="relative h-full">
            <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#1f1f1f56] via-25% to-transparent z-10">
            </div>
            <img src="@/assets/home/ROYAL-OPERA-HOUSE.png"
              class="absolute inset-0 w-full h-full object-cover transform duration-500 group-hover:scale-110 z-0" />
            <div class="absolute inset-0 bg-black/20 z-10 flex flex-col justify-end text-center px-2 py-8">
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div class="text-white text-center relative w-full px-4">
                  <!-- Top Line -->
                  <div class="absolute top-0 left-10 right-10 border-t border-white"></div>

                  <!-- Text -->
                  <h3 class="text-xl font-bold py-4 text-white">
                    Royal Opera House Muscat
                  </h3>

                  <a href="" class="text-sm mb-4">View Details</a>

                  <!-- Bottom Line -->
                  <div class="absolute bottom-0 left-10 right-10 border-t border-white"></div>
                </div>
              </div>
              <h4 class="image-card-content text-textcolor text-xl font-semibold mb-2 flex justify-between px-0 gap-0">
                <span class="flex-1 text-left text-xs">Royal Opera House Muscat</span>
                <a href="#" class="text-sm text-textcolor hover:underline flex items-center gap-1">
                  <i class="bi bi-arrow-right text-3xl"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR PROJECT END  -->

  <!-- NEWS AND EVENTS START -->

  <section class="relative overflow-hidden">
    <div class="max-w-10xl lg:mx-[4rem] px-2 sm:px-6 lg:px-12 relative z-50">
      <div class="main-heading flex justify-between items-center mb-8" data-aos="fade-right">
        <h2 class="text-primarycolor">News & Events</h2>
        <hr class="flex-grow border-t border-blue-300 ml-4 opacity-100" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_2fr] gap-8 mb-16">
        <!-- Dynamic Cards -->
        <div v-for="(item, index) in newsevents" :key="index"
          class="group relative min-h-64 rounded-xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#1f1f1f56] via-25% to-transparent z-10">
          </div>
          <img :src="item.image" :alt="item.title"
            class="absolute inset-0 w-full h-full object-cover transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/50"></div>

          <div class="absolute bottom-0 p-6 text-textcolor z-10">
            <h3 class="text-lg font-semibold text-textcolor">{{ item.title }}</h3>
            <p class="text-sm mt-2">{{ item.paragraph }}</p>
            <div class="flex justify-between items-center mt-4 text-xs">
              <span>Learn More <span class="ml-2"><i class="bi bi-arrow-right"></i></span></span>
              <span>{{ item.date }}</span>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-bg-blue-100/25"></div>
        </div>

        <!-- Static Social Follow Section -->
        <div v-for="(item, index) in followUs" :key="'follow-us-' + index"
          class="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4">
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-semibold text-gray-700">{{ item.title }}</h3>
            <a :href="item.instagramLink" target="_blank" class="text-black text-2xl">
              <i class="bi bi-instagram"></i>
            </a>
          </div>

          <div class="flex items-center gap-3">
            <img :src="item.profileImage" alt="Profile" class="w-10 h-10 rounded-full" />
            <div>
              <p class="text-sm font-bold">{{ item.profileName }}</p>
              <p class="text-xs text-gray-400">{{ item.profileTime }}</p>
            </div>
          </div>

          <img :src="item.postImage" alt="Instagram post" class="rounded-lg flex-grow object-cover h-[220px]" />
          <p class="text-xs text-gray-500">{{ item.description }}</p>
        </div>


      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-1/3 bg-blue-900"></div>
  </section>

  <!-- NEWS AND EVENTS END -->

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
          <div class="flex items-start gap-2 w-[249px]">
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
import { onMounted, onBeforeUnmount } from "vue";
import {
  slides,
  currentSlide,
  hoveredYearIndex,
  stateSlide,
  nextSlide,
  prevSlide,
  businesses,
  projects,
  timelinecard,
  timelineYears,
  footerData,
  useCounterAnimation,
  startAutoplay,
  newsevents,
  followUs,
  topbarcontactinfo,
  menuItems,
  mobileMenuItems,
  mobilecontactInfo,
  mobilesocialLinks
} from "@/script.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'

const carouselRef = ref(null)


// Counter values
const { count1, count2, count3, count4, counterSection } = useCounterAnimation();

// UI state
const isDrawerOpen = ref(false);
const isSearchOpen = ref(false);
const ismobileDrawerOpen = ref(false);
const isdesktopdrawerOpen = ref(false);
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
const toggleDropdown = (index, isOpen) => {
  if (menuItems.value?.[index]) {
    menuItems.value[index].isOpen = isOpen;
  }
};
const isTransitioning = ref(false);



// Banner auto-slide
let bannerAutoSlideInterval;

const stopBannerAutoSlide = () => {
  clearInterval(bannerAutoSlideInterval);
};

// Optional: handle hover
const pauseBannerSlider = () => stopBannerAutoSlide();

// Initialize Slick slider
// const initSlider = () => {
//   $(".timeline-frame").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     asNavFor: ".timeline-nav",
//     responsive: [
//       {
//         breakpoint: 1400,
//         settings: { slidesToShow: 1 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   });

//   // Timeline nav slick
//   $(".timeline-nav").slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     asNavFor: ".timeline-frame",
//     dots: false,
//     focusOnSelect: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 4 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 2 },
//       },
//     ],
//   });
// };

// Lifecycle
onMounted(() => {
  // initSlider();

  window.scrollTo(0, 0);
});

onBeforeUnmount(() => {
  stopBannerAutoSlide();
  // $(".timeline-frame").slick("unslick");
  // $(".timeline-nav").slick("unslick");
});

const dropdowns = ref({
  business: false,
  about: false,
  newsroom: false,
  community: false,
});
</script>


<style scoped></style>
