Global Kanban board app for entire Organization.

Client asks about new feature. He wants to see all active tickets from every project in one place grouped by Status. Therefore we created an API that would return every project with its data.

Requirements

1. Fetch data for existing projects(PROJECTS_API_URL).
2. Transform data to match interface. API response would not match to existing interface type.
   a. Group tickets by their status. We assume that we don't know what are possible statuses.
3. Allow tickets to be deleted.
4. Allow ticket's status to be changed through <select> component.
5. Fetch data tickets priorities(TICKETS_PRIORITIES_URL).
6. Transform data to match existing interface.
   a. Each ticket should get a priority.
7. Optimize code perfomance.

Stretch goals

6. Add tickets sorting by priority
7. What could be potential improvements?
8. How would you develop drag n drop?

Entry point App.tsx. Components to display: KanbanBoard => StatusColumn => Ticket

const PROJECTS_API_URL =
'https://run.mocky.io/v3/8f4e1204-e4b4-4831-afb1-b90c5907a475'
const TICKETS_PRIORITIES_URL =
'https://run.mocky.io/v3/5137db4b-be44-4209-8d3e-7b45f6179052'









1. Fetch data for existing projects(PROJECTS_API_URL) and priorities for tickets(TICKETS_PRIORITIES_URL) from different APIs. You can find URL's below requirements.
2. Transform data to match existing interface.
   a. Group tickets by their status. We assume that we don't know what are possible statuses.
   b. Each ticket should get a priority.
3. Allow tickets to be deleted.
4. Allow ticket's status to be changed through <select> component.
5. Optimize code perfomance.