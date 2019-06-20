import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import SearchForm from "../components/Search/SearchForm";
import { history } from "../helpers";

export default () => {
  const handleSubmit = (username: string) => {
    history.push("/users/" + username);
  };

  return (
    <DefaultTemplate>
      <SearchForm onSubmit={handleSubmit} />
    </DefaultTemplate>
  );
};
