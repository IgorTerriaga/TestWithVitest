export interface IAppointment {
  customer: string;
  startAt: Date;
  endsAt: Date;
}
export class Appointment {
  private props: IAppointment;

  get customer(): string {
    return this.props.customer;
  }

  get startAt(): Date {
    return this.props.startAt;
  }

  get endsAt(): Date {
    return this.props.endsAt;
  }

  constructor(appointment: IAppointment) {
    const { startAt, endsAt } = appointment;
    if (startAt <= new Date()){
      throw new Error("Invalid Date");
    }
    if (endsAt <= startAt) {
      throw new Error("Invalid end Date");
    }
    this.props = appointment;
  }
}
