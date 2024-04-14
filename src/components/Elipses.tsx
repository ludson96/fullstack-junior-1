// Este componente renderiza duas elipses em posições absolutas.
export default function Elipses() {
  return (
    <div className='custom-cont-div-ellipse'>

      {/* Elipse média  */}
      <div className='custom-div-medium-ellipse'>
        <div className='custom-ellipse'></div>
      </div>

      {/* Elipse grande */}
      <div className='custom-div-big-ellipse'>
        <div className='custom-ellipse'></div>
      </div>

    </div>
  );
}
