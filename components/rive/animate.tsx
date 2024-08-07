"use client"



import { useRive } from '@rive-app/react-canvas';

export default function River() {
  const { rive, RiveComponent } = useRive({
    src: '/rive/seco.riv',
    stateMachines: "bumpy",
    animations: "Timeline 1",
    autoplay: true,
   
  });

  return (
    <div style={{ position: 'relative', height: "200px", borderRadius: 30, }}
     className='  overflow-hidden w-full max-w-xl'>
    <RiveComponent 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </div>
 
  );
}