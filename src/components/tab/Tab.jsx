import React, { useState } from 'react';
import { Button } from '../button';

export default function TabGroup({ types, contentToRender }) {
  const [active, setActive] = useState(types[0]);

  return (
    <>
      <div className="tab">
        {types.map(type => (
          <Button
            style="outline"
            label={type}
            key={type}
            onClick={() => setActive(type)}
          ></Button>
        ))}
      </div>
      {contentToRender(active)}
    </>
  );
}
