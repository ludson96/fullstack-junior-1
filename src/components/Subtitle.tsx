import { poppins } from '../utils/fonts';

// Este componente renderiza o subtítulo da página inicial.
export default function Subtitle() {
  return (
    <div className='custom-div-meet'>
      <p className={`${poppins.className} custom-p-meet`}>
        Meet and communicate with the best people to run projects, events or other
        activities in a more effective and fun way
      </p>
    </div>
  );
}
