import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of an update
export interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'success' | 'warning' | 'error';
  link?: {
    url: string;
    text: string;
  };
}

// Define the context shape
interface UpdatesContextType {
  updates: Update[];
  latestUpdate: Update | null;
  hasSeenLatestUpdate: boolean;
  markLatestUpdateAsSeen: () => void;
  clearUpdateHistory: () => void;
}

// Create the context with default values
export const UpdatesContext = createContext<UpdatesContextType>({
  updates: [],
  latestUpdate: null,
  hasSeenLatestUpdate: true,
  markLatestUpdateAsSeen: () => {},
  clearUpdateHistory: () => {}
});

// Custom hook to use the Updates context
export const useUpdates = () => useContext(UpdatesContext);

// Define the props for the provider
interface UpdatesProviderProps {
  children: ReactNode;
}

// Sample updates data - this would ideally come from an API or CMS
const UPDATES_DATA: Update[] = [
  {
    id: 'update-2025-07-14',
    title: 'Summer Hackathon Registration Open',
    content: 'Registration for our annual summer hackathon is now open! Join us for a weekend of coding, collaboration, and prizes.',
    date: '2025-07-14',
    type: 'info',
    link: {
      url: '/workshops',
      text: 'Register Now'
    }
  },
  {
    id: 'update-2025-07-10',
    title: 'New Club Stickers Available',
    content: 'Check out our brand new collection of programmer-themed stickers! Available for all club members.',
    date: '2025-07-10',
    type: 'success',
    link: {
      url: '/stickers',
      text: 'View Stickers'
    }
  },
  {
    id: 'update-2025-07-01',
    title: 'Python Workshop Series',
    content: 'Starting next week: Four-part Python workshop series covering basics to advanced topics.',
    date: '2025-07-01',
    type: 'info',
    link: {
      url: '/workshops',
      text: 'Learn More'
    }
  }
];

// The UpdatesProvider component
export const UpdatesProvider: React.FC<UpdatesProviderProps> = ({ children }) => {
  // Load updates and seen status from localStorage
  const [updates, setUpdates] = useState<Update[]>([]);
  const [hasSeenLatestUpdate, setHasSeenLatestUpdate] = useState<boolean>(true);
  
  useEffect(() => {
    // Get updates (this could be an API call in a real application)
    setUpdates(UPDATES_DATA);
    
    // Check if user has seen the latest update
    const latestUpdateId = UPDATES_DATA[0]?.id;
    const lastSeenUpdateId = localStorage.getItem('lastSeenUpdateId');
    
    setHasSeenLatestUpdate(lastSeenUpdateId === latestUpdateId);
  }, []);
  
  // Get the latest update
  const latestUpdate = updates.length > 0 ? updates[0] : null;
  
  // Mark the latest update as seen
  const markLatestUpdateAsSeen = () => {
    if (latestUpdate) {
      localStorage.setItem('lastSeenUpdateId', latestUpdate.id);
      setHasSeenLatestUpdate(true);
    }
  };
  
  // Clear update history
  const clearUpdateHistory = () => {
    localStorage.removeItem('lastSeenUpdateId');
    setHasSeenLatestUpdate(false);
  };
  
  return (
    <UpdatesContext.Provider 
      value={{ 
        updates, 
        latestUpdate, 
        hasSeenLatestUpdate, 
        markLatestUpdateAsSeen, 
        clearUpdateHistory
      }}
    >
      {children}
    </UpdatesContext.Provider>
  );
};
