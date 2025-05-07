// src/script.js

import { ref, onMounted } from "vue";
import "slick-carousel";
import $ from "jquery";

// ==============================
// HERO BANNER SLIDER
// ==============================


export const slides = ref([{
    title: "Quality You Can Build On",
    subtitle: "Constructions & Mining",
    image: "/src/assets/home/banner-img-1.png",
},
{
    title: "Engineering Excellence",
    subtitle: "Manufacturing & Fabrication",
    image: "/src/assets/home/engineers-working.jpg",
},
]);
export const stateSlide = ref(0);
export const hoveredYearIndex = ref(null)

// Function to go to the next slide
export const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

// Function to go to the previous slide
export const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// Autoplay interval
let autoplayInterval;

export const stopAutoplay = () => {
    clearInterval(autoplayInterval);
};

export const startAutoplay = () => {
    // Start the interval to change slides every 1000ms (or any time interval you want)
    autoplayInterval = setInterval(() => {
        nextSlide(); // This updates currentSlide
    }, 1000); // 1 second is used as an example; you can adjust this to 5000ms (5 seconds)
};

// ==============================
// WHO WE ARE SECTION COUNTER
// ==============================

export const count1 = ref(0);
export const count2 = ref(0);
export const count3 = ref(0);
export const count4 = ref(0);

export const target1 = 50;
export const target2 = 25000;
export const target3 = 500;
export const target4 = 56;

export const animationDuration = 2000;

const animateCount = (element, target, duration) => {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));

    const updateCount = () => {
        start += increment;
        if (start > target) {
            element.value = target;
        } else {
            element.value = start;
            requestAnimationFrame(updateCount);
        }
    };

    requestAnimationFrame(updateCount);
};

export const useCounterAnimation = () => {
    const counterSection = ref(null);
    const count1 = ref(0);
    const count2 = ref(0);
    const count3 = ref(0);
    const count4 = ref(0);

    const target1 = 1500;
    const target2 = 2500;
    const target3 = 3500;
    const target4 = 4500;

    const animationDuration = 4000;

    let hasAnimated = false;

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    function animateCount(refVar, target, duration) {
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            refVar.value = Math.floor(target * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                refVar.value = target;
            }
        }

        requestAnimationFrame(update);
    }

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    animateCount(count1, target1, animationDuration);
                    animateCount(count2, target2, animationDuration);
                    animateCount(count3, target3, animationDuration);
                    animateCount(count4, target4, animationDuration);
                    hasAnimated = true;
                    observer.disconnect(); // Stop observing after animation starts
                }
            }, {
            threshold: 0.25,
        }
        );

        if (counterSection.value) {
            observer.observe(counterSection.value);
        }
    });

    return {
        count1,
        count2,
        count3,
        count4,
        counterSection,
    };
};

// ==============================
// BUSINESS SECTION
// ==============================

export const businesses = [{
    title: "Civil Construction & MEP",
    image: "/src/assets/home/Civil-Construction.png",
    routeName: "BusinessPage",
},
{
    title: "Mechanical Electrical & Plumbing",
    image: "/src/assets/home/Mechanical-Electrical.png",
},
{
    title: "Oil & Gas",
    image: "/src/assets/home/gas-oil.png",
},
{
    title: "Roads & Infrastructure",
    image: "/src/assets/home/Roads-Infrastructure.png",
},
{
    title: "Mining & Quarrying",
    image: "/src/assets/home/Mining-Quarrying.png",
},
{
    title: "Marble & Industrial Minerals",
    image: "/src/assets/home/Marble-Industrial.png",
},
{
    title: "Manufacturing & Fabrication",
    image: "/src/assets/home/Manufacturing-Fabrication.png",
},
{
    title: "Dry Mix & Crusher",
    image: "/src/assets/home/DryMix-Crusher.png",
},
{
    title: "Aluminium & Glass",
    image: "/src/assets/home/Aluminium-Glass.png",
},
{
    title: "Carpentry Interior Design & Fitout",
    image: "/src/assets/home/Carpentry-Interior.png",
},
{
    title: "GRC & Marble",
    image: "/src/assets/home/GRC-Marble.png",
},
{
    title: "Product Dealership & Trading",
    image: "/src/assets/home/Product-Dealership.png",
},
{
    title: "Catering and Facility Management",
    image: "/src/assets/home/Catering-Facility.png",
},
];

