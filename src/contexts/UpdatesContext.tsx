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
    id: 'update-2025-07-14-new',
    title: '🔥 URGENT: Summer Hackathon Registration Open',
    content: 'Registration for our annual summer hackathon is now open! Join us for a weekend of coding, collaboration, and prizes. Limited spots available!',
    date: '2025-07-14',
    type: 'warning',
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
  // Load updates from our data
  const [updates, setUpdates] = useState<Update[]>([]);
  // Track if the user has seen the latest update
  const [hasSeenLatestUpdate, setHasSeenLatestUpdate] = useState<boolean>(false);
  
  useEffect(() => {
    console.log("Updates provider mounted, data:", UPDATES_DATA);
    
    // Get updates (this would be an API call in a real application)
    setUpdates(UPDATES_DATA);
    
    // Always mark updates as not seen to ensure the toast appears
    setHasSeenLatestUpdate(false);
    
    // Clear any previously stored IDs to force the toast to show
    localStorage.removeItem('lastSeenUpdateId');
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
