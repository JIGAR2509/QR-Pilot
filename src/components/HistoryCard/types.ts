export type HistoryItem = {
  id: string;
  value: string;
  type: 'scan' | 'create';
  category: string;
  createdAt: string;
};

export const formatNow = (val?: string | Date) => {
  const date = val ? new Date(val) : new Date();

  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};
