import { FC } from "react";
import { Ticket, ITicket } from "../Ticket";

import "./styles.scss";

interface IStatusColumn {
  tickets: ITicket[];
  statusName: string;
}

export const StatusColumn: FC<IStatusColumn> = ({ tickets, statusName }) => {
  return (
    <div className="status-column">
      <div className="status-header">
        <p className="status-name">
          {statusName} {tickets.length}
        </p>
      </div>
      {/* Map tickets here */}
      {/* <Ticket /> */}
    </div>
  );
};
