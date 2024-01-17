import React from 'react';

export function Panel({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="ais-Panel">
      <div className="ais-Panel-body">{children}</div>
    </div>
  );
}
