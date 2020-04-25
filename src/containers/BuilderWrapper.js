import React from 'react';
import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

import Builder from './Builder';

export const BuilderWrapper = () => {
  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableMouseEvents: true
      }}
    >
      <Builder />
    </DndProvider>
  )
}
