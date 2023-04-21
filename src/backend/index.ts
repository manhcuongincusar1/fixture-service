// The index file will create the instance of all services, reposories and other dependencies
// Export out as a single object and assign them as a global vairable

import FixtureService from "@/backend/core/ports/fixture_service";
import FixtureRepository from "@/backend/core/ports/fixture_repo";
import ServiceFixtures from "./core/services/service_fixture";
import RepoFixture from "./repositories/fixture_repo";

import prisma from "./libs/prisma/prisma_client";

// Consider not to use global variable And implement dependency injection here
declare global {
  var fixtureService: FixtureService | undefined;
  var fixtureRepository: FixtureRepository | undefined;
}
const fixtureRepository = global.fixtureRepository || new RepoFixture(prisma);
const fixtureService =
  global.fixtureService || new ServiceFixtures(fixtureRepository);

// Next Js development mode will clear node cache every time re-build
// make sure to re-assign the global variable
if (process.env.NODE_ENV === "development") {
  global.fixtureRepository = fixtureRepository;
  global.fixtureService = fixtureService;
}

// Export out as a single object
// Only business logic should be exposed to the outside world

export { fixtureService };
