import EventBinding from "./Test1-EventBinding";
import AsyncStateChange from "./Test2-AsyncStateChange";
import ControlledComponent from "./Test3-ControlledComponent";

const EventComponent = () => {
  return (
    <div>
      <EventBinding />
      <AsyncStateChange />
      <ControlledComponent />
    </div>
  )
}

export default EventComponent