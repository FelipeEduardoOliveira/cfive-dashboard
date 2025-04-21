export const getOnlyLetter = (name: string) => {
  const separetedName = name.split(' ');
  const firstLetter = separetedName[0][0] || '';
  const lastLetter = separetedName[separetedName.length - 1][0] || '';
  return separetedName.length > 1
    ? `${firstLetter}${lastLetter}`.toUpperCase()
    : firstLetter.toUpperCase();
};
export const getFirstAndLastName = (name: string) => {
  const separetedName = name.split(' ');
  const firstName = separetedName[0];
  const lastName = separetedName[separetedName.length - 1];
  return separetedName.length > 1 ? `${firstName} ${lastName}` : firstName;
};
