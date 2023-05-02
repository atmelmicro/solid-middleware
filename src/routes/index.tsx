import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import Counter from "~/components/Counter";

export function routeData() {
  return createServerData$(async () => {
    return "Hello world <from server>!"
  })
}

export default function Home() {
  const data = useRouteData<typeof routeData>()
  
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>{data()}</p>
    </main>
  );
}
