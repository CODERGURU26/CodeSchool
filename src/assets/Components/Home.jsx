import Navbar from "./Navbar";
import Footer from "./Footer";
import studentImg from "./Students/student.jpg"
import teacherImg from "./Teachers/c.jpg"
import teacherImg2 from "./Teachers/a.avif"
import teacherImg3 from "./Teachers/e.jpg"
import teacherImg4 from "./Teachers/f.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="md:grid grid-cols-2 md:p-16  bg-linear-to-t from-sky-500 to-indigo-500">
          <div>
            <img src={studentImg} className="w-100 rounded-full animate__animated animate__backInDown border border-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)] " />

          </div>

          <div className="md:flex flex-col gap-10 ">
            <h1 className="text-7xl text-white font-semibold">Hey! CodingGuru Institutions</h1>
            <p className="text-2xl text-white">Welcome To Our Digital Learning Platform By CodingGuru</p>
            <div className="flex gap-10">
              <button className="bg-orange-400 hover:bg-black text-bold text-white border rounded-lg p-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Learn More</button>

              <button className="bg-rose-600 hover:bg-black  text-bold text-white border rounded-lg p-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Watch Videos</button>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-24">
        <h1 className="text-3xl text-center">Benefits & Advantages</h1>
        <p className="text-gray-500 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur esse recusandae sapiente dolorum quae iste, 
          veritatis aliquid accusantium ratione incidunt laboriosam excepturi omnis autem temporibus quia nulla officiis corrupti nisi beatae, 
          eum odit unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eligendi qui accusantium, tempora architecto voluptatem harum minima non?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem voluptate, ut quod sequi libero ullam tenetur.
          </p>
          
        <div className=" w-11/12 p-24 mx-auto  mb-16 grid md:grid-cols-4 flex gap-10">
          <div className="shadow-lg rounded-lg text-center">
            <i className="ri-artboard-line text-6xl mb-2"></i>
            <h1 className="font-bold text-center">Our Faculty</h1>
            <p className="text-gray-500 text-center mt-2"> Temporibus libero at quo voluptas fugiat quae porro dolores culpa omnis placeat maiores sit, nobis, odio eveniet.</p>
          </div>
          <div className="shadow-lg rounded-lg text-center">
            <i className="ri-artboard-line text-6xl mb-2"></i>
            <h1 className="font-bold text-center">Our Faculty</h1>
            <p className="text-gray-500 text-center mt-2"> Temporibus libero at quo voluptas fugiat quae porro dolores culpa omnis placeat maiores sit, nobis, odio eveniet.</p>
          </div>
          <div className="shadow-lg rounded-lg text-center">
            <i className="ri-artboard-line text-6xl mb-2"></i>
            <h1 className="font-bold text-center">Our Faculty</h1>
            <p className="text-gray-500 text-center mt-2"> Temporibus libero at quo voluptas fugiat quae porro dolores culpa omnis placeat maiores sit, nobis, odio eveniet.</p>
          </div>
          <div className="shadow-lg rounded-lg text-center">
            <i className="ri-artboard-line text-6xl mb-2"></i>
            <h1 className="font-bold text-center">Our Faculty</h1>
            <p className="text-gray-500 text-center mt-2"> Temporibus libero at quo voluptas fugiat quae porro dolores culpa omnis placeat maiores sit, nobis, odio eveniet.</p>
          </div>

        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="p-24">
        <h1 className="text-5xl text-center mb-10 text-white">Campus PortFolio</h1>
        <p className="text-white text-center text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur esse recusandae sapiente dolorum quae iste, veritatis aliquid accusantium ratione incidunt laboriosam excepturi omnis autem temporibus quia nulla officiis corrupti nisi beatae, eum odit unde.</p>
        </div>
       
        <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="w-full max-w-3xl mb-24">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <img src={teacherImg} className="w-full h-96 object-cover" alt="Student" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={teacherImg2} className="w-full h-96 object-cover" alt="Teacher 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={teacherImg3} className="w-full h-96 object-cover" alt="Teacher 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={teacherImg4} className="w-full h-96 object-cover" alt="Teacher 4" />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
export default Home