// import React from 'react'

import { useEffect, useState } from 'react';
import CartProduct from '../../components/Cart-Comp/CartProduct';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/Product-card/productCard';
import ProductDetail from '../../components/Product-Detail/ProductDetail';
import { useGetProductsQuery } from '../../store/Api/ProductApi';
import OtpInput from '../../components/Otp-Input/OtpInput';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { Truck, ShieldCheck, Headphones, Smile } from 'lucide-react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import RatingSummaryCard from '../../components/RatingSummaryCard/RatingSummaryCard';
import FavoriteProducts from '../../components/FavoriteProducts/FavoriteProducts';
import ShopCategories from '../../components/ShopCategories/ShopCategories';
// import ProductDetail from "../../components/ProductDetail"
import datas from '../../../../shopData.json';
// import Portfolio from '../portfolio/PortFolio';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ProductImage from '../../components/ProductImage/ProductImage';
import ReviewCarousel from '../../components/Review-carousel/ReviewCarousel';
import CustomerFavProduct from '../../components/Product-card/CustomerFavProduct';
import WhyChooseUs from '../../components/WhyChooseUs';
// import ProductCard from '../../components/ProductCard';
// import FeatureCards from '../../components/FeatureCards';

const features = [
  { icon: <Truck size={32} />, title: 'Fast Shipping' },
  { icon: <ShieldCheck size={32} />, title: 'Secure Payments' },
  { icon: <Headphones size={32} />, title: '24/7 Support' },
  { icon: <Smile size={32} />, title: '55k+ Happy Customers' },
];



const Home = () => {
  const [app, setApp] = useState<any>([]);
  const { data } = useGetProductsQuery();

  console.log(app);
  console.log(datas);
  useEffect(() => {
    setApp(data);
  }, [data]);

 

  return (
    <div className="">
      <Header></Header>
      <div className='px-4'>
        {' '}
        <FavoriteProducts data={datas} />{' '}
      </div>
      <ProductImage
        smallSrc="https://vaaradhifarms.com/cdn/shop/files/Ghee_HighRes.jpg?v=1698928244&width=300"
        mediumSrc="https://vaaradhifarms.com/cdn/shop/files/Honey1.png?v=1698854743&width=300"
        largeSrc="https://vaaradhifarms.com/cdn/shop/files/varadhi_farms_honey_-v1_-_web_final.jpg?v=1733085382&width=1512"
        alt="Organic Honey"
      />
      <div className='w-full px-2'><ShopCategories></ShopCategories></div>
      <h2 className='text-4xl px-3 xr:px-0 ms:text-5xl font-bold text-yellow-950 text-center my-7'>Shop Our Customers Favorite</h2>

      <div className="mx-7 flex flex-wrap items-start justify-center gap-14 ms:gap-18 ms:px-8">
        {datas.map((dat, i) => (
          <ProductCard data={dat} key={i}></ProductCard>
        ))}
      </div>
         
      <div className='mt-7'>
      <ReviewCarousel></ReviewCarousel>
      </div>
      <section className="bg-cream w-full px-4 py-10 ">
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>
      </section>
      {/* <CartProduct></CartProduct> */}
      {/* <ProductDetail></ProductDetail> */}
      {/* <ProductDetail></ProductDetail> */}
      <Footer></Footer>
      
      <OtpInput></OtpInput>
     

      
      <WhyChooseUs></WhyChooseUs>
    {/* <div className='bg-red-400 mx-auto'> <FeatureCards></FeatureCards>  </div> */}
    </div>
  );
};

export default Home;
