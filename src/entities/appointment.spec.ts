import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getfutureDate } from "../../tests/utils/get-future-date";

test("create and Appointment", () => {
  const startAt = getfutureDate('2022-08-10');
  const endsAt = getfutureDate('2022-08-11');
  

  const appointment = new Appointment({
    customer: "John Doe",
    startAt,
    endsAt,
  });
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).equal("John Doe");
});

test("cannot create and appointment with end date before start date", () => {
  const startAt = getfutureDate('2022-08-10');
  const endsAt = getfutureDate('2022-08-09');
  
  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startAt,
      endsAt,
    });
  }).toThrow();
});


test("cannot create and appointment with start date before now", () => {
  const startAt = new Date();
  const endsAt = new Date();
  startAt.setDate(startAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);
  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startAt,
      endsAt,
    });
  }).toThrow();
});
