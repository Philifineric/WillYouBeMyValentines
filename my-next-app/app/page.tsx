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
    
      <div
      className="hero min-h-screen"
  style={{
    backgroundImage: `url('/front page.jpg')`,
  }}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Will you be my</h1>
      <h2 className="mb-5 text-7xl font-bold text-primary">VALENTINE</h2>
      <button className="btn btn-primary">Get Started</button>
      <ButtonYes onClick={handleYesClick} />
      <ButtonNo onClick={handleNoClick} />
    </div>
  </div>
  </div>
  );
}
