import React from 'react';

const Top = () => {
  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '900px',
        cursor: 'pointer',
        backgroundColor: '#FF0000',
        borderRadius: '50%',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="white"
      >
        <path d="M12 4l-8 8h16l-8-8z" />
      </svg>
    </div>
  );
};

export default Top;