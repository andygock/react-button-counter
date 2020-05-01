import React, { useState } from 'react';

const ButtonCounter = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>Counter: {state}</button>
    </div>
  );
};

ButtonCounter.displayName = 'ButtonCounter';

export default ButtonCounter;