// ==============================
// HOMEPAGE PROJECT
// ==============================

export const projects = ref([{
    title: "Sultan Qaboos Grand Mosque Muscat",
    image: "/src/assets/home/GRAND-MOSQUE.png",
},
{
    title: "Al Mouj Muscat",
    image: "/src/assets/home/muscut.png",
},
{
    title: "Omantel Head Quarters Building Muscat",
    image: "/src/assets/home/omantal.png",
},
]);

// ==============================
// LEGACY PART
// ==============================

// export const legacy = ref([{
//         image: "/assets/home/muscut.png",
//         title: "Frame Title 1",
//         description: "Frame description 1",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/muscut.png",
//     },
//     {
//         title: "Engineering Excellence",
//         subtitle: "Manufacturing & Fabrication",
//         image: "/assets/home/omantal.png",
//     },
// ]);

// Timeline cards data

export const timelinecard = [{
    image: "./src/assets/home/palace.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and a clear vision, theWith determination and a clear vision, the company expa company expaWith determination and a clear vision, the company expanded...",
    title: "2021 — Growing Up",
    description: "Some description With determination With determination and a clear vision, the company expa and a clear vision, the company expaabout this year...",
    link: "#",
    year: "1942"
},
{
    image: "./src/assets/home/beginning.png",
    overlayTitle: "1942 – The Beginning",
    overlayparagraph: "With determination and a clear vision, the company expanded beyond its modest roots, steadily growing in size and capabiliWith determination and a clear vision, the company expaties.",
    title: "2020 — The Beginning",
    description: "Some description about this year...",
    link: "#",
    year: "2021"
},
{
    image: "./src/assets/home/beginning.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and a clear vision, the companyWith determination and a clear vision, the company expa expanded...",
    title: "2021 — Growing Up",
    description: "Some description about this year...",
    link: "#",
    year: "2022"
},
{
    image: "./src/assets/home/beginning.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determinaWith determination and a clear vision, the company expaWith determination and a clear vision, the company expation and a clear vision, the company expanded...",
    title: "2021 — Growing Up",
    description: "Some description about thWith determination and a clear vision, the company expaWith determination and a clear vision, the company expais year...",
    link: "#",
    year: "2023"
},
{
    image: "./src/assets/home/palace.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and a clear vision, the company expanded...",
    title: "2021 — Growing Up",
    description: "Some description about this year...",
    link: "#",
    year: "2024"
},
{
    image: "./src/assets/home/palace.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and With determination and a clear vision, the company expaWith determination and a clear vision, the company expaa clear vision, the company expanded...",
    title: "2021 — Growing Up",
    description: "Some description about this yeaWith determination and a clear vision, the company expaWith determination and a clear vision, the company expar...",
    link: "#",
    year: "2024"
},
{
    image: "./src/assets/home/palace.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and a clear vision, the With determination and a clear vision, the company expaWith determination and a clear vision, the company expacompany expanded...",
    title: "2021 — Growing Up",
    description: "Some description about this yeaWith determination and a clear vision, the company expaWith determination and a clear vision, the company expar...",
    link: "#",
    year: "2024"
},
{
    image: "./src/assets/home/palace.png",
    overlayTitle: "Early Growth & Expansion",
    overlayparagraph: "With determination and a clear visWith determination and a clear vision, the company expaWith determination and a clear vision, the company expaion, the company expanded...",
    title: "2021 — Growing Up",
    description: "Some description about this yWith determination and a clear vision, the company expaWith determination and a clear vision, the company expaear...",
    link: "#",
    year: "2024"
},
];

// Timeline years data
export const timelineYears = ref([
    { year: "1942" },
    { year: "2021" },
    { year: "2022" },
    { year: "2023" },
    { year: "2024" },
    { year: "2024" },
    { year: "2024" },
]);
export const currentSlide = ref(0);
// Slider initialization function
export function initTimelineSlider(setCurrentSlide) {
    $(".timeline-frame").on(
        "init reInit afterChange",
        function (event, slick, currentSlide) {
            setCurrentSlide(currentSlide || 0);
        }
    );
}


// ==============================
// NEWS AND EVENTS
// ==============================

