import React, { useState, useRef, useEffect } from 'react';
import './DragDrop.css';

// Drag and Drop Context
export const DragDropContext = React.createContext();

export function DragDropProvider({ children }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  const value = {
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

// Draggable Item Component
export function DraggableItem({ 
  id, 
  children, 
  onDragStart, 
  onDragEnd,
  className = "",
  ...props 
}) {
  const [isDragging, setIsDragging] = useState(false);
  const { setDraggedItem } = React.useContext(DragDropContext);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDraggedItem({ id, element: e.target });
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    
    if (onDragStart) {
      onDragStart(e, id);
    }
  };

  const handleDragEnd = (e) => {
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
}) {
  const [isOver, setIsOver] = useState(false);
  const { draggedItem, setDropTarget } = React.useContext(DragDropContext);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsOver(true);
    setDropTarget({ id, element: e.target });
    
    if (onDragEnter) {
      onDragEnter(e, id);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsOver(false);
    setDropTarget(null);
    
    if (onDragLeave) {
      onDragLeave(e, id);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    if (onDragOver) {
      onDragOver(e, id);
    }
  };

  const handleDrop = (e) => {
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

// Sortable List Component
export function SortableList({ 
  items, 
  onReorder, 
  renderItem,
  className = "",
  ...props 
}) {
  const { draggedItem } = React.useContext(DragDropContext);

  const handleDrop = (e, targetId) => {
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