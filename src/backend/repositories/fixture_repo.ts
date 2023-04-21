import { PrismaClient } from "@prisma/client";
import FixtureRepository from "../core/ports/fixture_repo";
import { FixtureList } from "../core/domains/Fixture";

export default class RepoFixture implements FixtureRepository {
  private readonly db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  async getFixtures(
    startIndex: number,
    limit: number,
    dateFrom?: string,
    dateTo?: string
  ): Promise<FixtureList> {
    try {
      // Build condition
      let condition: { [key: string]: any } = {};
      if (dateFrom && dateTo) {
        condition = {
          time: {
            gte: new Date(dateFrom),
            lte: new Date(dateTo)
          }
        };
      }

      if (dateFrom && !dateTo) {
        let _dateFrom = new Date(dateFrom);
        let _dateTo = new Date(_dateFrom.setDate(_dateFrom.getDate() + 1));
        condition = {
          time: {
            gte: new Date(dateFrom),
            lt: _dateTo
          }
        };
      }

      console.log({ condition });
      const fixturesPromise = this.db.fixture.findMany({
        where: condition ? condition : {},
        include: {
          homeTeam: true,
          awayTeam: true
        },
        orderBy: {
          time: "desc"
        },
        skip: startIndex,
        take: limit
      });

      const totalCountPromise = this.db.fixture.count({
        where: condition ? condition : {}
      });

      const [fixtures, totalCount] = await Promise.all([
        fixturesPromise,
        totalCountPromise
      ]);

      return {
        fixtures: fixtures,
        totalCount: totalCount
      };
    } catch (error) {
      throw error;
    }
  }

  async getDaysWithFixtures(dateFrom: string, dateTo: string): Promise<Date[]> {
    try {
      const days = await this.db.fixture.groupBy({
        by: ["time"],
        where: {
          time: {
            gte: new Date(dateFrom),
            lte: new Date(dateTo)
          }
        }
      });

      console.log({ days });

      return days.map((day) => day.time);
    } catch (error) {
      throw error;
    }
  }
}
