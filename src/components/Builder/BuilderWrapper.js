import React from 'react';
import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { Builder } from 'components/Builder/Builder';

export const BuilderWrapper = () => (
  <DndProvider
    backend={TouchBackend}
    options={{ enableMouseEvents: true }}
  >
    <Builder />
  </DndProvider>
);
