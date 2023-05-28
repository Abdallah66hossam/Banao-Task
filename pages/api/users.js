import { data } from "../../lib/users";

export default async function handler(req, res) {
  try {
    await res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
