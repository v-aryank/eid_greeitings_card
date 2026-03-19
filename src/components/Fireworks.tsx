import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface FireworksProps {
  trigger: boolean;
  onComplete?: () => void;
}

export default function Fireworks({ trigger, onComplete }: FireworksProps) {
  const prevTriggerRef = useRef(false);

  useEffect(() => {
    if (trigger && !prevTriggerRef.current) {
      triggerFireworks();
      onComplete?.();
    }
    prevTriggerRef.current = trigger;
  }, [trigger, onComplete]);

  return null;
}

export const triggerFireworks = () => {
  // Fireworks from the left side
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.8 },
    colors: ['#FFD700', '#FFA500'],
    scalar: 0.5
  });

  // Fireworks from the right side
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: ['#FFD700', '#FFA500', '#FF8C00', '#FFF5CC'],
      scalar: 0.5
    });
  }, 200);

  // Center burst
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF8C00'],
      scalar: 0.5
    });
  }, 400);
};