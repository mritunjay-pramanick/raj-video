import MeetingTypeList from '@/components/ui/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US',{hour12: true, hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata'});
  const date = (new Intl.DateTimeFormat('en-US',{dateStyle:'full'})).format(now);
  // const date = now.toLocaleDateString('en-IN', {  weekday: 'long',  year: 'numeric',  month: 'long', day: '2-digit', timeZone: 'Asia/Kolkata' });
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism max-w-[270px] rounded text-center text-base py-2 font-normal'>Upcoming Meeting at: 01 : 30 AM</h2>
          <div className="flex flex-col gap-2">
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{`${time}`}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{`${date}`}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home