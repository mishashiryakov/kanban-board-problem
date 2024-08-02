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
  status: string;
  priority: EPriorities;
}

interface ITicketProps extends ITicket {}

export const Ticket: FC<ITicketProps> = ({
  name,
  ticketCode,
  id,
  status,
  priority,
}) => {
  console.log("Ticket re-rendered: ", name);

  const [selectedOption, setSelectedOption] = useState<string>(status);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {};

  const PriorityComponent = priorityComponents[priority] || null;

  return (
    <div className="ticket">
      <div className="ticket-header">
        <p className="ticket-title">{name}</p>
        <button
          className="close-button"
          onClick={() => {
            // add delete logic here
          }}
        >
          <Cross />
        </button>
      </div>
      <div className="ticket-description ">
        <p className="ticket-code">{ticketCode}</p>
        {PriorityComponent && <PriorityComponent />}
      </div>
      <select value={selectedOption} onChange={handleSelectChange}>
        {/* Map options with Statuses here <option value={status}>{status}</option> */}
      </select>
    </div>
  );
};

const priorityComponents = {
  [EPriorities.LOW]: LowPriority,
  [EPriorities.MEDIUM]: MedimumPriority,
  [EPriorities.HIGH]: HighPriority,
};
