import React, { useState } from 'react'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpBlock = ({ ...props }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...props} start={viewPortEntered ? null : 0}>
            {({ countUpRef }) => (
                <VisibilitySensor active={!viewPortEntered} onChange={(isVisible) => isVisible && setViewPortEntered(true)} delayedCall>
                    <h4 ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

export default CountUpBlock