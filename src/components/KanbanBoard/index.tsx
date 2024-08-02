import { FC, Dispatch, SetStateAction } from "react";
import { StatusColumn, Ticket, ITicket } from "../index";
import "./styles.scss";

export interface IColumns {
  [status: string]: ITicket[];
}

interface IKanbanBoard {
  columns: IColumns;
  setColumns: Dispatch<SetStateAction<IColumns>>;
}

export const KanbanBoard: FC<IKanbanBoard> = ({ columns, setColumns }) => {
  const deleteTicket = () => {};

  const changeTicketStatus = () => {};

  return (
    <div className="board">
      {/* Map StatusColumns here
      <StatusColumn status={} ticketsAmount={}>
        Map tickets here
        <Ticket />
      </StatusColumn> */}
    </div>
  );
};
