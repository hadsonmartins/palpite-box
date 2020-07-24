
export const fromBase64 = value => {
  const buff = Buffer(value, 'base64');
  return buff.toString('ascii');
}