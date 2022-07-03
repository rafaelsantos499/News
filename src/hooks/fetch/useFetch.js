import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [codeError, setCodeErro] = React.useState(null);
  const [articleTotal, setArticleTotal] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  const [country, setCountry] = React.useState("br");

  const apiBase = `https://newsapi.org/v2/`;
  const configs = `&pageSize=${limit}`;
  const location = `&country=${country}`;
  const apiKey = "&apiKey=243c29a5b7724acab6cb8bd1c5ab5c8f";

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(
        apiBase + url + configs + location + apiKey,
        options
      );
      json = await response.json();
      setCodeErro(response.status);
      setArticleTotal(json.totalResults);
    } catch (error) {
      json = null;
      setError("error");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  // pagina de

  const resultSeach = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(apiBase + url + configs + apiKey, options);
      json = await response.json();
      setCodeErro(response.status);
      setArticleTotal(json.totalResults);
    } catch (error) {
      json = null;
      setError("error");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    error,
    loading,
    codeError,
    articleTotal,
    limit,
    setLimit,
    request,
    resultSeach,
  };
};

export default useFetch;
