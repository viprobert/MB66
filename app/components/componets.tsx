import Image from 'next/image';
import Link from 'next/link';
import TrophySliderClient from './TrophySliderClient';
import NewsSection from './NewsSliderClient';

export default function RonaldinhoPage() {
    return (
    <div className="min-h-screen bg-cover bg-center">
      
      {/* Banner */}
      <section>
        <div className="overflow-hidden shadow-xl w-full">
          {/* Desktop version */}
          <Image
          src="/img/header1.png"
          alt="MB66"
          width={1920}
          height={111}
          className="hidden md:block w-full h-auto object-cover"
          priority
          >
          </Image>
          {/* Mobile version */}
          <Image
            src="/img/header1.png"
            alt="MB66"
            width={430}
            height={25}
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="overflow-hidden shadow-xl w-full">
          {/* Desktop version */}
          <Image
          src="/img/banner.png"
          alt="MB66"
          width={1920}
          height={111}
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
              className="hidden md:block w-[422px] md:w-[400px] hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/img/button_1_mobile.png" 
              alt="หน้าหลัก MB66 (Mobile)" 
              width={141}
              height={20}
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
            <h2 className="text-[20px] md:h-[65px] md:text-[30px] text-white font-bold md:mb-8 bg-[url('/img/content1_title.png')] bg-cover bg-center px-8 text-center">
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
                className="self-start mt-auto"
              />
              {/* <p className="mb-4">
                RONALDINHO ตำนานลูกหนังระดับโลก ซีอีโอเป็นแบรนด์แอมบาสเดอร์ของ MB66 อย่างเป็นทางการ ความร่วมมือครั้งสำคัญนี้ได้ถูกถ่ายทอดเป็นกระแสที่ได้รับความสนใจ และถูกพูดถึงอย่างล้นหลามในโลกออนไลน์
              </p>
              <p className="mb-4">
                สัญญาความร่วมมือระหว่างแพลตฟอร์มชั้นนำอันดับของเอเชียอย่าง MB66 กับซูเปอร์สตาร์ลูกหนัง RONALDINHO จะต้องสร้างความประทับใจอย่างมากแน่นอน
              </p>
              <p className="mb-4">
                นี่คืออีกก้าวสำคัญที่แสดงให้เห็นถึงมาตรฐานระดับสูงของ MB66 ในตลาดการเดิมพันออนไลน์
              </p>
              <p>
                ด้วยชื่อเสียงและอิทธิพลของนักเตะคนนี้ MB66 ได้รับการยอมรับอย่างกว้างขวางจากเหล่าคนดังและผู้เชี่ยวชาญพันธนาการวงการ สิ่งนี้สะท้อนถึงความมุ่งมั่นของแบรนด์ในการลงทุนอย่างจริงจัง พร้อมให้คำมั่นว่าจะมอบประสบการณ์ที่ดีที่สุดให้กับสมาชิกทุกคน
              </p> */}
              </div>
            <Image
              src="/img/content1_sign.png"
              alt="sign"
              width={375} 
              height={280}
              max-height={300} 
              className="self-start mt-auto" 
            />
      </div>

      <div className="w-1/2"> {/* Right column for the human image */}
        <Image
          src="/img/content1.png"
          alt="group1 desktop"
          width={617} 
          height={659} 
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
              className="mb-4 w-full"
            />
            <Image
              src="/img/content1_mobile.png"
              alt="Content 1 Group"
              width={430}
              height={250}
              className="w-full mb-4"
            />
            <div className="flex justify-center items-center mb-6 w-full h-[150px] px-4">
              <Image
                src="/img/contact1_sign_mobile.png"
                alt="Content 1 Sign"
                width={300}
                height={100}
                className="h-auto object-contain"
              />
            </div>
            <div className="block text-black text-sm font-family:sarabun"> {/* Mobile text content */}
              {/* 1st para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                RONALDINHO ตำนานลูกหนังระดับโลก จับมือเป็น
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                แบรนด์แอมบาสเดอร์ของ MB66 อย่างเป็นทางการ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                ความร่วมมือครั้งสำคัญนี้กำลังกลายเป็นกระแสที่ได้
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                รับความสนใจและถูกพูดถึงอย่างล้นหลามในโลก
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                ออนไลน์
              </p>
              {/* 2nd para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                สัญญาความร่วมมือระหว่างแพลตฟอร์มบันเทิงชั้น
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                นำของเอเชียอย่าง MB66 กับซูเปอร์สตาร์ลูกหนัง
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                RONALDINHO
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                จะต้องสร้างความประทับใจอย่างมากแน่นอน
              </p>
              {/* 3rd para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                นี่ถือเป็นอีกก้าวสำคัญที่แสดงให้เห็นถึงมาตรฐาน
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                ระดับสูงของ MB66 ในตลาดการเดิมพันออนไลน
              </p>
              {/* 4th para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                ด้วยชื่อเสียงและอิทธิพลของนักเตะคนนี้ MB66 ได้
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                รับการยอมรับอย่างกว้างขวางจากเหล่าคนดังและผู้
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                เชี่ยวชาญที่มีบทบาทในวงการสิ่งนี้สะท้อนถึงความ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                มุ่งมั่นของแบรนด์ในการลงทุนอย่างจริงจัง พร้อมให
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                คำมั่นว่าจะมอบประสบการณ์ที่ดีที่สุดให้กับสมาชิก
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                ทุกคน
              </p>
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
              className="w-full mb-14" 
            />

            <div className="flex justify-between items-start gap-8 relative">
              <div className="w-1/2 flex justify-start items-center relative z-10">
                <Image
                  src="/img/content2.png"
                  alt="Content 2 Group"
                  width={600} 
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-1/2 flex flex-col justify-center relative z-10">
                <Image
                  src="/img/content2_text.png"
                  alt="Content 2"
                  width={600} 
                  height={400} 
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
              className="w-full mb-6"
            />

            <div className="relative"> {/* Container for mobile image and overlap */}
              <Image
                src="/img/content2_mobile.png"
                alt="Content 2 Group mobile"
                width={430} 
                height={300} 
                className="w-full h-auto object-contain relative z-10"
              />
              {/* Overlapping bottom image for mobile */}
              <Image
                src="/img/content2_bottom_mobile.png"
                alt="Content 2 name mobile"
                width={430} 
                height={100} 
                className="absolute bottom-0 left-0 w-full z-0" 
                style={{ transform: 'translateY(63%)' }} 
              />
            </div>

            {/* Text content for mobile */}
            <div className="text-black text-sm mt-18"> 
              {/* 1sr para */}
               <p className="text-[18px] font-semibold font-weight-[500]">
                การที่ RONALDINHO เข้าร่วมเป็นแบรนด์แอมบาส
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                เดอร์ให้กับ MB66 ถือเป็นหนึ่งในเหตุการณ์ที่น่าจับ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                ตามองมากที่สุดในช่วงที่ผ่านมาสัญญาความร่วมมือ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                ระหว่างบริษัทบันเทิงชั้นนำแห่งเอเชียอย่าง MB66
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                กับซูเปอร์สตาร์ลูกหนัง RONALDINHO รับรองได้ว่า
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                จะนำมาซึ่งความน่าประทับใจมากมาย
              </p>

              {/* 2nd para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                นี่ถือเป็นอีกหนึ่งก้าวสำคัญที่แสดงถึงความมุ่งมั่นและ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                และระดับชั้นของแบรนด์ MB66 ในตลาดการเดิมพัน
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                ออนไลน์
              </p>

              {/* 3rd para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                ด้วยชื่อเสียงและความน่าเชื่อถือในระดับโลกของ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                RONALDINHOการร่วมงานครั้งนี้ได้รับการยอมรับ
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                อย่างสูงจากทั้งคนดังและผู้เชี่ยวชาญในวงการซึ่ง
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                ตอกย้ำถึงการลงทุนอย่างจริงจังของ MB66
              </p>
              <p className="md-5 text-[18px] font-semibold font-weight-[500]">
                ในการมอบประสบการณ์ที่ดีที่สุดให้แก่สมาชิกทุกคน
              </p>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="w-full max-w-6xl mx-auto md:mb-6">
          {/* สำหรับ desktop */}
          <Image
            src="/img/content3_text.png"
            alt="Ronaldinho info desktop"
            width={1290}
            height={240}
            className="w-full h-auto hidden md:block md:mb-6"
          />
          <Image
            src="/img/content3.png"
            alt="Ronaldinho image desktop"
            width={1290}
            height={798}
            className="w-full h-auto hidden md:block"
          />

          {/* สำหรับ mobile (ต้องมีไฟล์ภาพขนาดเล็ก) */}
          <div className="block md:hidden text-black text-sm mt-8"> {/* Mobile text content */}
            <h3 className="mb-5 text-[19px] font-weight-[900] font-bold">
              RONALDO DE ASSIS MOREIRA
            </h3>
            {/* 1st para */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                (เกิดเมื่อวันที่ 21 มีนาคม 1980 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                ที่เมืองปอร์โตอาเลเกร ประเทศบราซิล) 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                มักเป็นที่รู้จักในชื่อ RONALDINHO GAÚCHO  
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                หรือเรียกสั้น ๆ ว่า RONALDINHO
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                (ออกเสียงในภาษาโปรตุเกสว่า [ʁonawˈdʒĩɲu]) 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                เป็นอดีตนักฟุตบอลอาชีพชาวบราซิลโดยเล่นใน 
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                ตำแหน่งกองกลางตัวรุกและปีก 
              </p>
              {/* 2nd para  */}
              <p className="text-[18px] font-semibold font-weight-[500]">
                เขาไม่เพียงแค่เป็นนักเตะฝีเท้ายอดเยี่ยมระดับโลก 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                เท่านั้น แต่ยังเป็น ตำนานลูกหนังบราซิล ที่มีชื่อเสียง 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                จากลีลาการเลี้ยงบอลอันน่าตื่นตาตื่นใจ 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                RONALDINHO มีฐานแฟนคลับจำนวนมากทั่วโลก 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                นอกจากนี้ เขายังเป็นคนที่มีบุคลิก ขี้เล่น เป็นมิตร 
              </p>
              <p className="text-[18px] font-semibold font-weight-[500]">
                 และเข้าถึงง่าย ทำให้ทุกครั้งที่ได้พบแฟน ๆ 
              </p>
              <p className="mb-5 text-[18px] font-semibold font-weight-[500]">
                เขามักจะสร้างช่วงเวลาแห่งความประทับใจเสมอ 
              </p>
          </div>

          <Image
            src="/img/content3_mobile.png"
            alt="Ronaldinho image mobile"
            width={430}
            height={260}
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
          className="hidden md:block w-full mb-14" 
        />
        <div className="relative">
          <Image
            src="/img/achivement.png"
            alt="Ronaldinho Honors Desktop"
            width={1080} 
            height={304} 
            className="hidden md:block mx-auto max-w-full h-auto rounded-lg"
          />
          <Image
            src="/img/achivement_mobile.png"
            alt="Ronaldinho Honors (mobile)"
            width={320} 
            height={160} 
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
            className="hidden md:block w-full h-auto object-cover left-0"
            priority
          />
          <Image
            src="/img/footer_mobile.png"
            alt="Footer Logo (mobile)"
            width={438}
            height={136}
            className="block md:hidden w-full h-auto object-cover absolute"
            priority
          />
        </div>
      </section>
    </div>
  );
}
