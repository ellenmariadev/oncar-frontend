export function formatPhoneNumber(value: string) {
  if (!value) return value;

  const phoneNumber = value.replace(/\D/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }

  const formattedNumber = phoneNumber.replace(
    /(\d{2})(\d{5})(\d{4})/,
    "($1) $2-$3"
  );
  return formattedNumber;
}

export function removePhoneNumberFormatting(value: string) {
  if (!value) return value;

  const phoneNumber = value.replace(/\D/g, "");
  return phoneNumber;
}
