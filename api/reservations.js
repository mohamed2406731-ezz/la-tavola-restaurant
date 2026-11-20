import { neon } from "@neondatabase/serverless";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, date, guests } = request.body || {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanPhone = typeof phone === "string" ? phone.trim() : "";
  const guestCount = Number(guests);

  if (cleanName.length < 2 || cleanPhone.length < 6) {
    return response.status(400).json({ error: "Invalid name or phone" });
  }
  if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(date || "")) {
    return response.status(400).json({ error: "Invalid reservation date" });
  }
  if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
    return response.status(400).json({ error: "Invalid guest count" });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      INSERT INTO reservations (name, phone, reservation_date, guests)
      VALUES (${cleanName}, ${cleanPhone}, ${date}, ${guestCount})
      RETURNING id, reservation_date, guests
    `;
    return response.status(201).json({
      success: true,
      reservation: result[0]
    });
  } catch (error) {
    console.error("Reservation database error:", error);
    return response.status(500).json({ error: "Could not save reservation" });
  }
}
