export async function CATEGORY(request, category, Setcategory) {
  const pageSize = 3;
  const { json } = await request(
    `top-headlines?&page=0&category=${category}&pageSize=${pageSize}`
  );

  return Setcategory(json.articles);
}

export async function CATEGORYSLIDE(request, category, Setcategory) {
  const pageSize = 3;
  const { json } = await request(
    `top-headlines?&page=0&category=${category}&pageSize=${pageSize}`
  );

  return Setcategory(json.articles[0]);
}
