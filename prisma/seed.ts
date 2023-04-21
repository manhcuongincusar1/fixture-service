import { PrismaClient } from "@prisma/client";
import { Fixture, Team } from "@prisma/client";

const prisma = new PrismaClient();

const fixtures: Fixture[] = [
  {
    id: 1,
    time: new Date("2022-01-01T18:00:00Z"),
    status: "scheduled",
    round: "Round 1",
    homeTeamId: 1,
    awayTeamId: 2,
    leagueId: 1,
    venueId: 1,
    homeTeamScore: 0,
    awayTeamScore: 0,
    homeTeamPenaltyScore: 0,
    awayTeamPenaltyScore: 0,
    homeTeamYellowCards: 2,
    awayTeamYellowCards: 3,
    homeTeamRedCards: 0,
    awayTeamRedCards: 1,
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 2,
    time: new Date("2022-02-01T18:00:00Z"),
    status: "scheduled",
    round: "Round 1",
    homeTeamId: 1,
    awayTeamId: 2,
    leagueId: 1,
    venueId: 1,
    homeTeamScore: 0,
    awayTeamScore: 0,
    homeTeamPenaltyScore: 0,
    awayTeamPenaltyScore: 0,
    homeTeamYellowCards: 2,
    awayTeamYellowCards: 3,
    homeTeamRedCards: 0,
    awayTeamRedCards: 1,
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 3,
    time: new Date("2022-03-01T18:00:00Z"),
    status: "scheduled",
    round: "Round 1",
    homeTeamId: 1,
    awayTeamId: 2,
    leagueId: 1,
    venueId: 1,
    homeTeamScore: 0,
    awayTeamScore: 0,
    homeTeamPenaltyScore: 0,
    awayTeamPenaltyScore: 0,
    homeTeamYellowCards: 2,
    awayTeamYellowCards: 3,
    homeTeamRedCards: 0,
    awayTeamRedCards: 1,
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 4,
    time: new Date("2022-04-01T18:00:00Z"),
    status: "scheduled",
    round: "Round 1",
    homeTeamId: 1,
    awayTeamId: 2,
    leagueId: 1,
    venueId: 1,
    homeTeamScore: 0,
    awayTeamScore: 0,
    homeTeamPenaltyScore: 0,
    awayTeamPenaltyScore: 0,
    homeTeamYellowCards: 2,
    awayTeamYellowCards: 3,
    homeTeamRedCards: 0,
    awayTeamRedCards: 1,
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 5,
    time: new Date("2022-05-01T18:00:00Z"),
    status: "scheduled",
    round: "Round 1",
    homeTeamId: 1,
    awayTeamId: 2,
    leagueId: 1,
    venueId: 1,
    homeTeamScore: 0,
    awayTeamScore: 0,
    homeTeamPenaltyScore: 0,
    awayTeamPenaltyScore: 0,
    homeTeamYellowCards: 2,
    awayTeamYellowCards: 3,
    homeTeamRedCards: 0,
    awayTeamRedCards: 1,
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  }
];

const teams: Team[] = [
  {
    id: 1,
    name: "Liverpool FC",
    logo: "https://www.example.com/liverpool_logo.png",
    country: "England",
    founded: "1892",
    venueName: "Anfield",
    venueSurface: "Grass",
    venueAddress: "Anfield Road",
    venueCity: "Liverpool",
    venueCapacity: "53,394",
    isNational: "false",
    lastUpdated: "2023-04-21T00:00:00Z",
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 2,
    name: "Manchester City FC",
    logo: "https://www.example.com/man_city_logo.png",
    country: "England",
    founded: "1880",
    venueName: "Etihad Stadium",
    venueSurface: "Grass",
    venueAddress: "Ashton New Road",
    venueCity: "Manchester",
    venueCapacity: "55,017",
    isNational: "false",
    lastUpdated: "2023-04-21T00:00:00Z",
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 3,
    name: "Paris Saint-Germain FC",
    logo: "https://www.example.com/psg_logo.png",
    country: "France",
    founded: "1970",
    venueName: "Parc des Princes",
    venueSurface: "Grass",
    venueAddress: "24 Rue du Commandant Guilbaud",
    venueCity: "Paris",
    venueCapacity: "47,929",
    isNational: "false",
    lastUpdated: "2023-04-21T00:00:00Z",
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  },
  {
    id: 4,
    name: "FC Bayern Munich",
    logo: "https://www.example.com/bayern_munich_logo.png",
    country: "Germany",
    founded: "1900",
    venueName: "Allianz Arena",
    venueSurface: "Grass",
    venueAddress: "Werner-Heisenberg-Allee 25",
    venueCity: "Munich",
    venueCapacity: "75,000",
    isNational: "false",
    lastUpdated: "2023-04-21T00:00:00Z",
    createdAt: new Date("2023-04-21T00:00:00Z"),
    updatedAt: new Date("2023-04-21T00:00:00Z")
  }
];

async function seed() {
  for (const team of teams) {
    await prisma.team.create({
      data: team
    });
  }

  for (const fixture of fixtures) {
    await prisma.fixture.create({
      data: fixture
    });
  }

  await prisma.$disconnect();
}

seed();
