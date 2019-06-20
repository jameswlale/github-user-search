import React, { useState } from "react";
import Textbox from "../Forms/Textbox";
import { H2 } from "../Forms/Headers";

export interface IStateProps {}

export interface IDispatchProps {
  onSubmit: (username: string) => void;
}

type Props = IStateProps & IDispatchProps;

export default (props: Props) => {
  const [userName, setUserName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName.length > 0) {
      props.onSubmit(userName);
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div className="search-form text-center">
      <H2>Github user lookup</H2>
      <form method="get" onSubmit={handleSubmit} className="mt-4 form-row">
        <div className="form-group col-md-10 col-sm-9">
          <Textbox
            name="username"
            placeholder="Enter user name..."
            onChange={handleTextChange}
            className="form-control"
            autoFocus={true}
            data-cy="username"
          />
        </div>
        <div className="col-md-2 col-sm-3">
          <input
            type="submit"
            className="btn btn-primary"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};
