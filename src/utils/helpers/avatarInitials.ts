const getAvatarInitials = (name: string) => {
  if (!name) return;
  console.log({ name });
  return name
    .split(" ")
    .map((item) => item.substring(0, 1))
    .join("");
};

export default getAvatarInitials;
