const destGlob = import.meta.glob("../assets/destinations/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const tourGlob = import.meta.glob("../assets/tours/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const trekGlob = import.meta.glob("../assets/treks/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const toMap = (glob: Record<string, string>): Record<string, string> =>
  Object.fromEntries(
    Object.entries(glob).map(([p, url]) => [p.split("/").pop()!.replace(/\.[^.]+$/, ""), url])
  );

export const destinationImages = toMap(destGlob);
export const tourImages = toMap(tourGlob);
export const trekImages = toMap(trekGlob);
