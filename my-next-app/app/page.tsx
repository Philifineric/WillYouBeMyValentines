'use client';
import ButtonYes from "./components/buttonYes";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();


  const handleYesClick = () => {
    router.push('/shesaidYes');
  };

  return (
    <div>
      <ButtonYes onClick={handleYesClick} />
      <h1>Will You Be My Valentine?</h1>
    </div>
  );
}
