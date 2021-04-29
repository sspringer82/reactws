import { useEffect, useRef } from 'react';

const Prompt = () => {
  const deferredPrompt = useRef(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });

    window.addEventListener('appinstalled', () => {
      deferredPrompt.current = null;
    });
  }, []);

  return (
    <button
      onClick={async () => {
        deferredPrompt.current.prompt();
        const { outcome } = await deferredPrompt.current.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt.current = null;
      }}
    >
      install
    </button>
  );
};

export default Prompt;
