import { useEffect } from 'react';

const LoggingComponent = () => {
  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  return 'Component';
};

export default {
  component: LoggingComponent,
  tags: ['autodocs'],
  parameters: {
    storyshots: { disable: true },
    chromatic: { disable: true },
  },
};

export const Default = {};
