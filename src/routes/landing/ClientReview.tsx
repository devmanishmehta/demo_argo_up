import { Swiper, SwiperSlide } from 'swiper/react';

const ClientReview = () => <div className="client_review">
    <div className="container mt-5">
        {/* <h2 className='text-center'>Review</h2> */}
        <Swiper
            className='swiper_con mt-5'
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
        >
            {/* <SwiperSlide>
                <div className="  p-4">
                    
                    The course appears to be very informative. Suggestions for the course formulation and recording are more practical oriented. Hope the course will be useful to construct my course and publish it for online teaching. Really great source of knowledge. Amazing.

                </div>
            </SwiperSlide> */}
          
            {/* <SwiperSlide>This course covers everything required including, selecting a course topic, creating the course, and promoting the course. I was worried that only one or two topics would be covered. I was very happy with this course.
</SwiperSlide> */}
            {/* <SwiperSlide>Thank you so much for making such a wonderful course. It was very easy to follow through and I also appreciate the wonderful motivation. You are a beautiful soul and a huge inspiration to many people who are looking for this type of education and learning. It has helped me so much and I can't wait to learn so much more from you!

</SwiperSlide> */}

        </Swiper>
    </div>
</div>;


export default ClientReview;