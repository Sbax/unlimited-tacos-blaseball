import { useEffect, useReducer } from 'react';

const actions = {
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED',
  FETCH_ERROR: 'FETCH_ERROR',
};

export const useFetch = (url) => {
  const initialState = {
    loading: false,
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case actions.FETCHING:
        return { ...initialState, loading: true };
      case actions.FETCHED:
        return { ...initialState, loading: false, data: action.payload };
      case actions.FETCH_ERROR:
        return { ...initialState, loading: false, error: action.payload };
      default:
        return currentState;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: actions.FETCHING });
      if (sessionStorage.getItem(url)) {
        const data = JSON.parse(sessionStorage.getItem(url));
        dispatch({ type: actions.FETCHED, payload: data });

        return;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        sessionStorage.setItem(url, JSON.stringify(data));

        if (cancelRequest) return;
        dispatch({ type: actions.FETCHED, payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({ type: actions.FETCH_ERROR, payload: error.message });
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
