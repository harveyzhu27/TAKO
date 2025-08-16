import React, { useState, ReactNode, DragEvent, MouseEvent } from 'react';
import './DragDrop.css';
export { DragDropProvider } from './DragDropProvider';
import { useDragDrop } from '../hooks/useDragDrop';

interface DraggableItemProps {
  id: string;
  children: ReactNode;
  onDragStart?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  onDragEnd?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  className?: string;
  [key: string]: unknown;
}

// Draggable Item Component
export function DraggableItem({ 
  id, 
  children, 
  onDragStart, 
  onDragEnd,
  className = "",
  ...props 
}: DraggableItemProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { setDraggedItem } = useDragDrop();

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDraggedItem({ id, element: e.currentTarget });
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML);
    
    if (onDragStart) {
      onDragStart(e, id);
    }
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDraggedItem(null);
    
    if (onDragEnd) {
      onDragEnd(e, id);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`draggable-item ${isDragging ? 'dragging' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface DropZoneProps {
  id: string;
  onDrop?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  onDragOver?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  onDragEnter?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  onDragLeave?: (e: DragEvent<HTMLDivElement>, id: string) => void;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}

// Drop Zone Component
export function DropZone({ 
  id, 
  onDrop, 
  onDragOver, 
  onDragEnter, 
  onDragLeave,
  children,
  className = "",
  ...props 
}: DropZoneProps) {
  const [isOver, setIsOver] = useState<boolean>(false);
  const { setDropTarget } = useDragDrop();

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
    setDropTarget({ id, element: e.currentTarget });
    
    if (onDragEnter) {
      onDragEnter(e, id);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    setDropTarget(null);
    
    if (onDragLeave) {
      onDragLeave(e, id);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    if (onDragOver) {
      onDragOver(e, id);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    setDropTarget(null);
    
    if (onDrop) {
      onDrop(e, id);
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`drop-zone ${isOver ? 'drag-over' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface SortableListProps<T> {
  items: T[];
  onReorder: (draggedIndex: number, targetIndex: number) => void;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  [key: string]: unknown;
}

// Sortable List Component
export function SortableList<T extends { id: string }>({ 
  items, 
  onReorder, 
  renderItem,
  className = "",
  ...props 
}: SortableListProps<T>) {
  const { draggedItem } = useDragDrop();

  const handleDrop = (e: DragEvent<HTMLDivElement>, targetId: string) => {
    if (draggedItem && draggedItem.id !== targetId) {
      const draggedIndex = items.findIndex(item => item.id === draggedItem.id);
      const targetIndex = items.findIndex(item => item.id === targetId);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        onReorder(draggedIndex, targetIndex);
      }
    }
  };

  return (
    <div className={`sortable-list ${className}`} {...props}>
      {items.map((item, index) => (
        <DropZone key={item.id} id={item.id} onDrop={handleDrop}>
          <DraggableItem id={item.id}>
            {renderItem(item, index)}
          </DraggableItem>
        </DropZone>
      ))}
    </div>
  );
}

