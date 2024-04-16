import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
  customer: string;
  startAt: Date;
  endsAt: Date;
}
type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment(request);
    return appointment;
  }
}
