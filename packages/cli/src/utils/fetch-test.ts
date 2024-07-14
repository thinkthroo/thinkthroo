export async function fetchTest(testHash: number) {
  try {
    const response = await fetch(
      `https://c22cgv-3000.csb.app/api/test/${testHash}`,
    );

    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch test code. Please contact us");
  }
}
