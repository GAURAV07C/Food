import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RandomFoodComponent from './RandomFoodComponent';
import data from '../sal';
import { getUserFoodParams } from '../../src/services/operation/food'; // Import the getUserFoodParams function

const SearchBox = () => {




  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query === '') {
      setSuggestions([]);
      setFilteredData([]);
      setShowSuggestions(false);
    } else if (data) {
      const filteredData = data.filter((item) => {
        return item.foodName.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredData(filteredData);
      const suggestions = filteredData.slice(0, 3);
      setSuggestions(suggestions);
      setShowSuggestions(true);
    }
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = async (foodName) => {
    try {
      const res = await getUserFoodParams(foodName);
      // console.log(res);
      // You can also navigate to a new page with the food details
      // history.push(`/food/${foodName}`);
    } catch (err) {
      console.log("err in food ", err);
    }
  };

  return (
    <div className=' mx-auto m-auto flex flex-col justify-center items-center'>

      <div className=" mx-auto p-4 flex flex-col items-center w-[100%]">


        <h1 className="text-3xl font-bold mb-4 cursor-pointer text-center text-[#293132]">Search Food</h1>
        <input
          type="search"
          value={query}
          onChange={handleSearch}
          placeholder="Search for food"
          className=" border py-2 px-4 text-lg outline-none rounded-md lg:w-1/4 w-1/2  "
        />
        {showSuggestions && (
          <div className="mt-4 lg:w-1/4 w-1/2">
            <h2 className="text-lg font-bold cursor-pointer text-[#544557]">Choose any food</h2>
            {suggestions.map((item) => (
              <div key={item.foodName} onClick={() => handleSuggestionClick(item.foodName)}>
                <Link to={`/food/${item.foodName}`}>
                  <div className="bg-[#e7dbe680] shadow-md rounded-md p-4 mb-4">
                    <h2 className="text-lg font-bold text-[#49394b]">{item.foodName}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div>

        </div>
        
      </div>

      <div className=' ml-auto w-10/12 m'>
      <RandomFoodComponent />
      </div>
    </div>
  );
};

export default SearchBox;