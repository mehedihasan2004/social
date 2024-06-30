import { Webhook } from "svix";
import prisma from "@/lib/client";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers(),
    svix_id = headerPayload.get("svix-id"),
    svix_timestamp = headerPayload.get("svix-timestamp"),
    svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json(),
    body = JSON.stringify(payload),
    wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type,
    data = JSON.parse(body).data;

  console.log(data, "....................................OUT");

  if (eventType === "user.created") {
    console.log(data, "....................................IN");
    try {
      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: data.username ?? "",
          avatar: data.image_url ?? "/noAvatar.png",
          cover: "/noCover.png",
        },
      });

      return new Response("User has been created!", { status: 200 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to create the user!", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    try {
      await prisma.user.update({
        where: { id: evt.data.id },
        data: {
          username: data.username,
          avatar: data.image_url ?? "/noAvatar.png",
        },
      });

      return new Response("User has been updated!", { status: 200 });
    } catch (err) {
      console.log(err);
      return new Response("Failed to update the user!", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
