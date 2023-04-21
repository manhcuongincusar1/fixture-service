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
      await getDateWithFixtures(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

const getDateWithFixtures = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { month, year } = req.query;

    const _month = month === "" ? 0 : parseInt(month as string, 10);
    const _year = year === "" ? 0 : parseInt(year as string, 10);

    const dates = await fixtureService.getFixtureDays(_month, _year);
    console.log(dates);
    const response: Response = {
      status: Status.OK,
      data: dates
    };
    res.status(200).json(response);
  } catch (error) {
    const response: Response = {
      status: Status.ERROR,
      data: null,
      error: error
    };
    res.status(200).json(response);
  }
};

export default handler;
