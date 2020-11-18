export function addItem(item) {
  return new Promise((res) => {
    const lists = JSON.parse(localStorage.getItem("lists") || "[]");
    localStorage.setItem("lists", JSON.stringify([...lists, item]));
    res(item);
  }, 2000);
}

export async function fetchItem() {
  return JSON.parse(localStorage.getItem("lists") || "[]");
}
