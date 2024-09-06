import React from 'react';

const KnowMore = () => {
  const [knowMoreState, setKnowMoreState] = React.useState(false);

  const handleClick = () => {
    if (knowMoreState) {
        const topElement = document.querySelector('html');
        topElement.scrollIntoView({ behavior: 'smooth' });

    } else {
      const histContextElement = document.getElementById('HistContext');
      if (histContextElement) {
        histContextElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setKnowMoreState(!knowMoreState);
  };

  return (
    <button
      className="fixed z-10 bottom-4 left-4 p-4 bg-yellow-800 text-white text-xl rounded-l-lg rounded-tr-lg hover:bg-yellow-900 hover:scale-105 transition-transform font-serif"
      onClick={handleClick}
    >
      {knowMoreState ? 'Know Less' : 'Know More'}
    </button>
  );
};

export default KnowMore;