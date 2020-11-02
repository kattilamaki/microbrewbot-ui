import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tab = () => {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Beers
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Breweries
        </a>
      </li>
    </ul>
  );
};

export default Tab;
