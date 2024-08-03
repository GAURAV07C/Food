
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../sal';


const ShowFood = () => {
  const[text,setText] = useState("")
  const { foodName } = useParams();
  const food = data.find((item) => item.foodName === foodName);
  const textHandler = ((e) => {
      const res = e.target.value;
      console.log(res)
      setText(res);
  })

    

  




  if (!food) {
    return <div>Food not found</div>;
  }

  const foodNameTrimmed = foodName ? foodName.trim() : '';

  return (
    <div className="w-screen h-screen  mb-10 bg-[#f2e7ef4e] flex flex-col gap-10 items-center justify-ce  ">
     <div>
     <div className='mb-10 flex flex-col gap-10 items-center justify-center mt-5 ' >
        <p className='text-[#302e34] font-bold text-2xl'>
          Lets Discuss  About {foodName}
        </p>
      </div>

      <div className=" text-xl font-semibold text-[#3d484e] mb-10 ">
        <p>{foodNameTrimmed} contain {food.selenium}</p>
      </div>
      <div>
        <textarea name="postContent" rows={4} cols={40} className=' outline-none border border-black bg-[#fefafa]' placeholder='write your opinion...' onClick={textHandler}/>
      </div>
      <div>
        <div className='bg-white'>
          <p className='text-xl font-semibold text-[#010618]'>
            {text}
            
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ShowFood;