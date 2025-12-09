import React, { forwardRef } from 'react';

export const MapStyled = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return <div {...props} ref={ref} className="h-full w-full" />;
});

MapStyled.displayName = 'MapStyled';