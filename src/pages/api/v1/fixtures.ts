import type { NextApiRequest, NextApiResponse } from "next";
import Response, { Status } from "@/backend/dtos/response";
import { fixtureService } from "@/backend";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req;

  switch (method) {
    case "GET":
      await getFixtures(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

const getFixtures = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { query } = req;
    const { date, month, year, page, limit } = query;
    const _date = date === "" ? undefined : parseInt(date as string, 10);
    const _month = month === "" ? undefined : parseInt(month as string, 10);
    const _year = year === "" ? undefined : parseInt(year as string, 10);
    const _limit = limit === "" ? undefined : parseInt(limit as string, 10);
    const _page = page === "" ? undefined : parseInt(page as string, 10);

    // Get base on query params
    const fixtures = await fixtureService.getFixtures(
      _page,
      _limit,
      _date,
      _month,
      _year
    );
    const resp: Response = {
      status: Status.OK,
      data: fixtures
    };
    res.status(200).json(resp);
  } catch (error) {
    const resp: Response = {
      status: Status.ERROR,
      data: null,
      error: error
    };
    res.status(200).json(resp);
  }
};

export default handler;
