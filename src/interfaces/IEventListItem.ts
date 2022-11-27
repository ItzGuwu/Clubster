export interface IEventListItem {
  EventDetails: event;
}
export interface user {
  id: string;
  name: string;
  photoURL: string;
}
export interface event {
  id: number;
  AOP: number;
  title: string;
  date: string;
  club: string;
  description: string;
  hostedBy: string;
  hostPhotoURL: string;
  attendees: user[];
}
