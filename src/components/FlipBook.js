import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipBook.css';

// Create a Page component using forwardRef
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <img 
        src={`/assets/${props.number}.png`} 
        alt={`Page ${props.number}`} 
        className="w-full h-full object-cover"
      />
    </div>
  );
});

const FlipBook = () => {
  const book = useRef();

  const handleFlip = (e) => {
    console.log('Current page:', e.data);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="flip-book-container relative w-full max-w-2xl mx-auto">
        <HTMLFlipBook
          width={300}
          height={400}
          size="fixed"
          minWidth={300}
          maxWidth={800}
          minHeight={400}
          maxHeight={800}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={handleFlip}
          className="mx-auto"
          ref={book}
        >
          <Page number="1"></Page>
          <Page number="2"></Page>
          <Page number="3"></Page>
          <Page number="4"></Page>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default FlipBook;