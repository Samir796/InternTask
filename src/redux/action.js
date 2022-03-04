export const GET_COUNTRY = 'GET_COUNTRY';

const API_URL = ' https://mocki.io/v1/36b444ae-3413-4c91-b0a8-73afecd50bd6';

export const getCountry = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COUNTRY,
          payload: json,
        });
      } else {
        consol.log('unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
