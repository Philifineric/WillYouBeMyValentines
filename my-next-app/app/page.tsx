'use client';
import ButtonYes from "./components/buttonYes";
import ButtonNo from "./components/buttonNo";
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
    <div>
      <ButtonYes onClick={handleYesClick} />
      <ButtonNo onClick={handleNoClick} />
      <h1>Will You Be My Valentine?</h1>
    </div>
  );
}
