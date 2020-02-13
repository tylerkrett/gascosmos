import React from 'react';
import { useLocalStorage } from 'react-use';

const LegalLocalStorage = () => {
  const [value, setValue] = useLocalStorage('legal-accept', '0');
  const hasAccepted = Boolean(Number(value))
console.log(value)
  return hasAccepted ? null:  <div id="legal" >
  <section>
    <header>
    Warning You Must Be A Trade Company And Over 18+ To Use This Site.
    </header>
    <div>
  
  <button className="greenBtn" onClick={() => setValue('1')}>I meet all the requirements</button>
  <button  className="redBtn" onClick={() =>  window.location.href = "https//:www.google.com"}>I do not meet the requirements</button>
    </div>

  </section>

</div>;
};

export default LegalLocalStorage