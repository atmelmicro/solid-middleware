import {
  createHandler,
  renderAsync,
  StartServer,
} from "solid-start/entry-server";

export default createHandler(
  ({ forward }) => {
    return async event => {
      console.log("In middleware -> ", event.request.url)
      return forward(event); // next
    };
  },
  renderAsync(event => <StartServer event={event} />)
);