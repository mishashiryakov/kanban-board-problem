import { FC, ReactNode } from "react";
import "./styles.scss";

interface IStatusColumn {
  ticketsAmount: number;
  statusName: string;
  children: ReactNode;
}

export const StatusColumn: FC<IStatusColumn> = ({
  ticketsAmount,
  statusName,
  children,
}) => {
  return (
    <div className="status-column">
      <div className="status-header">
        <p className="status-name">
          {statusName} {ticketsAmount}
        </p>
      </div>
      {children}
    </div>
  );
};
