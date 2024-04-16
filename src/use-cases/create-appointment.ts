import { Appointment } from "../entities/appointment";
import { AppointmentsRepository } from "../entities/repositories/appointments-repository";

interface CreateAppointmentRequest {
  customer: string;
  startAt: Date;
  endsAt: Date;
}
type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentsRepository: AppointmentsRepository){}

  async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {

    const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(request.startAt, request.endsAt);

    if(overlappingAppointment){
      throw new Error('Another appointment overlaps this appointment dates');
    }
    const appointment = new Appointment(request);

    await this.appointmentsRepository.create(appointment);
    return appointment;
  }

}
