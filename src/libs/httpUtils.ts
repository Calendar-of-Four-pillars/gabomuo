const makeUrlToPublicApiFromClient = (
  query: Partial<{
    [key: string]: string | string[];
  }>
) => {
  const url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
  let queryParams = `?${encodeURIComponent('serviceKey')}=${encodeURIComponent(
    '7lSZ7WTWeBu5mpqVJ9htdJwjvRT2HBrg/nue9AM+vSZFqT/bgr4iAD+A0v/15A0LVVn0ZXfsF5tAKkZ1z4kfUg=='
  )}`; /* Service Key */
  queryParams += `&${encodeURIComponent('solYear')}=${encodeURIComponent(query.year as string)}`;
  queryParams += `&${encodeURIComponent('solMonth')}=${encodeURIComponent(query.month as string)}`;
  queryParams += `&${encodeURIComponent('solDay')}=${encodeURIComponent(query.day as string)}`;

  return `${url}${queryParams}`;
};

export default makeUrlToPublicApiFromClient;
