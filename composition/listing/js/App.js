'use strict';

const App = ({ items }) => (
  <main>
    {items.map(item => ListingItem(item))}
  </main>
);
