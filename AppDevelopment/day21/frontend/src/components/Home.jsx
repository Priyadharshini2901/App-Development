import React from 'react'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../assets/Swiper.css';
import RateHome from './RateHome';
// import Footer from './Footer/Footer';
// import 'swiper/swiper-bundle.min.css';


const Home = () => {
    const categories=[{
        name : 'CAKES',
        onClick: () => handleCategoryClick('/cake'),
        imageSrc:'https://assets.winni.in/groot/2022/07/22/homepage/desktop/iconcake.png'
    },
    {
        name:'FLOWERS',
        onClick: () => handleCategoryClick('/flower'),
        imageSrc:'https://assets.winni.in/groot/2022/07/22/homepage/desktop/icomflower.png'
    },
    {
        name: 'PERSONALIZED',
        onClick: () => handleCategoryClick('/personalised'),
        imageSrc: 'https://assets.winni.in/groot/2022/07/22/homepage/desktop/iconpersonalise.png',
      },
      {
        name: 'CHOCOLATES',
        onClick: () => handleCategoryClick('/chocolate'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/chocolate.png',
      },
      {
        name: 'COMBOS',
        onClick: () => handleCategoryClick('/combo'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/combos.png',
      },
      {
        name: 'GIFTS',
        onClick: () => handleCategoryClick('/gifts'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/gifts.png',
      },
      {
        name: 'PLANTS',
        onClick: () => handleCategoryClick('/plants'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/plants.png',
      },
      {
        name: 'PHOTO FRAMES',
        onClick: () => handleCategoryClick('/photos'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/photoframe.png',
      },
      {
        name: 'LAMPS',
        onClick: () => handleCategoryClick('/lamps'),
        imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/lamps.png',
      },
];
const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
const handleCategoryClick = (url) => {
  
    window.location.href = url;
  };
  const personalizedGiftsData = [
    {
      title: 'Mugs',
      price: '245',
      link: '/personalised-gifts',
      imageUrl:
        'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persomug.jpg?w=385',
    },
    {
      title: 'Cushion',
      price: '349',
      link: '/personalised-gifts',
      imageUrl:
        'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persocushion.jpg?w=385',
    },
    {
      title: 'Photo Frames',
      price: '349',
      link: '/personalised-gifts',
      imageUrl:
        'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persoframe.jpg?w=385',
    },
    {
      title: 'Lamps',
      price: '649',
      link: '/personalised-gifts',
      imageUrl:
        'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
    },
  ];
  
return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
             <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/birthday_d_igp_banner_20230626.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                <img src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/9/1694501478164.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                    <img src="/assets/images/home/img4.png" class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
              <div class="carousel-item">
                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/cakes_d_igp_banner_20230626.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
              </div>
            </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
         </button>
     </div>
                     
     <div className="row catEventHome" style={{ padding: '25px 10px 45px', marginBottom:'50px' }}>
      {categories.map((category, index) => (
        <div className="adobeEventPos col s2 padding-f1" key={index}>
          <div style={{ aspectRatio: '1' }} onClick={category.onClick}>
            <img
              alt={category.name}
              widgettype="featured category"
              className="responsive-img"
              src={category.imageSrc}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="wrapped-f1">{category.name}</div>
        </div>
      ))}
    </div>
    <div className="swiper-container desk_banners-new adobeOfferSlider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" style={{ margin: '0 auto', padding: '0 0 0', backgroundColor: '#F7F7F7', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <a className="center-align" href="/offers/3/simpl">
            <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/9/1693554884020.jpg" title="Simple Offer" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="center-align" href="/offers/1/mobikwik">
            <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/8/1690867799824.jpg" title="Place Your Order On Cash On Delivery" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="center-align" href="">
            <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/7/1689946922581.jpg" title="Use Coupon Code: TRYWINNI to get up to 20% off on your first order" />
          </a>
        </SwiperSlide>
      </Swiper>
     
    </div>
    <div className="col l12 s12 m12" style={{ padding: '0', marginBottom: '25px', margin: '0 auto' }}>
        <div className="col l8 s8 desktop-left-title text-lg-dark">Personalized Gifts</div>
        <a style={{ color: 'white' }} href="/personalised-gifts">
          <div className="col l4 s4 view_all">VIEW ALL</div>
        </a>
      </div>
      <div className="row rowapd catEventHomeWithTitle" style={{ margin: '0 auto' }}>
        {personalizedGiftsData.map((gift) => (
          <div className="col-3" key={gift.title}>
            <div className="card" style={{ borderRadius: '14px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important' }}>
              <a className="center-align" href={gift.link}>
                <img alt={gift.title} widgettype="personalized category" className="card-img-top" src={gift.imageUrl} style={{ width: '100%', height: '100%' }} />
                <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                  <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px' }}>
                    <h5 className="card-title" style={{ fontSize: '17px', fontWeight: 'bold' }}>{gift.title}</h5>
                    <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Starting From</p>
                    <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                      ₹ {gift.price}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <RateHome/>
      
      </div>
    <div>
        <Product/>
         {/* <Footer/> */}
    </div>
   </div>
    
              
);

}

export default Home;