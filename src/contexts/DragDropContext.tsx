import React from 'react';

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

// Drag and Drop Context
export const DragDropContext = React.createContext<DragDropContextType | undefined>(undefined);
