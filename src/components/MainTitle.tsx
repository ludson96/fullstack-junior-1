import { merriweather } from '../utils/fonts';

// Este componente renderiza o título principal da página inicial.
export default function MainTitle() {
  return (
    <div className= 'custom-div-build' >
      <h1 className={`custom-h1-build ${merriweather.className}`}>
        Build your best community starting from here.
      </h1>
    </div>
  );
}
