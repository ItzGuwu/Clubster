import { user } from "../interfaces/IEventListItem";
import EventListAttendee from "../Components/EventDashboards/EventListAttendee";
//AttendeeMapper - for events
export function AttendeeMapper(attendees: user[]) {
  return attendees.map((attendee) => {
    return EventListAttendee(attendee);
  });
}
