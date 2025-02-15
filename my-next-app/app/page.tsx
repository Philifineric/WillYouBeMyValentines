'use client';
import ButtonYes from "./components/buttonYes";
import ButtonNo from "./components/ButtonNo";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();


  const handleYesClick = () => {
    router.push('/shesaidYes');
  };
  const handleNoClick = () => {
    router.push('/shesaidNo');
  };


  return (
    <div className="hearts">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      <div
      className="hero min-h-screen"
  style={{
    backgroundImage: `url('/front page.jpg')`,
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-5xl" >
      <h1 className="tracking-wide mb-5 mt-10 text-5xl font-bold text-rose-100" >Will you be my</h1>
      <h2 className="tracking-widest mb-5 text-7xl font-bold text-rose-700">VALENTINE?</h2>
      <div className="justify-center space-x-4 flex items-center">
      <ButtonYes onClick={handleYesClick} />
      <ButtonNo onClick={handleNoClick} />
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}
