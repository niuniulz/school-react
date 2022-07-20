import React, { useState, useEffect } from "react";

function HookComp() {
  const [count, setCount] = useState(6);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>计数 {count}</button>
    </div>
  );
}

export default HookComp;
