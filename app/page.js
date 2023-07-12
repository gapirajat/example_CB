'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Chatbot() {
  const [dialogue, setDialogue] = useState('');
  const router = useRouter();

  const handleRoute1 = () => {
    router.push('/route1');
  };

  const handleRoute2 = () => {
    router.push('/route2');
  };

  return (
    <div>
      <h1>Chatbot App</h1>
      <div>
        <p>Dialogue: {dialogue}</p>
      </div>
      <div>
        <input
          type="text"
          value={dialogue}
          onChange={(e) => setDialogue(e.target.value)}
        />
        <button onClick={handleRoute1}>Send to Route 1</button>
        <input
          type="text"
          value={dialogue}
          onChange={(e) => setDialogue(e.target.value)}
        />
        <button onClick={handleRoute2}>Send to Route 2</button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { route: 'route1' } },
      { params: { route: 'route2' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { route: params.route } };
}
