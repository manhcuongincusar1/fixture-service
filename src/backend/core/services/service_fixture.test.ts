import ServiceFixtures from "@/backend/core/ports/fixture_service";
import FixtureRepository from "@/backend/core/ports/fixture_repo";
import { FixtureList } from "@/backend/core/domains/Fixture";
import FixtureService from "@/backend/core/services/service_fixture";

describe("ServiceFixtures", () => {
  let fixtureRepository: FixtureRepository;
  let serviceFixtures: ServiceFixtures;

  beforeEach(() => {
    fixtureRepository = {
      getFixtures: jest.fn(),
      getDaysWithFixtures: jest.fn()
    };
    serviceFixtures = new FixtureService(fixtureRepository);
  });

  describe("getFixtures", () => {
    it("should call the fixtureRepository with the correct parameters", async () => {
      const page = 2;
      const limit = 10;
      const date = 15;
      const month = 4;
      const year = 2023;
      const fixtures: FixtureList = {
        totalCount: 0,
        more: false,
        fixtures: []
      };
      (fixtureRepository.getFixtures as jest.Mock).mockResolvedValueOnce(
        fixtures
      );

      await serviceFixtures.getFixtures(page, limit, date, month, year);

      expect(fixtureRepository.getFixtures).toHaveBeenCalledWith(
        (page - 1) * limit,
        limit,
        new Date(year, month, date).toISOString(),
        ""
      );
    });

    it("should call the fixtureRepository with default parameters when none provided", async () => {
      const fixtures: FixtureList = {
        totalCount: 0,
        more: false,
        fixtures: []
      };
      (fixtureRepository.getFixtures as jest.Mock).mockResolvedValueOnce(
        fixtures
      );

      await serviceFixtures.getFixtures();

      expect(fixtureRepository.getFixtures).toHaveBeenCalledWith(0, 10, "", "");
    });
  });

  describe("getFixtureDays", () => {
    it("should call the fixtureRepository with the correct parameters", async () => {
      const month = 4;
      const year = 2023;
      const fixtureDays = ["2023-04-01", "2023-04-02"];
      (
        fixtureRepository.getDaysWithFixtures as jest.Mock
      ).mockResolvedValueOnce(fixtureDays);

      await serviceFixtures.getFixtureDays(month, year);

      expect(fixtureRepository.getDaysWithFixtures).toHaveBeenCalledWith(
        new Date(year, month).toISOString(),
        new Date(year, month + 1).toISOString()
      );
    });
  });
});
