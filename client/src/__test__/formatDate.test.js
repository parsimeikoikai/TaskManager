import { formatDate } from '../components/Task/DateFormatter';

describe('formatDate function', () => {
  test('formats date string correctly', () => {
    const dateString = '2024-03-21T12:00:00.000Z';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toEqual('Mar 21, 2024');
  });
});
