"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: type) {
  try {
    connectToDatabase();
  } catch (error) {}
}
