import { createClient } from "redis";
import Game from "../proto/compiled";
export default function Home() {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      message: formData.get("message") as string,
    };

    console.log(rawFormData.message);

    const client = await createClient()
      .on("error", (err) => console.log("Redis Client Error", err))
      .connect();

    var msg = Game.planetary.Game.encode({
      id: "a",
      charname: rawFormData.message,
      seed: "999",
    }).finish();

    let decoder = new TextDecoder("utf-8");

    // Using decode method to get string output
    let str = decoder.decode(msg);
    console.log(msg);
    console.log(msg.length);
    await client.publish("messages", str);
    await client.disconnect();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <form action={createInvoice}>
          <input type="text" name="message"></input>
          <button className="w-10 border-gray-300 border-2">Run</button>
        </form>
      </div>
    </main>
  );
}
