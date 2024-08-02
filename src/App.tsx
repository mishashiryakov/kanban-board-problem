import React, { useState } from "react";
import "./App.scss";
import { KanbanBoard, IColumns, ITicket, EPriorities } from "./components";
import { PROJECTS_API_URL, TICKETS_PRIORITIES_URL } from "./constants";

// return type for PROJECTS_API_URL
interface IProjects {
  [key: string]: {
    stories: {
      id: string;
      tickets: ITicket[];
    }[];
  };
}

function App() {
  const [columns, setColumns] = useState<IColumns>({});

  return (
    <div className="App">
      {/* <KanbanBoard columns={columns} setColumns={setColumns} /> */}
    </div>
  );
}

export default App;

// return type for TICKETS_PRIORITIES_URL
interface IPriorities {
  ticketsWithPriority: {
    ticketId: string;
    priority: EPriorities;
  }[];
}
