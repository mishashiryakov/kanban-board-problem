import { FC, ReactNode } from "react";
import "./styles.scss";

interface IStatusColumn {
  ticketsAmount: number;
  status: string;
  children: ReactNode;
}

export const StatusColumn: FC<IStatusColumn> = ({
  ticketsAmount,
  status,
  children,
}) => {
  return (
    <div className="status-column">
      <div className="status-header">
        <p className="status-name">
          {status} {ticketsAmount}
        </p>
      </div>
      {children}
    </div>
  );
};
