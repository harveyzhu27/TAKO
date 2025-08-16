import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import './HabitTracker.css';

interface Habit {
  id: number;
  name: string;
  entries: Record<string, boolean>;
}

function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Exercise', entries: {} },
      { id: 2, name: 'Read', entries: {} },
      { id: 3, name: 'Meditate', entries: {} }
    ];
  });
  const [editingHabitId, setEditingHabitId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>('');
  const [showAddHabit, setShowAddHabit] = useState<boolean>(false);
  const [newHabitName, setNewHabitName] = useState<string>('');
  
  // Use custom hooks for click outside handling
  const editRef = useClickOutside(() => setEditingHabitId(null), [editingHabitId]);
  const addHabitRef = useClickOutside(() => {
    setShowAddHabit(false);
    setNewHabitName('');
  }, [showAddHabit]);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Generate last 10 days
  const generateDays = (): Date[] => {
    const days: Date[] = [];
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push(date);
    }
    return days;
  };

  const days = generateDays();

  const toggleHabit = (habitId: number, date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    setHabits(prevHabits => 
      prevHabits.map(habit => {
        if (habit.id === habitId) {
          const newEntries = { ...habit.entries };
          if (newEntries[dateStr]) {
            delete newEntries[dateStr];
          } else {
            newEntries[dateStr] = true;
          }
          return { ...habit, entries: newEntries };
        }
        return habit;
      })
    );
  };

  const startEditHabit = (habit: Habit) => {
    setEditingHabitId(habit.id);
    setEditName(habit.name);
  };

  const saveEditHabit = () => {
    if (editName.trim()) {
      setHabits(prevHabits =>
        prevHabits.map(habit =>
          habit.id === editingHabitId
            ? { ...habit, name: editName.trim() }
            : habit
        )
      );
      setEditingHabitId(null);
      setEditName('');
    }
  };

  const deleteHabit = (habitId: number) => {
    setHabits(prevHabits => prevHabits.filter(habit => habit.id !== habitId));
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit: Habit = {
        id: Date.now(),
        name: newHabitName.trim(),
        entries: {}
      };
      setHabits(prevHabits => [...prevHabits, newHabit]);
      setNewHabitName('');
      setShowAddHabit(false);
    }
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="habit-tracker">

      <div className="habit-grid">
        {/* Header row with dates */}
        <div className="habit-row header-row">
          <div className="habit-category-header">Habits</div>
          {days.map((date, index) => (
            <div 
              key={index} 
              className={`habit-date-header ${isToday(date) ? 'today' : ''}`}
              title={date.toLocaleDateString()}
            >
              {formatDate(date)}
            </div>
          ))}
        </div>

        {/* Habit rows */}
        {habits.map(habit => (
          <div key={habit.id} className="habit-row">
            <div className="habit-category">
              {editingHabitId === habit.id ? (
                <div className="habit-edit" ref={editRef}>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEditName(e.target.value)}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter') saveEditHabit();
                      if (e.key === 'Escape') setEditingHabitId(null);
                    }}
                    onBlur={saveEditHabit}
                    autoFocus
                  />
                </div>
              ) : (
                <div className="habit-name-container">
                  <span 
                    className="habit-name"
                    onClick={() => startEditHabit(habit)}
                    title="Click to edit"
                  >
                    {habit.name}
                  </span>
                  <button
                    className="delete-habit-btn"
                    onClick={() => deleteHabit(habit.id)}
                    title="Delete habit"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
            
            {days.map((date, index) => {
              const dateStr = date.toISOString().split('T')[0];
              const isCompleted = habit.entries[dateStr];
              return (
                <div 
                  key={index} 
                  className={`habit-cell ${isCompleted ? 'completed' : ''} ${isToday(date) ? 'today' : ''}`}
                  onClick={() => toggleHabit(habit.id, date)}
                  title={`${date.toLocaleDateString()}: ${isCompleted ? 'Completed' : 'Not completed'}`}
                >
                  {isCompleted && <span className="checkmark">✓</span>}
                </div>
              );
            })}
          </div>
        ))}

        {/* Add new habit row */}
        <div className="habit-row add-habit-row">
          <div className="habit-category">
            {showAddHabit ? (
              <div className="habit-add-input" ref={addHabitRef}>
                <input
                  type="text"
                  placeholder="New habit..."
                  value={newHabitName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewHabitName(e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') addHabit();
                    if (e.key === 'Escape') {
                      setShowAddHabit(false);
                      setNewHabitName('');
                    }
                  }}
                  onBlur={addHabit}
                  autoFocus
                />
              </div>
            ) : (
              <button
                className="add-habit-btn"
                onClick={() => setShowAddHabit(true)}
              >
                + Add Habit
              </button>
            )}
          </div>
          {days.map((_, index) => (
            <div key={index} className="habit-cell empty"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HabitTracker;

