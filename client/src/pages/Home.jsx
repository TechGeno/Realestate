import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListItem from '../components/ListItem';

export default function Home() {
  const [offerLists, setOfferLists] = useState([]);
  const [saleLists, setSaleLists] = useState([]);
  const [rentLists, setRentLists] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerLists);
  useEffect(() => {
    const fetchOfferLists = async () => {
      try {
        const res = await fetch('/api/list/get?offer=true&limit=4');
        const data = await res.json();
        setOfferLists(data);
        fetchRentLists();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentLists = async () => {
      try {
        const res = await fetch('/api/list/get?type=rent&limit=4');
        const data = await res.json();
        setRentLists(data);
        fetchSaleLists();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleLists = async () => {
      try {
        const res = await fetch('/api/list/get?type=sale&limit=4');
        const data = await res.json();
        setSaleLists(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferLists();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find long lost <span className='text-slate-500'>goods</span>
          <br />
          with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          The one stop to get your lost belongings 
          
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Find everything you cherished!
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerLists &&
          offerLists.length > 0 &&
          offerLists.map((list) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${list.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={list._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* list results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerLists && offerLists.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more losties</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerLists.map((list) => (
                <ListItem list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
        {rentLists && rentLists.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more items form Electronics</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentLists.map((list) => (
                <ListItem list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
        {saleLists && saleLists.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more items from Stationery </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleLists.map((list) => (
                <ListItem list={list} key={list._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
