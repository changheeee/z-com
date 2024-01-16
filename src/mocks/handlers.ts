import { HttpResponse, http } from "msw";

export const handlers = [
  http.post("/api/login", () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: "창히",
        id: "changheee",
        image: "/duck.jpeg",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),

  http.post("/api/logout", () => {
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),

  http.post("/api/users", () => {
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
];
