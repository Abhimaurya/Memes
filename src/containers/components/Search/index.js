import React, { useState } from 'react';

function MemeCreator(props) {
    const [query, setQuery] = useState('');
  return (
    <div className="row">
        <input id="memes_query_text" onKeyUp={(e) => setQuery(e.target.value)} type="text" placeholder="Enter Your Search Query Here" />
        <button id="memes-load-img" onClick={() => props.search(query)}>Load Image</button>
    </div>
  );
}

export default (MemeCreator);
