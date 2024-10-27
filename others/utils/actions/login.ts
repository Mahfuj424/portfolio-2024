"use server";

export const loginUser = async (data: any) => {
  const res = await fetch(`${process.env.BASE_API}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userInfo = res.json();
  return userInfo;
};
