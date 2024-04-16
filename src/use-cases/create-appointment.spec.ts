import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getfutureDate } from "../../tests/utils/get-future-date";
import { InMemoryAppointmentsRepository } from "../entities/repositories/in-memory/in-memory-appointment.repository";

describe("Create Appointment", () => {
  it("should be able to create an appointment...", () => {
    const appointmentResitory = new InMemoryAppointmentsRepository();

    const sut = new CreateAppointment(appointmentResitory);
    const startAt = getfutureDate("2023-08-10");
    const endsAt = getfutureDate("2023-08-11");

    expect(
      sut.execute({ customer: "Igor", startAt, endsAt })
    ).resolves.toBeInstanceOf(Appointment);
  });
  it("should not be able to create an appointment with overlapping dates", async () => {
    const startAt = getfutureDate("2023-08-10");
    const endsAt = getfutureDate("2023-08-15");

    const appointmentResitory = new InMemoryAppointmentsRepository();
    const sut = new CreateAppointment(appointmentResitory);
    await sut.execute({
      customer: "John Doe",
      startAt,
      endsAt,
    });

    expect(
      sut.execute({
        customer: "John Doe",
        startAt: getfutureDate("2023-08-14"),
        endsAt: getfutureDate("2023-08-18"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
