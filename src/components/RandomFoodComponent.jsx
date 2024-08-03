import React, { useState, useEffect } from 'react';

import data from '../sal'


const RandomFoodComponent = () => {
  const [randomFoods, setRandomFoods] = useState([]);

  useEffect(() => {
    const randomIndices = [];
    for (let i = 0; i < 9; i++) {
      randomIndices.push(Math.floor(Math.random() * data.length));
    }
    const randomFoods = randomIndices.map((index) => data[index]);
    setRandomFoods(randomFoods);
  }, []);

  return (
    <div className=" justify-center mb-4 mt-5">
     <div>
     <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-[#2e2727]">Amount Of Selenium Found in Different Types Of Food </h2>
      </div>
      <div>
        <p className=''> <span className='text-2xl font-semibold text-gray-500'>Selenium  : </span><span className='text-xl font-semibold text-bl text-[#695c5c]'>Selenium is an essential nutrient that acts as an antioxidant in our body. This nutrient protects our body from free radicals, which can damage cells.</span> </p> 
        </div>
     </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:grid-row-3 lg:w-2/3 gap-8 w-[80%] items-center justify-center mt-5'>
      {randomFoods.map((food) => (
        <div
          className="bg-[#80d1b696] shadow-md rounded px-4 py-6 w-64 mb-4 mr-4 grid-cols-2"
          key={food.foodName}
        >
          <div>
            
          <p className="text-xl  "> <span className='text-2xl font-bold text-gray-600' >Food Name : </span>   <span className='text-xl text-gray-500 font-semibold'>{food.foodName}</span> </p>

          </div>
          <p className=""><span className='text-xl font-bold text-gray-600'>Selenium:</span>   <span className='text-gray-500 font-semibold'> {food.selenium}</span>  mg</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default RandomFoodComponent;