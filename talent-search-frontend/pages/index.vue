<template>
    <div class="h-full w-full">
        <div class="container flex pt-32 mx-auto gap-32 px-16">
            <div class="text-[90px] font-light flex items-center">
                <div class="flex flex-col w-fit">
                    <h1 class="leading-[110px] w-fit">FIND THE BEST</h1>
                    <h1 class="leading-[110px] w-fit">TALENT HERE</h1>
                </div>
            </div>
            <div class="pt-8 w-3/12">
                <p class="text-justify">Search through the finest collections of top talents, a wide range of experienced professionals and freelancers. Get rid of the hassle to filter and organize the thousands of profile on your own.</p>
                <div class="px-8 pb-4 pt-8 flex gap-1 text-black/70 hover:text-blue-700 border-b-2 hover:border-blue-700 w-fit cursor-pointer items-center">
                    <span class="text-2xl font-medium">Get Started</span>
                    <SvgArrow />
                </div>
            </div>
        </div>
        <div class="container pt-16 flex justify-evenly mx-auto px-16 z-50 relative">
            <div class="bg-white p-4 flex flex-col relative items-center gap-3 font-bold font-quicksand">
                <div class="absolute top-4 left-4 h-[450px] w-[300px] pb-10 flex flex-col bg-gradient-to-b from-black/0 to-black/80">
                    <span class="text-2xl font-semibold text-white h-fit mt-auto ml-4">Josh Bennet</span>
                    <span class="text-white font-montserrat font-normal text-sm ml-5">26, Germany</span>
                </div>
                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="525" width="300"/>
                <span>Full-Stack Developer</span>
            </div>
            <div class="bg-white p-4 flex flex-col relative items-center gap-3 font-bold font-quicksand">
                <div class="absolute top-4 left-4 h-[450px] w-[300px] pb-10 flex flex-col bg-gradient-to-b from-black/0 to-black/80">
                    <span class="text-2xl font-semibold text-white h-fit mt-auto ml-4">Veronica Sals</span>
                    <span class="text-white font-montserrat font-normal text-sm ml-5">32, Venice</span>
                </div>
                <img src="https://images.pexels.com/photos/16115837/pexels-photo-16115837/free-photo-of-young-elegant-woman-in-a-brown-coat-and-a-hat-posing-in-city.jpeg?auto=compress&cs=tinysrgb&w=1200" height="525" width="300"/>
                <span>Software Architect</span>
            </div>
            <div class="bg-white p-4 flex flex-col relative items-center gap-3 font-bold font-quicksand">
                <div class="absolute top-4 left-4 h-[450px] w-[300px] pb-10 flex flex-col bg-gradient-to-b from-black/0 to-black/80">
                    <span class="text-2xl font-semibold text-white h-fit mt-auto ml-4">Richard Bill</span>
                    <span class="text-white font-montserrat font-normal text-sm ml-5">31, Scotland</span>
                </div>
                <img src="https://images.pexels.com/photos/3206171/pexels-photo-3206171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="525" width="300"/>
                <span>Hourly UI Designer</span>
            </div>
        </div>
        <div class="h-96 bg-blue-700 -translate-y-64 z-0 relative">
            <div class="bg-blue-700 h-full w-full translate-y-56 pt-28 px-16 text-white/80">
                <div class="container mx-auto px-32 flex flex-col gap-6 text-center">
                    <span class="text-3xl font-medium font-quicksand">"TalentLink revolutionized our hiring process. Its AI-driven approach delivers top-tier candidates effortlessly, making recruitment efficient and impactful. A game-changer for our team."</span>
                    <span>Sarah Thompson, Human Resource</span>
                </div>
            </div>
        </div>
        <div class="container mx-auto flex px-16 justify-between items-center font-montserrat">
            <Logo />
            <div>
                <span>© 2023, All Rights Reserved.</span>
            </div>
        </div>
        <!-- <div class="flex flex-col py-16 text-xl items-center justify-center">
            <h1>Are you a developer?</h1>
            <h1>Showcase your Skills on SkillMatch</h1>
            <div class="p-3">
                <button class="border border-black px-8 py-2 rounded-full whitespace-nowrap font-semibold">Register Now</button>
            </div>
        </div> -->
    </div>
</template>