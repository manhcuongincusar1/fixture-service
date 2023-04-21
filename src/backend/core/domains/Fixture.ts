import { Fixture as PrismaFixture } from "@prisma/client";

// Can extend some else things here
interface Fixture extends PrismaFixture {}

export interface FixtureList {
  fixtures: Fixture[];
  totalCount: number;
  more?: boolean;
}
export default Fixture;
