import {faqs} from './Faq';
import { useState } from "react";
import Btnmodule from './Button.module.css'
function App() {
  const [visibleAnswerId, setVisibleAnswerId] = useState(null);

  const handleToggle = (id) => {
    // If the clicked question is already visible, hide it, otherwise show it
    setVisibleAnswerId((visibleAnswerId === id ? null : id));
  };

  return (
    <div className="App">
      <div className={Btnmodule.faqDiv}>
      <h1 className='text-[40px] font-[500] p-4'>Frequently Asked Questions (FAQs)</h1>
{faqs.map((val)=>(
 (

<FaqModel 
key={val.id}
value={val}
visibleAnswerId={visibleAnswerId} 
            onToggle={handleToggle} 

/>

  )
))}
</div>

    </div>
  );
}

export default App;

function FaqModel({value,visibleAnswerId, onToggle}){
  const isVisible = visibleAnswerId === value.id;

  return (
    <div className=''>
      <h1 className={Btnmodule.question} onClick={() => onToggle(value.id)}>
        {`${value.id} no. ${value.question}`}
      </h1>
      <p className={isVisible ? Btnmodule.answer : Btnmodule.hideAnswer}>
        {`${value.answer}`}
      </p>
    </div>
  );
}