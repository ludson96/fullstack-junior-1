import ServiceBuild from './ServiceBuild';
import ServiceGet from './ServiceGet';
import ServiceShare from './ServiceShare';

export default function Services() {
  return (
    <div className='custom-cont-div-services'>
    {/* Service - Build Community */}
    <ServiceBuild />

    {/* Service - Share Events */}
    <ServiceShare />

    {/* Service - Get information */}
    <ServiceGet />
  </div>
  );
}
