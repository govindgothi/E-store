// import React from 'react'

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CustomerFavProduct from '../../components/Product-card/CustomerFavProduct';
import ProductDetail from '../../components/Product-Detail/ProductDetail';
import RatingSummaryCard from '../../components/RatingSummaryCard/RatingSummaryCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const ratingData = {
  averageRating: 4.86,
  totalReviews: 2148,
  ratingBreakdown: [
    { stars: 5, count: 184 },
    { stars: 4, count: 49 },
    { stars: 3, count: 1 },
    { stars: 2, count: 2 },
    { stars: 1, count: 2 },
  ],
};

const Product = () => {
  return (
    <div>
      <Header></Header>
      <ProductDetail></ProductDetail>
      <div className="p-4">
      <RatingSummaryCard {...ratingData} />
      </div>

      {/* <CustomerFavProduct ></CustomerFavProduct> */}
      <div className='mb-5'>
      <ReviewCard
              name="Jane Doe"
              date="April 16, 2025"
              rating={4}
              review="Really amazing product! Quality was great and delivery was fast. Highly recommend."
            ></ReviewCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;
