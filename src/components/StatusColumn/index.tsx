import { FC, useEffect, useState } from "react";
import { Ticket, ITicket } from "../Ticket";
import { Arrow } from "../../icons/Arrow";
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
        {/* Add sorting logic here */}
        {/* <button className="arrow-button" onClick={() => {}}>
          <Arrow
            style={{
              opacity: ACTIVE_SORTING_CONDITION ? "1" : "0.3",
              transform: `rotate(${ACTIVE_SORTING_CONDITION ? 180 : 0}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </button> */}
      </div>
      {/* Map tickets here */}
      {/* <Ticket /> */}
    </div>
  );
};
