import React from 'react';

import {Timeline, TimelineEvent} from 'react-event-timeline';

export default class DailyRoutine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Timeline>
                    <TimelineEvent
                        title="Minnesota State University ( Mankato )"
                        subtitle=""
                        subtitleStyle={{color: "green"}}
                        titleStyle={{fontWeight: "bold"}}
                        icon={<i className="fas fa-bed"></i>}
                        iconColor={"green"}
                    >

                        <div>

                        </div>
                    </TimelineEvent>

                </Timeline>

            </div>


        );
    }
}

