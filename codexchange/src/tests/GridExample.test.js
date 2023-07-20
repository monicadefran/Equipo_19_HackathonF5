import { fetchData } from './GridExample';
import mockAxios from 'axios';

describe('fetchData', () => {
  it('calls axios with success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1 }],
      })
    );

    const result = await fetchData();

    expect(result).toEqual([{ id: 1 }]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      'http://localhost:8000/coders'
    );
  });
});