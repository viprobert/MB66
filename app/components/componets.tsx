import Image from 'next/image';
import Link from 'next/link';
import TrophySliderClient from './TrophySliderClient';
import NewsSection from './NewsSliderClient';

export default function RonaldinhoPage() {
    return (
    <div className="min-h-screen bg-cover bg-center">
      
      {/* Banner */}
      <section>
        <div className="overflow-hidden shadow-xl">
          {/* Desktop version */}
          <div className="hidden md:flex items-center justify-center bg-white md:h-[111px] mt:5 mx-auto overflow-hidden">
          {/* Desktop version of the combined header image */}
            <Image
              src="/img/logo.png"
              alt="MB66 Logo"
              width={219} 
              height={70} 
              className="h-auto object-contain"
              draggable = "false"
              priority
            />
            <Image
              src="/img/logo_1.png"
              alt="Middle Icons"
              width={63}
              height={40}
              className="mx-5 h-auto object-contain"
              draggable = "false"
              priority
            />
            <Image
              src="/img/logo_2.png"
              alt="Ronaldinho Logo"
              width={247} 
              height={75} 
              className="h-auto object-contain"
              draggable = "false" 
              priority
            />
          </div>
          {/* Mobile version */}
          <div className="md:hidden flex items-center justify-center bg-white h-[35px] mx-auto overflow-hidden">
            <Image
              src="/img/logo_mobile.png"
              alt="MB66 Logo"
              width={150} 
              height={30} 
              draggable = "false"
              className="h-auto object-contain"
              priority
            />
            <Image
              src="/img/logo_1_mobile.png"
              alt="Middle Icons"
              width={50}
              height={26}
              draggable = "false"
              className="mx-2 h-auto object-contain"
              priority
            />
            <Image
              src="/img/logo_2_mobile.png"
              alt="Ronaldinho Logo"
              width={150} 
              height={30} 
              draggable = "false"
              className="h-auto object-contain" 
              priority
            />
          </div>
        </div>
        <div className="overflow-hidden shadow-xl w-full">
          {/* Desktop version */}
          <Image
          src="/img/banner.webp"
          alt="MB66"
          width={1920}
          height={111}
          draggable = "false"
          className="hidden md:block w-full h-auto object-cover"
          priority
          >
          </Image>
          {/* Mobile version */}
          <Image
            src="/img/banner_mobile.png"
            alt="MB66"
            width={430}
            height={25}
            draggable = "false"
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Back Button */}
      <section className="container mx-auto px-4 md:py-6 py-2">
        <div className="flex justify-center mt-4">
          <Link href="/" replace>
            <Image
              src="/img/button_1.png"
              alt="หน้าหลัก MB66"
              width={422}
              height={58}
              draggable = "false"
              className="hidden md:block w-[422px] md:w-[400px] hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/img/button_1_mobile.png" 
              alt="หน้าหลัก MB66 (Mobile)" 
              width={141}
              height={20}
              draggable = "false"
              className="block md:hidden w-[200px] hover:scale-105 transition-transform duration-300" 
            />
          </Link>
        </div>
      </section>

      {/* Video */}
      <section className="container mx-auto px-4 py-10">
        <div className="relative w-full max-w-[854px] aspect-video mx-auto mt-[-40px] md:mt-0">

          <video
            className="w-full h-full object-cover rounded-[20px] md:rounded-[40px] border-[1px] md:border-[3px] border-red-500"
            controls
            preload="metadata"
            autoPlay
            loop
            muted
          >
            <source 
            src="https://res.cloudinary.com/di3f6hlie/video/upload/MB66_d8hhab.mp4" 
            type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="container mx-auto px-2 md:px-4 space-y-12">
        {/* Block 1 */}
        <div className="w-full max-w-6xl mx-auto mb-0">
        {/* Desktop version */}
          <div className="hidden md:block">
            <h2 className="text-[35px] md:h-[65px] md:text-[30px] text-white font-bold md:mb-8 bg-[url('/img/content1_title.png')] bg-cover bg-center px-8 text-center" >
          RONALDINHO และความร่วมมือในฐานะแบรนด์แอมบาสเดอร์ของ MB66
           </h2>

          <div className="flex justify-between items-start gap-8"> 
            <div className="w-1/2 flex flex-col"> 
              <div className="text-black text-base md:text-lg md:text-[16px]"> 
                <Image
                  src="/img/content1_text.png"
                  alt="content1"
                  width={648} 
                  height={386}
                  draggable = "false"
                  className="self-start mt-auto"
                />
              </div>
              <Image
                src="/img/content1_sign.png"
                alt="sign"
                width={375} 
                height={280}
                max-height={300} 
                draggable = "false"
                className="self-start mt-auto" 
              />
            </div>

            <div className="w-1/2"> 
              <Image
                src="/img/content1.webp"
                alt="group1 desktop"
                width={617} 
                height={659} 
                draggable = "false"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          </div>
          {/* Mobile version */}
          <div className="block md:hidden">
            <Image
              src="/img/content1_title_mobile.png"
              alt="Content 1 Title"
              width={430}
              height={40}
              draggable = "false"
              className="mb-4 w-full"
            />
            <Image
              src="/img/content1_mobile.png"
              alt="Content 1 Group"
              width={430}
              height={250}
              draggable = "false"
              className="w-full mb-4"
            />
            <div className="flex justify-center items-center mb-6 w-full h-[150px] px-4">
              <Image
                src="/img/contact1_sign_mobile.png"
                alt="Content 1 Sign"
                width={300}
                height={100}
                draggable = "false"
                className="h-auto object-contain"
              />
            </div>

             {/* Mobile text content */}
            <div className="block">
              <Image
                src="/img/c1_t1.png"
                alt="Content 1 Text1"
                width={430}
                height={600}
                draggable = "false"
                className="mb-4 w-full"
              />
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="w-full max-w-6xl mx-auto mb-0 relative overflow-hidden">
          {/* Desktop version */}
          <div className="hidden md:block md:h-[74vh]">
            {/* Title */}
            <Image
              src="/img/content2_title.png"
              alt="Content 2 Title"
              width={1290} 
              height={100} 
              draggable = "false"
              className="w-full mb-14" 
            />

            <div className="flex justify-between items-start gap-8 relative">
              <div className="w-1/2 flex justify-start items-center relative z-10">
                <Image
                  src="/img/content2.png"
                  alt="Content 2 Group"
                  width={600} 
                  height={700}
                  draggable = "false"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-1/2 flex flex-col justify-center relative z-10">
                <Image
                  src="/img/content2_text.png"
                  alt="Content 2"
                  width={600} 
                  height={400} 
                  draggable = "false"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Overlapping bottom image for desktop */}
              <div className="max-w-[1152px]">
                <Image
                  src="/img/content2_bottom.png"
                  alt="Content 2 Name"
                  width={1152} 
                  height={300} 
                  draggable = "false"
                  className="absolute bottom-0 left-0 w-full z-0" 
                  style={{ transform: 'translateY(64%)' }} 
                />
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="block md:hidden">
            {/* Mobile Title */}
            <Image
              src="/img/content2_title_mobile.png"
              alt="Content 2 Title Mobile"
              width={430} 
              height={50} 
              draggable = "false"
              className="w-full mb-6"
            />

            <div className="relative"> 
              <Image
                src="/img/content2_mobile.png"
                alt="Content 2 Group mobile"
                width={430} 
                height={300} 
                draggable = "false"
                className="w-full h-auto object-contain relative z-10"
              />
              {/* Overlapping bottom image for mobile */}
              <Image
                src="/img/content2_bottom_mobile.png"
                alt="Content 2 name mobile"
                width={430} 
                height={100} 
                draggable = "false"
                className="absolute bottom-0 left-0 w-full z-0" 
                style={{ transform: 'translateY(63%)' }} 
              />
            </div>

            {/* Text content for mobile */}
            <div className="text-black text-sm mt-18">
              <Image
                src="/img/c2_t1.png"
                alt="Content 2 Text1"
                width={430} 
                height={500} 
                draggable = "false"
                className="w-full mb-6"
              />
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="w-full max-w-6xl mx-auto md:mb-6">
          {/* desktop */}
          <Image
            src="/img/content3_text.png"
            alt="Ronaldinho info desktop"
            width={1290}
            height={240}
            draggable = "false"
            className="w-full h-auto hidden md:block md:mb-6"
          />
          <Image
            src="/img/content3.png"
            alt="Ronaldinho image desktop"
            width={1290}
            height={798}
            draggable = "false"
            className="w-full h-auto hidden md:block"
          />

          {/* mobile*/}
          <div className="block md:hidden text-black text-sm">
            <Image
              src="/img/c3_t1.png"
              alt="Context3 Text1"
              width={430}
              height={180}
              draggable = "false"
              className="w-full h-auto block md:hidden mb-4"
            />
          </div>
          <Image
            src="/img/content3_mobile.png"
            alt="Context3 Text3"
            width={430}
            height={540}
            draggable = "false"
            className="w-full h-auto block md:hidden"
          />
        </div>
      </section>

      {/* Honors Section */}
      <section className="relative mx-auto w-full md:min-h-0 flex flex-col items-center justify-center ">
      <div className="md:mt-10">
        <Image
          src="/img/achivement_title.png"
          alt="Achievement Title"
          width={1100} 
          height={67} 
          draggable = "false"
          className="hidden md:block w-full mb-14" 
        />
        <div className="relative">
          <Image
            src="/img/achivement.png"
            alt="Ronaldinho Honors Desktop"
            width={1080} 
            height={304} 
            draggable = "false"
            className="hidden md:block mx-auto max-w-full h-auto rounded-lg"
          />
          <Image
            src="/img/achivement_mobile.png"
            alt="Ronaldinho Honors (mobile)"
            width={320} 
            height={160} 
            draggable = "false"
            className="block md:hidden mx-auto max-w-full h-auto rounded-lg mt-6"
          />
        </div>
      </div>
      </section>

      {/* Trophy Section */}
      <section
        className="relative mx-auto w-full md:min-h-0 md:h-[75vh] flex flex-col items-center justify-center bg-cover bg-center
                  lg:bg-[url('/img/achievement_background.png')]">
        <div className="container mx-auto md:h-[70vh] flex flex-col items-center justify-center text-center z-10 md:mt-12 w-[97%]">
          <TrophySliderClient />
        </div>
      </section>

      {/* MB66 Logo */}
      <section>
        <div className="w-full overflow-hidden mb-4">
          <Image
            src="/img/midbanner.png"
            alt="MB66 mid banner"
            width={1920}
            height={90}
            draggable = "false"
            className="hidden md:block w-full h-auto"
          />
        </div>
      </section>

        {/* Events Table */}
      <section className="container mx-auto md:px-4 space-y-12">
        <div className="w-full max-w-6xl mx-auto mb-0">
          <NewsSection />
        </div>
      </section>

      {/* Footer */}
      <section className="md:pt-1 ">
        <div className="overflow-hidden shadow-xl w-full md:mt-12">
          <Image
            src="/img/footer.jpg"
            alt="Footer Logo"
            width={1920}
            height={380}
            draggable = "false"
            className="hidden md:block w-full h-auto object-cover left-0"
            priority
          />
          <Image
            src="/img/footer_mobile.png"
            alt="Footer Logo (mobile)"
            width={438}
            height={136}
            draggable = "false"
            className="block md:hidden w-full h-auto object-cover absolute"
            priority
          />
        </div>
      </section>
    </div>
  );
}
