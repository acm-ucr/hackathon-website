export type Event = {
  assignee?: string;
  category?: string;
  color?: string;
  description: string;
  end: {
    dateTime: string;
    timeZone: string;
  };
  hidden: boolean;
  id: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  startDate?: Date;
  endDate?: Date;
  summary: string;
};
