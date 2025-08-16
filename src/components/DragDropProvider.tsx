import React, { useState, ReactNode } from 'react';
import { DragDropContext } from '../contexts/DragDropContext';

interface DragItem {
  id: string;
  element: HTMLElement;
}

interface DropTarget {
  id: string;
  element: HTMLElement;
}

interface DragDropContextType {
  draggedItem: DragItem | null;
  setDraggedItem: (item: DragItem | null) => void;
  dropTarget: DropTarget | null;
  setDropTarget: (target: DropTarget | null) => void;
}

interface DragDropProviderProps {
  children: ReactNode;
}

export function DragDropProvider({ children }: DragDropProviderProps) {
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);

  const value: DragDropContextType = {
    draggedItem,
    setDraggedItem,
    dropTarget,
    setDropTarget,
  };

  return (
    <DragDropContext.Provider value={value}>
      {children}
    </DragDropContext.Provider>
  );
}