export const newsevents = ref([{
    image: "./src/assets/home/excavator-action.png",
    title: "Future of Work",
    paragraph: "Majority of people will work in jobs that don’t exist today.",
    date: "02 May",

},
{
    image: "./src/assets/home/high-rise.png",
    title: "Future of Work",
    paragraph: "Majority of people will work in jobs that don’t exist today.",
    date: "02 May",
}
])


export const followUs = ref([{
    title: "Follow us",
    profileName: "Al Tasnim Group",
    profileTime: "52 minutes ago",
    profileImage: "./src/assets/home/follow-us.png",
    postImage: "./src/assets/home/instagram.png",
    description: "An evening. Though there cries for men, it molded to the best that could be possible bad time...",
    instagramLink: "https://www.instagram.com/",
}])


// ==============================
// INNERPAGE PROJECTS
// ==============================

export const innerpageprojects = ref([{
    title: "Royal Opera House Muscat",
    imageUrl: "./src/assets/business/Royal-Opera.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Ameen Mosque Muscat, Oman",
    imageUrl: "./src/assets/business/Al-Ameen.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: " National Bank of Oman Head Office Muscat",
    imageUrl: "./src/assets/business/National-Bank.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Ominvest Project Muscat Hills, Oman ",
    imageUrl: "./src/assets/business/Ominvest-Project.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Omantel Head Quarters Building Muscat",
    imageUrl: "./src/assets/business/Omantel-Head.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png", // Replace with your actual image URL
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},
{
    title: "Al Husn Village Roadworks, Oman",
    imageUrl: "./src/assets/business/Al-Husn.png",
    flipContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
},
]);

// ==============================
// FACILITIES PART
// ==============================

