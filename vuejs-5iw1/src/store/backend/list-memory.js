export function addItem(item) {
  return new Promise((res) => setTimeout(() => res(item), 2000));
}

export async function fetchItem() {
  return new Promise((res) => setTimeout(() => res([]), 2000));
}
