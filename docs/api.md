# Fixture Service API

This API provides endpoints to retrieve fixture and calendar data.

## Table of Contents

- [Fixture Service API](#fixture-service-api)
  - [Table of Contents](#table-of-contents)
  - [Get Fixtures Pagination](#get-fixtures-pagination)
    - [Request](#request)
    - [Response](#response)
  - [Get Fixtures Date](#get-fixtures-date)
    - [Request](#request-1)
    - [Response](#response-1)

## Get Fixtures Pagination

**Method:** `GET`

**URL:** `http://localhost:3000/api/v1/fixtures?page=1&limit=1&date=19&month=04&year=2023`

### Request

This endpoint retrieves fixture data with pagination.

**Parameters:**

| Name  | Required | Type   | Description   |
|-------|----------|--------|---------------|
| page  | Yes      | Number | The page number to retrieve |
| limit | Yes      | Number | The number of fixtures per page |
| date  | Yes      | Number | The day of the month to filter by |
| month | Yes      | Number | The month to filter by |
| year  | Yes      | Number | The year to filter by |

**Response:**

Status code: `200 OK`

Example response body:

```json
{
    "status": "OK",
    "data": {
        "fixtures": [
            {
                "id": 1,
                "date": "2023-04-19T07:37:45.018Z",
                "time": "2023-04-19T07:37:45.018Z",
                "status": "",
                "round": "",
                "homeTeamId": 1,
                "awayTeamId": 2,
                "leagueId": 0,
                "venueId": 0,
                "homeTeamScore": 0,
                "awayTeamScore": 0,
                "homeTeamPenaltyScore": 0,
                "awayTeamPenaltyScore": 0,
                "homeTeamYellowCards": 0,
                "awayTeamYellowCards": 0,
                "homeTeamRedCards": 0,
                "awayTeamRedCards": 0,
                "createdAt": "2023-04-19T07:37:45.018Z",
                "updatedAt": "2023-04-19T07:37:22.139Z",
                "homeTeam": {
                    "id": 1,
                    "name": "Cuong Super A",
                    "logo": "A",
                    "country": "Vietnam",
                    "founded": "Cuong Nguyen",
                    "venueName": "",
                    "venueSurface": "",
                    "venueAddress": "",
                    "venueCity": "",
                    "venueCapacity": "",
                    ...
                }
            }
        ]
    }
}
```


### Response

If the request is successful, the API returns a list of fixtures for the given page and date range. The response body is a JSON array of objects, where each object represents a fixture.


## Get Fixtures Date

**Method:** `GET`

**URL:** `http://localhost:3000/api/v1/calendars?&month=04&year=2023`

### Request

This endpoint retrieves fixture data for a specific month and year.

**Parameters:**

| Name  | Required | Type   | Description   |
|-------|----------|--------|---------------|
| month | Yes      | Number | The month to filter by |
| year  | Yes      | Number | The year to filter by |

**Response:**

Status code: `200 OK`

Example response body:

```json
{
    "status": "OK",
    "data": [
        "2023-04-19T07:37:45.018Z"
    ]
}
```

### Response

If the request is successful, the API returns a list of fixtures for the given month and year. The response body is a JSON array of objects, where each object represents a fixture.
