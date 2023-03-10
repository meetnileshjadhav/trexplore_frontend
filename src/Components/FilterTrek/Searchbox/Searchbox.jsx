import React, { useState } from 'react';
import './Searchbox.css';

function Searchbox(props) {

  const [filterValue, setFilterValue] = useState("");

  const [filterCriteria, setFilterCriteria] = useState("season");

  const filterDetails =
  {
    "season": ["Summer", "Winter", "Rainy"],
    "grade": ["Easy", "Medium", "Difficult"],
    "region": ["Maharashtra", "Madhyapradesh", "Himalayan", "7_Sisters_States"]
  };

  const filterPackage = () => {
    props.filterPackage(filterValue, filterCriteria);
  }

  const changeHandle = (event) => {
    setFilterCriteria(event.target.value);
  }

  const renderDropdown = filterDetails[filterCriteria].map((data) => (
    <option value={data}>{data}</option>
  ));

  return (
    <div className='container border my-4'>
      <div>
        <label for="packagetype" className='searchbox-title'>Filter the Trek</label>
        <br />
        <input type="radio" value="season" name='filter' onChange={changeHandle} /> Season &nbsp; &nbsp;
        <input type="radio" value="grade" name='filter' onChange={changeHandle} /> Grade &nbsp; &nbsp;
        <input type="radio" value="region" name='filter' onChange={changeHandle} /> Region <br /><br />

        <select name="packagetype" id="packagetype" className='searchbox-dropdown' onChange={e => setFilterValue(e.target.value)}>
          {
            renderDropdown
          }

        </select>
        <button type='button' className='btn btn-success p-2 border border-round filter-btn' onClick={filterPackage}>Filter Trek</button>
      </div>

    </div >
  )
}

export default Searchbox;

