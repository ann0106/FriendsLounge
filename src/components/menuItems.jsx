import React from 'react';

const MenuItem = ({ target, label, onClick }) => (
  <li onClick={() => onClick(target)}>
    <a href={`#${target}`}>{label}</a>
  </li>
);

export default MenuItem;
