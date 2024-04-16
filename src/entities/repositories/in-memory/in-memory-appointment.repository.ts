import {areIntervalsOverlapping} from 'date-fns';
import { Appointment } from "../../appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
    public items: Appointment[] = [];

    findOverlappingAppointment(startAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this.items.find(appointment => {
        return areIntervalsOverlapping(
            {start:startAt, end: endsAt}, {start: appointment.startAt, end: appointment.endsAt}, {inclusive: true});
        }
        )
        if (!overlappingAppointment){
            return Promise.resolve(null);
        }
        return Promise.resolve(overlappingAppointment);
  }


  create(appointment: Appointment) {
    this.items.push(appointment);
  }
}
