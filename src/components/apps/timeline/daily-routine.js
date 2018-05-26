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
                       title="Wake up."
                       subtitle="7:00 AM"
                       subtitleStyle={{color: "green"}}
                       titleStyle={{fontWeight: "bold"}}
                       icon={<i className="fas fa-bed"></i>}
                       iconColor={"green"}
                   >

                       <div>
                           <ul>
                               <li>Get out of bed.</li>
                               <li>Make bed</li>
                               <li>Take Vitamins</li>
                               <li>Find Clothes for the day.</li>
                               <li>Mediation</li>
                           </ul>
                       </div>
                   </TimelineEvent>

                   <TimelineEvent
                       title="Morning Bathroom"
                       subtitle="7:30 AM"
                       subtitleStyle={{color: "green"}}
                       titleStyle={{fontWeight: "bold"}}
                       icon={<i className="fas fa-shower"></i>}
                       iconColor={"green"}
                   >
                        <div>
                            <ul>
                                <li>
                                    <a data-toggle="collapse" href="#showerCollapse" aria-controls="showCollapse">Shower</a>
                                    <div className="collapse multi-collapse" id="showerCollapse">
                                        <div className="card card-body">

                                            <ul>
                                                <li data-toggle="tooltip" data-placement="top" title="Scrub">body</li>
                                                <li>hair</li>
                                                <li>face</li>
                                            </ul>
                                            <a href={"https://greatist.com/grow/best-way-to-shower"}>Proper Showing Techniques </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#getDessedCollapse"
                                       role="button" aria-expanded="false" aria-controls="getDessedCollapse">Get Dressed</a>
                                    <div className="collapse multi-collapse" id="getDessedCollapse">
                                        <div className="card card-body">
                                           Put laundry away
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a data-toggle="collapse" href="#brushTeethCollapse"
                                       role="button" aria-expanded="false" aria-controls="brushTeethCollapse">Brush Teeth</a>
                                    <div className="collapse multi-collapse" id="brushTeethCollapse">
                                        <div className="card card-body">
                                            <ul>
                                                <li>Two Minutes of brushing with circular motions.</li>
                                                <li>Scrape tongue</li>
                                                <li>Floss</li>
                                                <li>Mouth Wash</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>Skin Care</li>
                            </ul>
                        </div>

                   </TimelineEvent>

                   <TimelineEvent
                        title={"Breakfast"}
                        subtitle={"8:30 AM"}
                        icon={<i className="fas fa-coffee"></i>}
                        iconColor={"green"}
                        titleStyle={{fontWeight: "bold"}}
                   >
                       <div>
                           <ul>
                               <li> News </li>
                               <li>300 Calorie Minimum
                                        <ul>
                                            <li>Carbohydrates</li>
                                            <li>Caffeine</li>
                                            <li>Protein</li>
                                        </ul>
                               </li>
                               <li>Clean up
                                    <ul>
                                        <li>Dishes - empty sink</li>
                                        <li>Clean Counters</li>
                                        <li>Sweep</li>
                                    </ul>
                               </li>

                           </ul>
                       </div>
                   </TimelineEvent>

                   <TimelineEvent
                       title={"Exercise"}
                       subtitle={"9:30 AM"}
                       icon={<i className="fas fa-shoe-prints"></i>}
                       iconColor={"green"}
                       titleStyle={{fontWeight: "bold"}}
                   >
                       <ul>
                           <li>Walk - Step minimum of 5,000</li>
                       </ul>
                   </TimelineEvent>

                   <TimelineEvent
                        title={"Job Hunt"}
                        subtitle={"10:00 AM"}
                        icon={<i className="fas fa-briefcase"></i>}
                        iconColor={"green"}
                        titleStyle={{fontWeight: "bold"}}
                   >
                       <ul>
                           <li><a target="_newtab" href="https://trello.com/b/X78TwJdN/job-hunt"> Trello</a>
                            <ul>
                                <li>Add potential Jobs</li>
                                <li>Research Jobs</li>
                                <li>Networking</li>
                            </ul>
                           </li>
                           <li>Check Email </li>
                           <li> Review <a target="_newtab" href="https://mail.google.com/tasks/canvas">Todo List</a></li>
                           <li>Practice Elevator Speech</li>
                           <li>Answer phone calls</li>

                       </ul>

                   </TimelineEvent>

                   <TimelineEvent
                       title={"Study"}
                       subtitle={"1:00 PM"}
                       icon={<i className="fas fa-book"></i>}
                       iconColor={"green"}
                       titleStyle={{fontWeight: "bold"}}
                   >
                       <ul>
                           <li> Study
                               <ul>
                               </ul>
                           </li>
                       </ul>

                   </TimelineEvent>

                   <TimelineEvent
                       title={"Dinner"}
                       subtitle={"5:00 PM"}
                       icon={<i className="fas fa-utensils"></i>}
                       iconColor={"green"}
                       titleStyle={{fontWeight: "bold"}}
                   >
                       <ul>
                           <li>Prepare Well Balanced Meal</li>
                           <li>Talk to loved ones </li>
                           <li>Clear Dishes - set dish washer to run in 8 hours</li>
                       </ul>

                   </TimelineEvent>

                   <TimelineEvent
                       title={"Entertainment"}
                       subtitle={"6:00 PM"}
                       icon={<i className="fas fa-star"></i>}
                       iconColor={"green"}
                       titleStyle={{fontWeight: "bold"}}
                   >
                       Hobbies
                       <ul>
                           <li>Reading</li>
                           <li>Video Games</li>
                           <li>Outside activities?</li>
                       </ul>

                   </TimelineEvent>

                   <TimelineEvent
                       title="Bed Time"
                       titleStyle={{fontWeight: "bold"}}
                       subtitle="11:59 PM"
                       subtitleStyle={{color: "green"}}
                       icon={<i className="fas fa-bed"></i>}
                       iconColor={"green"}
                   >
                       <ul>
                           <li>Charge phone - Set Alarm</li>
                           <li>Brush Teeth</li>
                           <li>Drink Water</li>
                           <li>Take Melatonin</li>
                       </ul>
                   </TimelineEvent>
               </Timeline>

           </div>


        );
    }
}

