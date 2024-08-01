import { useState, FC, ChangeEvent } from "react";
import { LowPriority, MedimumPriority, HighPriority, Cross } from "../../icons";
import "./styles.scss";

export enum EPriorities {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export interface ITicket {
  name: string;
  ticketCode: string;
  id: string;
  priority: EPriorities;
  status: string;
}

interface ITicketProps extends ITicket {}

export const Ticket: FC<ITicketProps> = ({ name, ticketCode, priority }) => {
  console.log("Ticket re-rendered: ", name);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {};

  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="ticket-title">{name}</p>
        <button className="close-button" onClick={() => {}}>
          <Cross />
        </button>
      </div>
      <div className="ticket-description ">
        <p className="ticket-code">{ticketCode}</p>
        {priority === EPriorities.LOW ? (
          <LowPriority />
        ) : priority === EPriorities.MEDIUM ? (
          <MedimumPriority />
        ) : (
          <HighPriority />
        )}
      </div>
      <select value={selectedOption} onChange={handleChange}>
        {/* Map options with Statuses here <option value={status}>{status}</option> */}
      </select>
    </div>
  );
};
