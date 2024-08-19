// import React from 'react';
// import { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import patientAvatar from '../../assets/images/patient-avatar.png';
// import { HiStar } from 'react-icons/hi';

// const Testimonial = () => {
//     return (
//         <div className='mt-[30px] lg:mt-[55px]'>
//             <Swiper
//                 modules={[Pagination]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 20,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 30,
//                     },
//                 }}
//             >
//                 <SwiperSlide>
//                     <div className='py-[30px] px-5 rounded-[13px] shadow-lg'>
//                         <div className='flex items-center gap-[13px]'>
//                             <img src={patientAvatar} alt="Patient Avatar" className='w-16 h-16 rounded-full'/>
//                             <div>
//                                 <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
//                                     Muhibir Rahman
//                                 </h4>
//                                 <div className='flex items-center mt-2'>
//                                     <HiStar className='text-yellow-500' />
//                                     <HiStar className='text-yellow-500' />
//                                     <HiStar className='text-yellow-500' />
//                                     <HiStar className='text-yellow-500' />
//                                     <HiStar className='text-gray-300' />
//                                 </div>
//                                 <p className='mt-2 text-textColor'>
//                                     "Excellent service and care. The staff is very professional and attentive."
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 {/* Add more SwiperSlide components as needed */}
//             </Swiper>
//         </div>
//     );
// }

// export default Testimonial;
