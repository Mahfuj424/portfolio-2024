"use server";

export const registerUser = async (data: any) => {
  console.log("api data=>", data);
  const res = await fetch(`${process.env.BASE_API}/user/create-user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = res.json();
  return user;
};
