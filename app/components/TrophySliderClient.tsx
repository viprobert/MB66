'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider, { Settings }  from 'react-slick'; 

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const trophies = [
  { id: 1, img: '/img/cup0011.png', name: 'THE BEST FIFA <br/>MEN’S PLAYER' },
  { id: 2, img: '/img/cup002.png', name: 'COPA AMÉRICA' },
  { id: 3, img: '/img/cup001.png', name: 'FIFA WORLDCUP' },
  { id: 4, img: '/img/cup003.png', name: 'CONFEDERATIONS CUP' },
];

export default function TrophySliderClient() {
  const settings: Settings = { 
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="trophy-slider-wrapper">
      <Slider {...settings} className="list-cups">
        {trophies.map((trophy) => (
          <div key={trophy.id} className="cup-item">
            <div className="img-cup">
              <Image
                src={trophy.img}
                alt={trophy.name.replace(/<br\/>/g, ' ')}
                width={150}
                height={150}
                objectFit="contain"
                className="inline-block"
              />
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: trophy.name }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}