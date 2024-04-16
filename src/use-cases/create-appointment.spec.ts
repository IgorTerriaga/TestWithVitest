import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment...", () => {
    const sut = new CreateAppointment();
    const startAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 1);

    expect(sut.execute({ customer: "Igor", startAt, endsAt })).resolves.toBeInstanceOf(Appointment);
  });
});