export const facilitiescardsData = [{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsumLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsumeholder text commonly used in the graphic, print, and publishing industries for ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    icon: "./src/assets/business/card-icon.png",
    title: "Lorem ipsum is placeholder text",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
];

// ==============================
// DIVISION STRENGTH
// ==============================

export const DivisionStrength = [{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
{
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
},
];

// ==============================
// MENU BAR
// ==============================

export const menuItems = ref([{
    name: "Business",
    isOpen: false,
    subItems: [
        { name: "Business 1", isRouterLink: false },
        { name: "Business 2", isRouterLink: false },
        { name: "Business 3", isRouterLink: false },
    ],
},
{
    name: "About Us",
    isOpen: false,
    subItems: [{
        name: "About us",
        isRouterLink: true,
        link: { name: "AboutusPage" },
    },
    { name: "Leadership", isRouterLink: false },
    { name: "Vision & Mission", isRouterLink: false },
    ],
},
{
    name: "Community",
    isOpen: false,
    subItems: [{
        name: "Community",
        isRouterLink: true,
        link: { name: "CommunityPage" },
    },
    { name: "CSR Activities", isRouterLink: false },
    { name: "Partnerships", isRouterLink: false },
    ],
},
{
    name: "Newsroom",
    isOpen: false,
    subItems: [{
        name: "Newsroom",
        isRouterLink: true,
        link: { name: "NewsRoomPage" },
    },
    { name: "Events", isRouterLink: false },
    { name: "Media Gallery", isRouterLink: false },
    ],
},

{
    name: "Careers",
},
{
    name: "Contact Us",
},
]);

// ==============================
// TOP MENU BAR
// ==============================

export const topbarcontactinfo = ref({
    hqPhone: "+968 2421 4000",
    hqPhoneHref: "tel:+96824214000",
    salesPhone: "+968 2694 6666",
    salesPhoneHref: "tel:+96826946666",
    socialLinks: [
        { icon: "bi-linkedin", url: "#" },
        { icon: "bi-twitter-x", url: "#" },
        { icon: "bi-youtube", url: "#" },
        { icon: "bi-instagram", url: "#" },
    ],
});


// ==============================
// MOBILE MENU BAR
// ==============================

export const mobileMenuItems = ref([{
    name: "Business",
    isOpen: false,
    subItems: [
        { name: "Service 1", link: "#", isRouterLink: false },
        { name: "Service 2", link: "#", isRouterLink: false },
    ],
},
{
    name: "About Us",
    isOpen: false,
    subItems: [
        { name: "Our Story", link: "#", isRouterLink: false },
        { name: "Team", link: "#", isRouterLink: false },
    ],
},
{
    name: "Newsroom",
    isOpen: false,
    subItems: [
        { name: "Press Releases", link: "#", isRouterLink: false },
        { name: "Media Coverage", link: "#", isRouterLink: false },
    ],
},
{
    name: "Community",
    isOpen: false,
    subItems: [
        { name: "CSR", link: "#", isRouterLink: false },
        { name: "Events", link: "#", isRouterLink: false },
    ],
},
{
    name: "Career",
    isOpen: false,
    subItems: [],
    link: "#",
    isRouterLink: false,
},
{
    name: "Contact Us",
    isOpen: false,
    subItems: [],
    link: "#",
    isRouterLink: false,
},
]);

export const mobilecontactInfo = ref([{
    label: "HQ",
    phone: "+96824214000",
    display: "+968 2421 4000",
},
{
    label: "Sales Enquiry",
    phone: "+96826946666",
    display: "+968 2694 6666",
},
]);

export const mobilesocialLinks = ref([
    { name: "LinkedIn", icon: "bi-linkedin", link: "#" },
    { name: "Twitter", icon: "bi-twitter-x", link: "#" },
    { name: "YouTube", icon: "bi-youtube", link: "#" },
    { name: "Instagram", icon: "bi-instagram", link: "#" },
]);


export const mobiletopbarcontactinfo = ref({
    hqPhone: "+968 2421 4000",
    hqPhoneHref: "tel:+96824214000",
    salesPhone: "+968 2694 6666",
    salesPhoneHref: "tel:+96826946666",
    socialLinks: [
        { icon: "bi-linkedin", url: "#" },
        { icon: "bi-twitter-x", url: "#" },
        { icon: "bi-youtube", url: "#" },
        { icon: "bi-instagram", url: "#" },
    ],
});



// ==============================
// INNERPAGES BANNER
// ==============================

export const innerpagebannerdata = ref({
    business: {
        imageUrl: "./src/assets/business/banner-image.png",
        spantitle: "Civil",
        title: " Construction and MEP",
        subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    },
    community: {
        imageUrl: "./src/assets/community/banner-image.jpg",
        title: "Community",
        subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur ",
    },
    about: {
        imageUrl: "./src/assets/about/banner-image.jpg",
        title: "About Us",
        subtitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur ",
    },
});

// ==============================
// GET IN TOUCH
// ==============================

export const Getintouchinfo = ref({
    title: "Get in Touch",
    address: "Building 484, Way No. 5007, Al Hirmal Street",
    phone: "+968 2694 6666",
    GetPhoneHref: "tel:+96826946666",
    email: "info@altasnim.com",
});

// ==============================
// FOOTER
// ==============================
export const footerData = ref({
    logoUrl: "./src/assets/home/footer-logo.png",
    quickLinks: [
        { name: "Home", url: "#" },
        { name: "Service", url: "#" },
        { name: "Projects", url: "#" },
        { name: "About", url: "#" },
    ],
    helpTitle: "Help",
    helpLinks: [
        { name: "Customer Support", url: "#" },
        { name: "Terms & Conditions", url: "#" },
        { name: "Privacy Policy", url: "#" },
    ],
    followTitle: "Follow Us",
    socialLinks: [
        { platform: "LinkedIn", url: "#", icon: "bi-linkedin" },
        { platform: "Twitter", url: "#", icon: "bi-twitter-x" },
        { platform: "YouTube", url: "#", icon: "bi-youtube" },
        { platform: "Instagram", url: "#", icon: "bi-instagram" },
    ],
    contactTitle: "Contact", // Added dynamic Contact title
    contactInfo: {
        address: "Building 484, Way No. 5007, Al Hirmal Street",
        phone: "+968 2694 6666",
        PhoneHref: "tel:+96826946666",
        email: "info@altasnim.com",
    },
});

// ==============================
// COMMUNITY SECTION
// ==============================

export const countryvalue = ref({
    image: "./src/assets/community/country-value.jpg",
    title: "In-Country Value",
    description: [
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum .",
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    ],
    link: "#",
});

export const corporatecard = ref([{
    image: "./src/assets/community/educator.jpg",
    title: "Education and Holistic Development",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum ",
    link: "#",
},
{
    image: "./src/assets/community/livehoods.jpg",
    title: "Livelihoods and Skill Development",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem placeholder text commonly used in the graphic, print, and publishing industries for Lorem placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum ",
    link: "#",
},
{
    image: "./src/assets/community/rural.jpg",
    title: "Rural Development",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum ",
    link: "#",
},
{
    image: "./src/assets/community/water.jpg",
    title: "Water and Sanitation",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum ",
    link: "#",
},
{
    image: "./src/assets/community/healthcare.jpg",
    title: "Healthcare Development",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for Lorem ipsum ",
    link: "#",
},
]);

// ==============================
// NEWSROOM PAGE
// ==============================

export const newsroombanner = ref({
    image: "./src/assets/leaders/banner-bg-image.jpg",
    boximage: "./src/assets/leaders/banner-image.png",
    name: "Devaki Khimji",
    title: "Managing Director",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",
    buttonText: "Know more",
});

export const team = ref([{
    name: "Dhiren Khimji",
    title: "Executive Director",
    image: "./src/assets/leaders/dhiren.png",
},
{
    name: "Mohit Khimji",
    title: "Executive Director",
    image: "./src/assets/leaders/mohit.png",
},
{
    name: "Farrokh J. Masani",
    title: "Executive Director & CEO",
    image: "./src/assets/leaders/farrok.png",
},
{
    name: "Abdullah Al Jabri",
    title: "Director & Deputy CEO",
    image: "./src/assets/leaders/abdulla.png",
},
{
    name: "Piyush Jain",
    title: "Chief Finance Officer",
    image: "./src/assets/leaders/piyush.png",
},
{
    name: "Upali Marasinghe",
    title: "Director - Commercial & Contracts",
    image: "./src/assets/leaders/upalli.png",
},
]);


export const technologysection = ref({
    technology: [{
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        image: "./src/assets/about/embracing.jpg",
    },
    ],
    healthcare: [{
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forLorem ipsum ",
    },
    {
        image: "./src/assets/about/healthcare.jpg",
    },
    ],

});

export const companyprofile = ref({
    image: "./src/assets/about/company-profile-logo.png",
    title: "Company Profile",
    description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in libero posuere, vestibulum arcu ac, dignissim eros. Nullam sed arcu in justo scelerisque efficitur. Sed ultrices nunc lorem, non rhoncus lacus imperdiet sit amet. Ut urna lacus, interdum eu neque vel, volutpat dignissim orci. Nullam sit amet feugiat turpis, at convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce consectetur faucibus quam. Fusce efficitur fringilla malesuada. Aliquam eros ante, placerat et aliquam at, consectetur egestas dolor. Vestibulum ac neque vehicula, fringilla urna ac, feugiat metus. Sed leo sapien, rhoncus in lorem et, viverra rhoncus lacus. Nulla"
    ],
    link: "#",
    linktext: "Download Company Profile"
});


export const WeAreAltasnim = ref({

    heading: "We are Al-Tasnim",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in libero posuere, vestibulum arcu ac, dignissim eros. Nullam sed arcu in justo scelerisque efficitur. Sed ultrices nunc lorem, non rhoncus lacus imperdiet sit amet. Ut urna lacus, interdum eu neque vel, volutpat dignissim orci. Nullam sit amet feugiat turpis, at convallis justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce consectetur faucibus quam. Fusce efficitur fringilla malesuada. Aliquam eros ante, placerat et aliquam at, consectetur egestas dolor. Vestibulum ac neque vehicula, fringilla urna ac, feugiat metus. Sed leo sapien, rhoncus in lorem et, viverra rhoncus lacus. Nullam dignissim cursus tellus dictum vulputate. Sed nec pellentesque turpis. Sed eget nisl ex.",
    paragraph2: "Cras sit amet tempus sem. Fusce vulputate, nunc at malesuada iaculis, velit sem efficitur est, vitae ullamcorper nunc mi ac massa. Nunc sed lectus id ipsum pellentesque laoreet. Proin vitae nisi non felis cursus fringilla. Quisque aliquet nulla eu mauris consequat pellentesque. Cras tincidunt condimentum elit non euismod. Proin eu risus eu neque ornare posuere. Vestibulum vitae aliquam diam. Fusce efficitur bibendum justo, non facilisis massa rhoncus sit amet.",
    image: "./src/assets/about/we-are-altasnim.png",
    name: "Devaki Khimji",
    title: "Managing Director",
    sign: "./src/assets/about/signature.png"

});