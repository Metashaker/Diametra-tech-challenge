export default function pathFriendly(name: string) {
  const nameLowerCase = name.toLocaleLowerCase();
  const prettierPath = nameLowerCase.replace(/ /g, '-');
  return prettierPath;
}
