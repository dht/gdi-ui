import { useEffect } from 'react';
import { addListener } from 'shared-base';

export function useCustomEvent(eventName: string | undefined, callback: (data: Json) => void) {
  useEffect(() => {
    if (!eventName) {
      return;
    }

    const clear = addListener(eventName, callback);

    return () => {
      clear();
    };
  }, []);
}
