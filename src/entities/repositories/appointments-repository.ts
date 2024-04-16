import { Appointment } from "../appointment";

export interface AppointmentsRepository {
  create(appointment: Appointment);
  findOverlappingAppointment(startAt: Date,endsAt: Date): Promise<Appointment | null>;
}
