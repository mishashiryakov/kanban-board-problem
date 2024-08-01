import { FC, Dispatch, SetStateAction, useCallback, useRef } from "react";
import { StatusColumn } from "../StatusColumn";
import { ITicket, EPriorities } from "../Ticket";
import "./styles.scss";

export interface IColumns {
  [key: string]: ITicket[];
}

interface IKanbanBoard {
  columns: IColumns;
  setColumns: Dispatch<SetStateAction<IColumns>>;
}

export const KanbanBoard: FC<IKanbanBoard> = ({ columns, setColumns }) => {
  const deleteTicket = () => {};

  const changeTicketStatus = () => {};

  const sortTicketsByPriority = () => {};

  return (
    <div className="board">
      {/* Map StatusColumns here */}
      {/* <StatusColumn  statusName={} tickets={} /> */}
    </div>
  );
};
