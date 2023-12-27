import EventBinding from "./Test1-EventBinding";
import AsyncStateChange from "./Test2-AsyncStateChange";
import ControlledComponent from "./Test3-ControlledComponent";
import UnControlledComponent from "./Test4-UnControlledComponent";

const EventComponent = () => {
  return (
    <div>
      <EventBinding />
      <AsyncStateChange />
      <ControlledComponent />
      <UnControlledComponent />
    </div>
  )
}

export default EventComponent