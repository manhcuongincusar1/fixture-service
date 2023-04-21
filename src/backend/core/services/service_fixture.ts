import FixtureService from "@/backend/core/ports/fixture_service";
import FixtureRepository from "@/backend/core/ports/fixture_repo";

import { FixtureList } from "@/backend/core/domains/Fixture";

type DateQuery = {
  dateFrom: string;
  dateTo: string;
};

// Generate date-time query
// const generateDateQuery = (
//   date?: number,
//   month?: number,
//   year?: number
// ): DateQuery => {
//   try {
//     if (date && month && year) {
//       const dateFrom = new Date(year, month - 1, date).toISOString();
//       console.log({ dateFrom });
//       const dateTo = "";
//       return { dateFrom, dateTo };
//     }

//     if (month && year) {
//       const dateFrom = new Date(year, month - 1).toISOString();
//       const dateTo = new Date(year, month).toISOString();
//       return { dateFrom, dateTo };
//     }

//     if (year) {
//       const dateFrom = new Date(year).toISOString();
//       const dateTo = new Date(year + 1).toISOString();
//       return { dateFrom, dateTo };
//     }

//     return { dateFrom: "", dateTo: "" };
//   } catch (error) {
//     throw error;
//   }
// };

const generateDateQuery = (
  date?: number,
  month?: number,
  year?: number
): DateQuery => {
  try {
    if (date && month && year) {
      const dateFrom = new Date(
        `${year}-${month}-${date}`
      ).toLocaleDateString();
      console.log({ dateFrom });
      const dateTo = "";
      return { dateFrom, dateTo };
    }

    if (month && year) {
      const dateFrom = new Date(year, month - 1, 1).toLocaleDateString();
      const dateTo = new Date(year, month, 0).toLocaleDateString();
      return { dateFrom, dateTo };
    }

    if (year) {
      const dateFrom = new Date(year, 0, 1).toLocaleDateString();
      const dateTo = new Date(year, 11, 31).toLocaleDateString();
      return { dateFrom, dateTo };
    }

    return { dateFrom: "", dateTo: "" };
  } catch (error) {
    throw error;
  }
};

// Concrete implementation of FixtureService
// This is where the business logic is implemented
export default class ServiceFixtures implements FixtureService {
  private fixtureRepository: FixtureRepository;

  constructor(fixtureRepository: FixtureRepository) {
    this.fixtureRepository = fixtureRepository;
  }

  async getFixtures(
    page?: number,
    limit?: number,
    date?: number,
    month?: number,
    year?: number
  ): Promise<FixtureList> {
    try {
      if (!page) page = 1;
      if (!limit) limit = 10;
      // Build time query
      const { dateFrom, dateTo } = generateDateQuery(date, month, year);

      // Build pagination query
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      // Get fixtures from database with pagination
      const fixtures = await this.fixtureRepository.getFixtures(
        startIndex,
        limit,
        dateFrom,
        dateTo
      );

      fixtures.more = endIndex < fixtures.totalCount;

      return fixtures;
    } catch (error) {
      throw error;
    }
  }

  async getFixtureDays(month: number, year: number): Promise<Date[]> {
    try {
      // Build time query
      const { dateFrom, dateTo } = generateDateQuery(undefined, month, year);

      console.log({ dateFrom, dateTo });

      // Get dates with fixtures
      return await this.fixtureRepository.getDaysWithFixtures(dateFrom, dateTo);
    } catch (error) {
      throw error;
    }
  }
}
