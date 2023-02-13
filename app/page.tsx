/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */



export default function Home() {
  return (
    
<>
<div className="navbar bg-black">
  <div className="flex-1">
  <a href = "/" className="text-white text-xl md:text-xl lg:text-xl xl:text-xl font-bold font-poppins text-center ml-5" style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href ="/about "className="font-mono">About</a></li>

      <li><a href = "https://tally.so/r/wQo6Pp" className="font-mono">Register</a></li>
    </ul>
  </div>
</div>
<div className="relative h-screen w-screen bg-black">
  <video
    src="/bgeditcomp2.webm"
    autoPlay
    muted
    loop
    className="absolute h-full w-full object-cover opacity-80"
  />
  
  <div className="absolute inset-0 mb-10 flex items-center justify-center">
    <li className="content-center">
    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-poppins text-center mb-10 ml-5 mr-5"  style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum.acm</h1>
    
    <h1 className="text-white text-xs xl:text-lg md:text-xl  font-mono text-center " >     Embark on a journey to the future with Infuturum  </h1>
    <h1 className="text-white text-xs xl:text-lg md:text-xl font-mono text-center " >    exploring the latest in technology, learning.</h1>
    <h2 className="text-white xl:text-lg md:text-xl font-mono text-center " ></h2>
    <div className="flex items-center justify-center mt-10">
  
</div>
    </li>
  </div>
</div>
</>

  );
}
