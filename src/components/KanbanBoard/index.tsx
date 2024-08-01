import { FC, Dispatch, SetStateAction } from "react";
import { StatusColumn } from "../StatusColumn";
import { ITicket } from "../Ticket";
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

  return (
    <div className="board">
      {/* Map StatusColumns here */}
      {/* <StatusColumn  statusName={} tickets={} /> */}
    </div>
  );
};
