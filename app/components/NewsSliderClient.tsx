'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrows for the Slider
// interface CustomArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: React.MouseEventHandler<HTMLDivElement>;
// }

// const NextArrow = (props: CustomArrowProps) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'none' }}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props: CustomArrowProps) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'none' }}
//       onClick={onClick}
//     />
//   );
// };

const newsItems = [
  { id: 1, img: '/img/news1.png', imgMobile: '/img/news1_mobile.png', alt: 'news 1' },
  { id: 2, img: '/img/news2.png', imgMobile: '/img/news2_mobile.png', alt: 'news 2' },
  { id: 3, img: '/img/news3.png', imgMobile: '/img/news3_mobile.png', alt: 'news 3' },
  { id: 2, img: '/img/news2.png', imgMobile: '/img/news2_mobile.png', alt: 'news 2' }, 
];

export default function NewsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopSliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  const mobileSliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!mounted) {
    return null; 
  }

  return (
    <section className="container mx-auto md:px-4 space-y-12">
      <div className="w-full max-w-6xl mx-auto mb-0 md:pt-16">
        {/* Desktop version */}
        <div className="hidden md:block">
          {/* Title for PC view */}
          <h2
            className="text-[30px] text-white font-bold mb-14 mx-auto flex items-center justify-center"
            style={{
              maxWidth: '716px',
              height: '108px',
              backgroundImage: 'url(/img/news_title.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            เหตุการณ์สำคัญ
          </h2>

          {/* News items container for PC*/}
          <div className="px-4"> 
            <Slider {...desktopSliderSettings}>
              {newsItems.map((news) => (
                <div key={news.id} className="flex flex-col items-center p-2"> 
                  <Image
                    src={news.img}
                    alt={news.alt}
                    width={400}
                    height={512}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Mobile version */}
        <div className="block md:hidden">
          {/* Title for Mobile view */}
          <h2
            className="text-[30px] text-white font-bold mb-8 mx-auto flex items-center justify-center"
            style={{
              width: '360px',
              height: '58px',
              backgroundImage: 'url(/img/news_title_mobile.png)',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            เหตุการณ์สำคัญ
          </h2>

          {/* Mobile Carousel / Slider Container */}
          <div> 
            <Slider {...mobileSliderSettings}>
              {newsItems.map((news) => (
                <div key={news.id} className="flex flex-col items-center p-2">
                  <Image
                    src={news.imgMobile}
                    alt={news.alt}
                    width={204}
                    height={249}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}