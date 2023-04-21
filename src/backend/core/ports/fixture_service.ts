import { FixtureList } from "@/backend/core/domains/Fixture";

export default interface FixtureRepository {
  getFixtures(
    page?: any,
    limit?: number,
    date?: number,
    month?: number,
    year?: number
  ): Promise<FixtureList>;
  getFixtureDays(month: number, year: number): Promise<Date[]>;
}
