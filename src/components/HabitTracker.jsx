import React, { useState, useEffect, useRef } from 'react';
import './HabitTracker.css';

function HabitTracker() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Exercise', entries: {} },
      { id: 2, name: 'Read', entries: {} },
      { id: 3, name: 'Meditate', entries: {} }
    ];
  });
  const [editingHabitId, setEditingHabitId] = useState(null);
  const [editName, setEditName] = useState('');
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [newHabitName, setNewHabitName] = useState('');
  const editRef = useRef(null);
  const addHabitRef = useRef(null);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Close edit mode when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (editingHabitId && editRef.current && !editRef.current.contains(e.target)) {
        setEditingHabitId(null);
      }
      if (showAddHabit && addHabitRef.current && !addHabitRef.current.contains(e.target)) {
        setShowAddHabit(false);
        setNewHabitName('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [editingHabitId, showAddHabit]);

  // Generate last 10 days
  const generateDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 9; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push(date);
    }
    return days;
  };

  const days = generateDays();

  const toggleHabit = (habitId, date) => {
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

  const startEditHabit = (habit) => {
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

  const deleteHabit = (habitId) => {
    setHabits(prevHabits => prevHabits.filter(habit => habit.id !== habitId));
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit = {
        id: Date.now(),
        name: newHabitName.trim(),
        entries: {}
      };
      setHabits(prevHabits => [...prevHabits, newHabit]);
      setNewHabitName('');
      setShowAddHabit(false);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="habit-tracker">
      <div className="habit-header">
        <h2>📊 Habit Tracker</h2>
      </div>

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
                    onChange={(e) => setEditName(e.target.value)}
                    onKeyDown={(e) => {
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
                  onChange={(e) => setNewHabitName(e.target.value)}
                  onKeyDown={(e) => {
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