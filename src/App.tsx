import React from "react";
import "./App.scss";
import { KanbanBoard } from "./components/KanbanBoard";
import { EPriorities } from "./components/Ticket";
import { ITicket } from "./components/Ticket";

// interface IProjects {
//   [key: string]: {
//     stories: {
//       id: string;
//       tickets: ITicket[];
//     }[];
//   };
// }

// interface IPriorities {
//   ticketsWithPriority: {
//     ticketId: string;
//     priority: EPriorities;
//   }[];
// }

const PROJECTS_API_URL =
  "https://run.mocky.io/v3/8f4e1204-e4b4-4831-afb1-b90c5907a475";

const TICKETS_PRIORITIES_URL =
  "https://run.mocky.io/v3/5137db4b-be44-4209-8d3e-7b45f6179052";

function App() {
  return (
    <div className="App">
      {/* <KanbanBoard columns={columns} setColumns={setColumns} /> */}
    </div>
  );
}

export default App;
