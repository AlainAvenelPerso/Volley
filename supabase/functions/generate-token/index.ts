import { serve } from "https://deno.land/std/http/server.ts";
import jwt from "https://esm.sh/jsonwebtoken";

serve(async (req) => {
  try {
    const { userId, metadata } = await req.json();

    const secret = Deno.env.get("SUPABASE_JWT_SECRET");
    if (!secret) {
      return new Response("Missing JWT secret", { status: 500 });
    }

    const token = jwt.sign(
      {
        sub: userId,
        role: "authenticated",
        ...metadata
      },
      secret,
      { expiresIn: "1h" }
    );

    return new Response(JSON.stringify({ token }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 400 });
  }
});
