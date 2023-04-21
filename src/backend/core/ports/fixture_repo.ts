import { FixtureList } from "@/backend/core/domains/Fixture";

export default interface FixtureRepository {
  getFixtures(
    startIndex: number,
    limit: number,
    dateFrom?: string,
    dateTo?: string
  ): Promise<FixtureList>;
  getDaysWithFixtures(dateFrom: string, dateTo: string): Promise<Date[]>;
}
