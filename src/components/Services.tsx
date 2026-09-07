import ServiceBuild from './ServiceBuild';
import ServiceGet from './ServiceGet';
import ServiceShare from './ServiceShare';

export default function Services() {
  return (
    <div className='flex flex-wrap items-center gap-8 lg:gap-12 pt-4'>
      {/* Service - Build Community */}
      <ServiceBuild />

      {/* Service - Share Events */}
      <ServiceShare />

      {/* Service - Get information */}
      <ServiceGet />
    </div>
  );
}
