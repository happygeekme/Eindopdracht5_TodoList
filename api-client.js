const API_URL = "http://127.0.0.1:3000";

const getData = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const postData = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

const removeData = async (id) => {
  await fetch(API_URL + "/" + id, {
    method: "DELETE",
  });
};

