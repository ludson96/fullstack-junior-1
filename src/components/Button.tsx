'use client';

// Este componente renderiza o botão 'Get Started' da página inicial.
export default function Button() {
  const handleScrollToJobs = () => {
    const jobsSection = document.getElementById('jobs-section');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='custom-div-btn'>
      <button
        type='button'
        onClick={handleScrollToJobs}
        className='custom-btn cursor-pointer transition-transform active:scale-95'
      >
        <p className={'custom-p-started'}>
          Get Started
        </p>
      </button>
    </div>
  );
}
