import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test("create and Appointment", () => {
  const startAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() + 1);
  const appointment = new Appointment({
    customer: "John Doe",
    startAt,
    endsAt,
  });
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).equal("John Doe");
});

test("cannot create and appointment with end date before start date", () => {
  const startAt = new Date();
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() - 1);
  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startAt,
      endsAt,
    });
  }).toThrow();
});
